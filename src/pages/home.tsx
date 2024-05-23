import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Map from "../components/map";
import { Rules } from "../components/rules";
import { Metrology } from "../components/metrology";
import { createPortal } from "react-dom";
import { WaterLevel } from "../components/map/floating-panels/water-level";
import { WeatherPanel } from "../components/map/floating-panels/weather";
import "./home.css";
import { Distance } from "../components/map/floating-panels/distance";

function FloatingPanels() {
  const [, forceRender] = useState(0);
  const target = document.getElementById("floating");

  useEffect(() => {
    forceRender((v) => v + 1);
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="floating-panels">
      <div className="subpanel">
        <Distance />
        <WaterLevel />
      </div>
      <WeatherPanel />
    </div>,
    target
  );
}

export function Home() {
  return (
    <>
      <FloatingPanels />
      <Map />
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
