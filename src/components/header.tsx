import { MapPinned, BookMarked, CloudSun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useBackToPage } from "../store/history/hooks";
import "./header.css";
import { useIsConnected } from "../store/common/hook";

export function Header() {
  const isConnected = useIsConnected();
  const location = useLocation();
  const titleTarget = useBackToPage(location.pathname);

  return (
    <header>
      {!isConnected && (
        <div className="no-internet">
          No internet connection - using cached data
        </div>
      )}
      <div className="content">
        <Link to={titleTarget}>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/mini-logo.svg`}
            height={60}
            alt="Project logo"
          />
          <h1>Fiume Po</h1>
        </Link>
        <nav>
          <Link to="/home/metrology">
            <CloudSun strokeWidth={1} size={18} />
            <span className="desktop-only">Metrica</span>
          </Link>
          <Link to="/home/rules">
            <BookMarked strokeWidth={1} size={18} />
            <span className="desktop-only">Regole</span>
          </Link>
          <Link to="/home/map">
            <MapPinned strokeWidth={1} size={18} />
            <span className="desktop-only">Mappa</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
