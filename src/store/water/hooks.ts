import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { waterLevelSensors } from "../../data";
import { DEFAULT_KEY, waterLevelSensorInterval } from "../statics";
import { AppState } from "..";
import {
  sensorURL,
  proxyURL,
  WaterLevelStatus,
  IdroChartFilter,
} from "./statics";
import { waterDataSelector, waterFetchStatusSelector } from "./selector";
import { updateData, updateFetcherStatus } from "./actions";
import { IdroData } from "./types";

export const useWaterDataFilter = () => {
  const [params] = useSearchParams();

  return params.get("filter") || IdroChartFilter.ALL;
};

export const useWaterData = (key: string = DEFAULT_KEY) => {
  const filter = useWaterDataFilter();
  const loadedData = useSelector((state: AppState) =>
    waterDataSelector(state, key)
  );

  const filteredData = useMemo(() => {
    if (!loadedData) return undefined;

    const { data, unit } = loadedData;
    const _data = data?.filter(([time]) => {
      const date = new Date(time);
      const now = new Date();

      switch (filter) {
        case IdroChartFilter.LAST_24H:
          return date >= new Date(now.getTime() - 24 * 60 * 60 * 1000);
        case IdroChartFilter.LAST_3D:
          return date >= new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
        default:
          return true;
      }
    });

    return {
      data: _data,
      unit,
    };
  }, [loadedData, filter]);

  return filteredData;
};

export const useWaterFetcherStatus = (key: string = DEFAULT_KEY) =>
  useSelector((state: AppState) => waterFetchStatusSelector(state, key));

export function useWaterLevel(sensorId: string) {
  const sensorUrl = sensorURL(sensorId);
  const proxyUrl = proxyURL(sensorUrl);

  const waterData = useWaterData(sensorId);
  const { data, unit } = waterData || {};
  const { loading, error } = useWaterFetcherStatus(sensorId);
  const noCache = !waterData;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!noCache) return;

    updateFetcherStatus({
      key: sensorId,
      status: { loading: true, error: null },
    });

    fetch(proxyUrl, { signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const metric = data?.contents?.properties?.units_sym_html || {};
        const idro = (data?.contents?.properties?.idro || {}) as IdroData;

        // sort by date
        const sorted = Object.entries(idro).sort(
          ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
        );

        updateData({
          key: sensorId,
          data: {
            data: sorted,
            unit: metric,
          },
        });

        updateFetcherStatus({
          key: sensorId,
          status: { loading: false, error: null },
        });
      })
      .catch((error) => {
        if (abortController.signal.aborted) return;

        updateFetcherStatus({
          key: sensorId,
          status: { loading: false, error },
        });
      });

    return () => {
      abortController.abort("Unmounted water level component");
    };
  }, [proxyUrl, sensorId, noCache]);

  return { waterLevel: data, unit, error, loading };
}

export function useWaterLevelAlert(sensorId: string) {
  const { waterLevel } = useWaterLevel(sensorId);
  const dataSensor = waterLevelSensors[sensorId];
  if (!dataSensor || !waterLevel?.length) return WaterLevelStatus.UNKNOWN;

  const [, value] = waterLevel.at(-1) || [];

  if (value > dataSensor.dangerAlert) return WaterLevelStatus.DANGER;
  if (value > dataSensor.warningAlert) return WaterLevelStatus.WARNING;

  return WaterLevelStatus.GOOD;
}
