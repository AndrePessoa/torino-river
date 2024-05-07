import { useEffect } from "react";
import "./App.css";
import { MapContainer, SVGOverlay, TileLayer, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { SVGEffects } from "./components/svg-effects";
import { SVGPaths } from "./components/svg-paths";
import { Markers } from "./components/markers";
import { points, positionInit } from "./data";
import { Header } from "./components/header";

function getInterpolatePoint(percent: number) {
  const keys = Object.keys(points)
    .map(Number)
    .sort((a, b) => a - b);

  const key1 = [...keys].reverse().find((key) => key <= percent) ?? 0;
  const key2 = keys.find((key) => key >= percent) ?? 0;

  console.log({ key1, key2 }, percent);

  if (key1 === key2) return points[key1];

  const point1 = points[key1];
  const point2 = points[key2];

  const prop = (percent - key1) / (key2 - key1);

  const lat = point1.lat + (point2.lat - point1.lat) * prop;
  const lng = point1.lng + (point2.lng - point1.lng) * prop;

  return { lat, lng };
}

function getMapPosition() {
  const currentScrollPosition = window.document.documentElement.scrollTop;
  const lastScrollPosition =
    window.document.documentElement.scrollHeight - window.innerHeight;
  const propScrollPosition = currentScrollPosition / lastScrollPosition;

  return getInterpolatePoint(propScrollPosition * 100);
}

function getScale() {
  const minWidth = 750;
  const maxWidth = 1200;
  const minScale = 16;
  const maxScale = 17;

  const currentWidth = Math.min(
    maxWidth,
    Math.max(window.innerWidth, minWidth)
  );

  const currentScale =
    minScale +
    ((maxScale - minScale) * (currentWidth - minWidth)) / (maxWidth - minWidth);

  return currentScale;
}

function MapScrollControll() {
  const map = useMap();
  map.scrollWheelZoom.disable();

  useEffect(() => {
    function followPath() {
      map.setView(getMapPosition());
    }

    followPath();

    window.addEventListener("scroll", followPath);

    return () => {
      window.removeEventListener("scroll", followPath);
    };
  }, [map]);

  return null;
}

const bounds = [
  [45.06822531755551, 7.704789537663482] as LatLngTuple,
  [45.00053781258869, 7.670460597601871] as LatLngTuple,
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="map">
        <MapContainer
          center={positionInit}
          zoom={getScale()}
          dragging={false}
          doubleClickZoom={false}
          touchZoom={false}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <MapScrollControll />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Markers />
          {true && (
            <SVGOverlay
              attributes={{ stroke: "red", viewBox: "0 0 400 1116" }}
              bounds={bounds}
            >
              <SVGEffects />
              <SVGPaths />
            </SVGOverlay>
          )}
        </MapContainer>
      </div>
      <main>
        <section>1</section>
        <section>2</section>
        <section>3</section>
        <section>4</section>
      </main>
    </div>
  );
}

export default App;
