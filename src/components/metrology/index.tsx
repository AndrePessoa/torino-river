import { useMemo } from "react";
import { waterLevelSensors } from "../../data";
import { useWaterLevel } from "../../hooks/useWaterLevel";
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
      {data.map((dataset) => (
        <p>
          <strong>{dataset.label}</strong>: <span>{dataset.data.at(-1)}m</span>
        </p>
      ))}
      <div>
        <small>Last data at {labels.at(-1)}</small>
      </div>
      <div>
        <small>
          Data from {""}
          <a
            href="https://www.arpa.piemonte.it/rischi_naturali"
            target="_blank"
            rel="noreferrer"
          >
            ARPA
          </a>
        </small>
      </div>
    </>
  );
}

export function Metrology() {
  const { labels, data, loading } = useWaterLevelsData();

  return (
    <section className="metrology" id="metrology">
      <div className="content">
        <h2>METEO E IDROMETRI</h2>
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
      </div>
    </section>
  );
}
