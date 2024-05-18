import Map from "../components/map";
import { Rules } from "../components/rules";
import { Metrology } from "../components/metrology";
import { createPortal } from "react-dom";
import { WaterLevel } from "../components/map/water-level";
import { WeatherPanel } from "../components/map/weather";

const totalDistance = 7450;

function FloatingPanels() {
  const target = document.getElementById("floating");

  if (!target) return null;

  return createPortal(
    <div className="floating-panels">
      <WaterLevel />
      <WeatherPanel />
    </div>,
    target
  );
}

export function Home() {
  return (
    <>
      <FloatingPanels />
      <Map>{(distance) => <div>{distance * totalDistance}m</div>}</Map>
      <Rules />
      <Metrology />
    </>
  );
}
