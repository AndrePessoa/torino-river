import { Popup as LeafletPopup } from "react-leaflet";
import { PointTuple } from "leaflet";

type TPopupProps = {
  children: any;
  offset: PointTuple;
  autoPan: boolean;
};

export default function Popup({ children, offset, autoPan }: TPopupProps) {
  return (
    <LeafletPopup className="popup" offset={offset} autoPan={autoPan}>
      {children}
    </LeafletPopup>
  );
}
