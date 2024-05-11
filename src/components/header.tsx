import { MapPinned, BookMarked, CloudSun } from "lucide-react";
import "./header.css";

export function Header() {
  return (
    <header>
      <div className="content">
        <a href="#top">
          <img src="./imgs/mini-logo.svg" height={60} alt="Project logo" />

          <h1>Fiume Po</h1>
        </a>
        <nav>
          <a href="#metrology">
            <CloudSun strokeWidth={1} size={18} />
            <span className="desktop-only">Metrica</span>
          </a>
          <a href="#rules">
            <BookMarked strokeWidth={1} size={18} />
            <span className="desktop-only">Regole</span>
          </a>
          <a href="#map">
            <MapPinned strokeWidth={1} size={18} />
            <span className="desktop-only">Mappa</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
