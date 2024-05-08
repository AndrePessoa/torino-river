import { Popup as LeafletPopup } from "react-leaflet";
import { PointTuple } from "leaflet";
import { createPortal } from "react-dom";
import { minWidth } from "../statics";

type TPopup = {
  children: any;
  offset: PointTuple;
  autoPan: boolean;
};

export function Popup({ children, offset, autoPan }: TPopup) {
  const isMobile = window.innerWidth < minWidth;

  return !isMobile ? (
    <LeafletPopup offset={offset} autoPan={autoPan}>
      {children}
    </LeafletPopup>
  ) : (
    createPortal(
      children,
      document.getElementById("mobile-sidebar") || document.body
    )
  );
}
