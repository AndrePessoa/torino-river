import { Popup as LeafletPopup } from "react-leaflet";
import { PointTuple } from "leaflet";

type TPopup = {
  children: any;
  offset: PointTuple;
  autoPan: boolean;
};

export function Popup({ children, offset, autoPan }: TPopup) {
  return (
    <LeafletPopup className="popup" offset={offset} autoPan={autoPan}>
      {children}
    </LeafletPopup>
  );
}
