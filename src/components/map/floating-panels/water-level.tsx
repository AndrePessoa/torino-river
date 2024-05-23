import { useMemo } from "react";
import "./water-level.css";
import { waterLevelSensors } from "../../../data";
import { useWaterLevel } from "../../../store/water/hooks";
import { sensorOriginalURL } from "../../../store/water/statics";

export function WaterLevel({ sensorId = waterLevelSensors.CARIGNANO.id }) {
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
      href={sensorOriginalURL(sensorId)}
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
