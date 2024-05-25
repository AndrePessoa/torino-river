import { useMemo } from "react";
import "./water-level.css";
import { waterLevelSensors } from "../../../data";
import { useWaterLevel, useWaterLevelAlert } from "../../../store/water/hooks";
import {
  WaterLevelStatus,
  sensorOriginalURL,
} from "../../../store/water/statics";

function useStatusClassname(id: string) {
  const dataSensorStatus = useWaterLevelAlert(id);

  if (dataSensorStatus === WaterLevelStatus.UNKNOWN) {
    return "";
  }
  if (dataSensorStatus === WaterLevelStatus.DANGER) return "danger";
  if (dataSensorStatus === WaterLevelStatus.WARNING) return "warning";

  return "";
}

export function WaterLevel({ sensorId = waterLevelSensors.CARIGNANO.id }) {
  const { waterLevel, unit, error, loading } = useWaterLevel(sensorId);
  const status = useStatusClassname(sensorId);
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
      className={`floating-panel weather-panel ${status}`}
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
