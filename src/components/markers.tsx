import { Marker, Popup } from "react-leaflet";
import { clubs } from "../data";
import { svgIcon } from "./marker";
import { OarArmida } from "./oar/armida";
import { OarCerea } from "./oar/cerea";
import { OarEsperia } from "./oar/esperia";
import { OarCaprera } from "./oar/caprera";
import { OarAmicci } from "./oar/amicci";
import { OarCus } from "./oar/cus";

const clubKeys = Object.keys(clubs);

function MarkersClubs() {
  return (
    <>
      <div style={{ display: "none" }}>
        <OarArmida />
        <OarCerea />
        <OarEsperia />
        <OarCaprera />
        <OarAmicci />
        <OarCus />
      </div>
      {clubKeys.map((key) => (
        <Marker key={key} position={clubs[key]} icon={svgIcon(key)}>
          <Popup>{key}</Popup>
        </Marker>
      ))}
    </>
  );
}

export function Markers() {
  return <MarkersClubs />;
}
