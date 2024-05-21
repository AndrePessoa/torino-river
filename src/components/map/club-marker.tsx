import { Link } from "react-router-dom";
import { clubIcon } from "./club-icon";
import { OarArmida } from "./oar/armida";
import { OarCerea } from "./oar/cerea";
import { OarEsperia } from "./oar/esperia";
import { OarCaprera } from "./oar/caprera";
import { OarAmicci } from "./oar/amici";
import { OarCus } from "./oar/cus";
import { OarEridano } from "./oar/eridano";
import { clubs } from "../../data";
import Marker from "./marker";
import { OarCanoa } from "./oar/canoa";

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
      <OarCanoa />
    </div>
  );
}

function ClubMarker({ id }: TClubMarker) {
  const { coords, name, description, logo, site } = clubs[id] || {};

  return (
    <Marker id={id} position={coords} icon={clubIcon(id)} offset={[5, -65]}>
      <div className="club-popup">
        <div>
          <a
            className="logo"
            href={site}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/${logo})`,
            }}
          >
            Go to site
          </a>
        </div>
        <div className="description">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <Link className="button" to={`/clubs/${id}`}>
            Scopri di più
          </Link>
        </div>
      </div>
    </Marker>
  );
}

export default ClubMarker;
