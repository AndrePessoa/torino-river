import { Marker, Popup } from "react-leaflet";
import { bridges } from "../data";
import { bridgeIcon } from "./bridge-icon";

type TBridgeMarker = {
  id: string;
};

function BridgeMarker({ id }: TBridgeMarker) {
  const { coords, name, description, photo, schema } = bridges[id] || {};

  return (
    <Marker position={coords} icon={bridgeIcon()} riseOnHover>
      <Popup offset={[5, 0]}>
        <div className="bridge-popup">
          <div className="description">
            <div className="name">{name}</div>
            <div>{description}</div>
          </div>
          <img src={schema} alt="" className="photo" />
          <img src={photo} alt="" className="photo" />
        </div>
      </Popup>
    </Marker>
  );
}

export default BridgeMarker;
