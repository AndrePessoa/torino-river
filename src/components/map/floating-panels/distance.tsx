import { useDistance } from "../../../store/content/hooks";
import { totalDistance } from "../../../store/statics";
import "./distance.css";

function formatDistance(distance: number) {
  return (distance / 1000).toFixed(2);
}

function formatPercent(distance: number) {
  return (distance * 100).toFixed(2);
}

export const Distance = () => {
  const distance = useDistance();
  const percent = `${formatPercent(distance)}%`;

  return (
    <div className="floating-panel distance-panel">
      <div>
        <div className="distance_percent-container">
          <div
            className="distance_percent-bar"
            title={percent}
            style={{ width: percent }}
          />
        </div>
        <span className="water-level__label">Distanza</span>
        <span className="water-level__values">
          <span className="water-level__value">
            {formatDistance(distance * totalDistance)}
          </span>
          <span className="water-level__unit">km</span>
        </span>
      </div>
    </div>
  );
};
