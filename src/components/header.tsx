import { MapPinned, BookMarked, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header>
      <div className="content">
        <Link to="/map">
          <img src="./imgs/mini-logo.svg" height={60} alt="Project logo" />

          <h1>Fiume Po</h1>
        </Link>
        <nav>
          <Link to="/metrology">
            <CloudSun strokeWidth={1} size={18} />
            <span className="desktop-only">Metrica</span>
          </Link>
          <Link to="/rules">
            <BookMarked strokeWidth={1} size={18} />
            <span className="desktop-only">Regole</span>
          </Link>
          <Link to="/map">
            <MapPinned strokeWidth={1} size={18} />
            <span className="desktop-only">Mappa</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
