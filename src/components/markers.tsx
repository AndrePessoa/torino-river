import { bridges, clubs } from "../data";
import BridgeMarker from "./bridge-marker";
import ClubMarker, { ClubBrands } from "./club-marker";
import "./markers.css";

const clubKeys = Object.keys(clubs);
const bridgeKeys = Object.keys(bridges);

function MarkersClubs() {
  return (
    <>
      <ClubBrands />
      {clubKeys.map((key) => (
        <ClubMarker id={key} key={key} />
      ))}
      {bridgeKeys.map((key) => (
        <BridgeMarker id={key} key={key} />
      ))}
    </>
  );
}

export function Markers() {
  return <MarkersClubs />;
}
