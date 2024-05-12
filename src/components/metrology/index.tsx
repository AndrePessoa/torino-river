import { useMemo } from "react";
import { waterLevelSensors } from "../../data";
import { useWaterLevel } from "../../hooks/useWaterLevel";
import { IWeatherData, useWeather } from "../../hooks/useWeather";
import { Chart, TDatasets, TLabels } from "./chart";
import "./index.css";

function useWaterLevelsData() {
  const moncalieriData = useWaterLevel(waterLevelSensors.MONCALIERI.id);
  const murazziData = useWaterLevel(waterLevelSensors.MURAZZI.id);

  const labels = useMemo(() => {
    return moncalieriData.waterLevel?.map(([time]) =>
      new Date(time).toLocaleString()
    );
  }, [moncalieriData]);

  const waterDataset = useMemo(() => {
    return [
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
  }, [moncalieriData, murazziData]);

  return {
    labels,
    data: waterDataset || [],
    loading: moncalieriData.loading || murazziData.loading,
    error: moncalieriData.error || murazziData.error,
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

type TMeteologyCardProps = {
  data: IWeatherData;
};

function MeteologyCard({ data }: TMeteologyCardProps) {
  const { windDirection, windVelocity, rain, temperature, date } = data;
  const time = new Date(date).toLocaleTimeString();

  return (
    <div className="meteology-card">
      <h4>{time}</h4>
      <div className="meteology-data">
        <small>Vento</small>
        <span>{windDirection}°</span>
        <span></span>
        <span>{windVelocity}m/s</span>
        <small>Pioggia</small>
        <span>{rain}mm</span>
        <small>Temperatura</small>
        <span>{temperature}°C</span>
      </div>
    </div>
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
