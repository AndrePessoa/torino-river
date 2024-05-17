import { useEffect } from "react";
import { useSelector } from "react-redux";
import { sensorURL, proxyURL } from "./statics";
import { waterDataSelector, waterFetchStatusSelector } from "./selector";
import { DEFAULT_KEY } from "../statics";
import { AppState } from "..";
import { updateData, updateFetcherStatus } from "./actions";
import { IdroData } from "./types";

export const useWaterData = (key: string = DEFAULT_KEY) =>
  useSelector((state: AppState) => waterDataSelector(state, key));

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
      status: { loading: noCache, error: null },
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
