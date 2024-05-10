import { useMemo } from "react";
import "./water-level.css";
import { useWaterLevel } from "../../hooks/useWaterLevel";
import { waterLevelSensors } from "../../data";

export function WaterLevel({ sensorId = waterLevelSensors.MONCALIERI.id }) {
  const { waterLevel, unit, error, loading } = useWaterLevel(sensorId);
  const [date, { value }] = waterLevel?.at(-1) || ["", {}];

  const title = useMemo(() => {
    return `Sensor MONCALIERI PO at ${new Date(date).toLocaleString()}`;
  }, [date]);

  if (loading) {
    return <div className="floating-panel water-level">Loading...</div>;
  }

  if (error) {
    return null;
  }

  return (
    <a
      className="floating-panel water-level"
      title={title}
      href={`https://www.arpa.piemonte.it/rischi_naturali/snippets_arpa_graphs/dettaglio_stazione/?id=${sensorId}&param=idro`}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <span className="water-level__label">Livelli del fiume</span>
        <span className="water-level__values">
          <span className="water-level__value">{value}</span>
          <span className="water-level__unit">{unit || "m"}</span>
        </span>
      </div>
    </a>
  );
}
