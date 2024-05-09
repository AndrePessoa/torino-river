import { useEffect } from "react";
import { MapContainer, SVGOverlay, TileLayer, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { SVGEffects } from "./svg-effects";
import { SVGPaths } from "./svg-paths";
import { Markers } from "./markers";
import { points, positionInit } from "../../data";
import { maxScale, maxWidth, minScale, minWidth } from "../../statics";

const scrollScale = window.innerWidth <= minWidth ? 10 : 5;
const scrollPlaceholder = new Array(scrollScale).fill(0);

const bounds = [
  [45.06822531755551, 7.704789537663482] as LatLngTuple,
  [45.00053781258869, 7.670460597601871] as LatLngTuple,
];

const whiteOverlay = [
  [45.06928943946127, 7.635510606135246] as LatLngTuple,
  [44.989521355461704, 7.7212064410178645] as LatLngTuple,
];

function getInterpolatePoint(percent: number) {
  const total = points.length - 1;
  const current = percent * total;

  const key1 = Math.floor(current) ?? 0;
  const key2 = Math.ceil(current) ?? 0;

  if (key1 === key2) return points[key1];

  const point1 = points[key1];
  const point2 = points[key2];

  const prop = (current - key1) / (key2 - key1);

  const lat = point1[0] + (point2[0] - point1[0]) * prop;
  const lng = point1[1] + (point2[1] - point1[1]) * prop;

  return { lat, lng };
}

function getMapPosition() {
  const windowHeight = window.innerHeight;
  const mapSize = windowHeight * (scrollScale - 1);
  const currentScrollPosition = window.document.documentElement.scrollTop;

  const propScrollPosition = currentScrollPosition / mapSize;
  const clampedPropValue = Math.min(1, Math.max(0, propScrollPosition));

  return getInterpolatePoint(clampedPropValue);
}

function getScale() {
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

function Map() {
  return (
    <>
      {scrollPlaceholder.map((_, i) => (
        <section key={i} className="scaler" />
      ))}
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
          <SVGOverlay
            attributes={{ viewBox: "0 0 7988 10520" }}
            bounds={whiteOverlay}
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="rgba(255, 255, 255, 0.43)"
            />
          </SVGOverlay>
          <SVGOverlay
            attributes={{ stroke: "red", viewBox: "0 0 400 1116" }}
            bounds={bounds}
          >
            <SVGEffects />
            <SVGPaths />
          </SVGOverlay>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
