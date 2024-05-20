import { Link } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Map from "../components/map";
import { Rules } from "../components/rules";
import { Metrology } from "../components/metrology";
import { createPortal } from "react-dom";
import { WaterLevel } from "../components/map/water-level";
import { WeatherPanel } from "../components/map/weather";
import "./home.css";

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
      <section className="links">
        <Link to="/bridges">
          <ChevronsLeft strokeWidth={1} size={18} /> <span>Ponte</span>
        </Link>
        <Link to="/clubs">
          <span>Clubs</span> <ChevronsRight strokeWidth={1} size={18} />
        </Link>
      </section>
      <Rules />
      <Metrology />
    </>
  );
}
