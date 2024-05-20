import { Link } from "react-router-dom";
import { bridgeIcon } from "./bridge-icon";
import Marker from "./marker";
import { bridges } from "../../data";

type TBridgeMarker = {
  id: string;
};

function BridgeMarker({ id }: TBridgeMarker) {
  const { coords, name, description, photo, schema } = bridges[id] || {};

  return (
    <Marker id={id} position={coords} icon={bridgeIcon()} offset={[5, 0]}>
      <div className="bridge-popup">
        <div className="description">
          <div className="name">{name}</div>
          <div>{description}</div>
          <Link className="button" to={`/bridges/${id}`}>
            Scopri di più
          </Link>
        </div>
        <img src={schema} alt="" className="photo" />
        <img src={photo} alt="" className="photo" />
      </div>
    </Marker>
  );
}

export default BridgeMarker;
