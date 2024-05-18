import { useMemo } from "react";
import { waterLevelSensors } from "../../data";
import { useWeather } from "../../store/weather/hook";
import { useWaterLevel } from "../../store/water/hooks";
import { Chart, TDatasets, TLabels } from "./chart";
import "./index.css";
import { MeteologyCard } from "./meteo-card";

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
        label: waterLevelSensors.CARIGNANO.label,
        data: carignanoData.waterLevel?.map(([_, { value }]) => value) || [],
        borderColor: "#db8223",
        backgroundColor: "rgba(219, 130, 35, .5)",
      },
      {
        label: waterLevelSensors.MONCALIERI.label,
        data: moncalieriData.waterLevel?.map(([_, { value }]) => value) || [],
        borderColor: "#4dbe6dff",
        backgroundColor: "rgba(77, 190, 109, .5)",
      },
      {
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

function CurrentWaterLevels({ data, labels }: TCurrentWaterLevelProps) {
  if (!data?.length || !labels?.length) return null;

  return (
    <>
      <div className="metrics">
        {data.map((dataset) => (
          <div key={dataset.label} className="metric">
            <strong>{dataset.label}</strong>:{" "}
            <span>{dataset.data.at(-1)}m</span>
          </div>
        ))}
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

function Hidrometry() {
  const { labels, data, error, loading } = useWaterLevelsData();

  return (
    <>
      {loading && <div className="alert">loading...</div>}
      {error && <div className="alert">{error.message}</div>}
      {!loading && !error && (
        <div className="col-2">
          <div>
            {!loading ? (
              <Chart labels={labels || []} datasets={data || []} />
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

function Meteology() {
  const { weatherData, loading, error } = useWeather(5);

  return (
    <>
      {loading && <div className="alert">loading...</div>}
      {error && <div className="alert">{error.message}</div>}
      {!loading && !error && (
        <div>
          <h3>Meteo</h3>
          <div className="meteology-cards">
            {weatherData?.data.map((d) => (
              <MeteologyCard data={d} />
            ))}
          </div>
          <div className="legend">
            <small>
              Data from {""}
              <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noreferrer"
              >
                Open-Meteo
              </a>
            </small>
          </div>
        </div>
      )}
    </>
  );
}

export function Metrology() {
  return (
    <section className="metrology" id="metrology">
      <div className="content">
        <h2>METEO E IDROMETRI</h2>
        <Hidrometry />
        <Meteology />
      </div>
    </section>
  );
}
