import { Marker, Popup } from "react-leaflet";
import { clubs } from "../data";
import { clubIcon } from "./club-icon";
import { OarArmida } from "./oar/armida";
import { OarCerea } from "./oar/cerea";
import { OarEsperia } from "./oar/esperia";
import { OarCaprera } from "./oar/caprera";
import { OarAmicci } from "./oar/amici";
import { OarCus } from "./oar/cus";
import { OarEridano } from "./oar/eridano";

type TClubMarker = {
  id: string;
};

export function ClubBrands() {
  return (
    <div style={{ display: "none" }}>
      <OarArmida />
      <OarCerea />
      <OarEsperia />
      <OarCaprera />
      <OarAmicci />
      <OarCus />
      <OarEridano />
    </div>
  );
}

function ClubMarker({ id }: TClubMarker) {
  const { coords, name, description, logo, site } = clubs[id] || {};

  return (
    <Marker key={id} position={coords} icon={clubIcon(id)}>
      <Popup offset={[5, -65]}>
        <div className="club-popup">
          <div>
            <a
              className="logo"
              href={site}
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: `url(${logo})` }}
            >
              Go to site
            </a>
          </div>
          <div className="description">
            <div className="name">{name}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default ClubMarker;
