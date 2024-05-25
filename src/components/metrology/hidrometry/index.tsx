import { useMemo } from "react";
import { OctagonX, TriangleAlert } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  useWaterDataFilter,
  useWaterLevel,
  useWaterLevelAlert,
} from "../../../store/water/hooks";
import { waterLevelSensors } from "../../../data";
import {
  IdroChartFilter,
  WaterLevelStatus,
  sensorOriginalURL,
} from "../../../store/water/statics";
import { Chart, TDatasets, TLabels } from "./chart";
import "./index.css";

function useWaterLevelsData() {
  const moncalieriData = useWaterLevel(waterLevelSensors.MONCALIERI.id);
  const murazziData = useWaterLevel(waterLevelSensors.MURAZZI.id);
  const carignanoData = useWaterLevel(waterLevelSensors.CARIGNANO.id);

  const labels = useMemo(() => {
    return moncalieriData.waterLevel?.map(([time]) =>
      new Date(time).toLocaleString()
    );
  }, [moncalieriData]);

  const waterDataset = useMemo(() => {
    return [
      {
        id: waterLevelSensors.CARIGNANO.key,
        label: waterLevelSensors.CARIGNANO.label,
        data: carignanoData.waterLevel?.map(([_, { value }]) => value) || [],
        borderColor: "#db8223",
        backgroundColor: "rgba(219, 130, 35, .5)",
      },
      {
        id: waterLevelSensors.MONCALIERI.key,
        label: waterLevelSensors.MONCALIERI.label,
        data: moncalieriData.waterLevel?.map(([_, { value }]) => value) || [],
        borderColor: "#4dbe6dff",
        backgroundColor: "rgba(77, 190, 109, .5)",
      },
      {
        id: waterLevelSensors.MURAZZI.key,
        label: waterLevelSensors.MURAZZI.label,
        data: murazziData.waterLevel?.map(([_, { value }]) => value) || [],
        borderColor: "#66a2c9ff",
        backgroundColor: "rgba(102, 162, 201, .5)",
      },
    ];
  }, [moncalieriData, murazziData, carignanoData]);

  return {
    labels,
    data: waterDataset || [],
    loading:
      moncalieriData.loading || murazziData.loading || carignanoData.loading,
    error: moncalieriData.error || murazziData.error || carignanoData.error,
  };
}

type TCurrentWaterLevelProps = {
  data: TDatasets[] | undefined;
  labels: TLabels | undefined;
};

export function CurrentWaterLevelsIcon({ id }: { id: string }) {
  const dataSensorStatus = useWaterLevelAlert(id);

  if (dataSensorStatus === WaterLevelStatus.UNKNOWN) {
    return null;
  }
  if (dataSensorStatus === WaterLevelStatus.DANGER)
    return (
      <span className="level-alert danger">
        <OctagonX size={15} /> Livello pericoloso
      </span>
    );
  if (dataSensorStatus === WaterLevelStatus.WARNING)
    return (
      <span className="level-alert warning">
        <TriangleAlert size={15} /> Livello di guardia
      </span>
    );

  return null;
}

export function WaterLevelFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = useWaterDataFilter();

  const changeFilter = (filter: IdroChartFilter) => {
    setSearchParams({ ...searchParams, filter });
  };

  return (
    <div className="filters">
      <div
        className={`filter ${filter === IdroChartFilter.ALL ? "active" : ""}`}
        onClick={() => changeFilter(IdroChartFilter.ALL)}
      >
        tutto
      </div>
      <div
        className={`filter ${
          filter === IdroChartFilter.LAST_3D ? "active" : ""
        }`}
        onClick={() => changeFilter(IdroChartFilter.LAST_3D)}
      >
        ultimi 3 giorni
      </div>
      <div
        className={`filter ${
          filter === IdroChartFilter.LAST_24H ? "active" : ""
        }`}
        onClick={() => changeFilter(IdroChartFilter.LAST_24H)}
      >
        ultimi 24 ore
      </div>
    </div>
  );
}

function CurrentWaterLevels({ data, labels }: TCurrentWaterLevelProps) {
  if (!data?.length || !labels?.length) return null;

  return (
    <>
      <div className="metrics">
        {data.map((dataset) => {
          const sensorId = waterLevelSensors[dataset.id].id;

          return (
            <a
              title={dataset.label}
              href={sensorOriginalURL(sensorId)}
              target="_blank"
              rel="noreferrer"
              key={dataset.label}
              className="metric"
            >
              <span>
                <strong>{dataset.label}</strong>:{" "}
                <span>{dataset.data.at(-1)}m</span>
              </span>
              <CurrentWaterLevelsIcon id={sensorId} />
            </a>
          );
        })}
        <div className="legend">
          <div>
            <small>
              Last data at {labels.at(-1)} from {""}
              <a
                href="https://www.arpa.piemonte.it/rischi_naturali"
                target="_blank"
                rel="noreferrer"
              >
                ARPA
              </a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hidrometry() {
  const { labels, data, error, loading } = useWaterLevelsData();

  return (
    <>
      {loading && <div className="alert">loading...</div>}
      {error && <div className="alert">{error.message}</div>}
      {!loading && !error && (
        <div className="col-2">
          <div>
            {!loading ? (
              <>
                <Chart labels={labels || []} datasets={data || []} />
                <WaterLevelFilter />
              </>
            ) : (
              "loading..."
            )}
          </div>
          <div>
            <h3>Livelli del fiume</h3>
            {!loading ? (
              <CurrentWaterLevels data={data} labels={labels} />
            ) : (
              "loading..."
            )}
          </div>
        </div>
      )}
    </>
  );
}
