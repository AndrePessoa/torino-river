import { useDistance } from "../../../store/content/hooks";

function formatDistance(distance: number) {
  return (distance / 1000).toFixed(2);
}

export const Distance = () => {
  const distance = useDistance();

  return (
    <div className="floating-panel distance-panel">
      <div>
        <span className="water-level__label">Distanza</span>
        <span className="water-level__values">
          <span className="water-level__value">{formatDistance(distance)}</span>
          <span className="water-level__unit">km</span>
        </span>
      </div>
    </div>
  );
};
