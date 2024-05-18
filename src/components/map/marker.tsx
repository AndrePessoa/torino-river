import React, { MouseEvent, useCallback, useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import { Marker as LeafletMarker } from "react-leaflet";
import {
  DivIcon,
  Icon,
  IconOptions,
  LatLngExpression,
  PointTuple,
} from "leaflet";
import Popup from "./popup";
import { minWidth } from "../../statics";

type TMarkerMobileContext = {
  openedMarkerId: string | null;
  setOpenedMarker: (id: string | null) => void;
};

const MarkerMobileContext = React.createContext<TMarkerMobileContext>({
  openedMarkerId: null,
  setOpenedMarker: () => {},
});

const NO_CONTEXT_DEFAULT = { openedMarkerId: null, setOpenedMarker: () => {} };

type TMarkerMobileProviderProps = {
  children: React.ReactNode;
};

export const MarkerMobileProvider = ({
  children,
}: TMarkerMobileProviderProps) => {
  const [openedMarker, setOpenedMarker] = React.useState<null | string>(null);

  return (
    <MarkerMobileContext.Provider
      value={{
        openedMarkerId: openedMarker,
        setOpenedMarker: (openedMarkerId) => setOpenedMarker(openedMarkerId),
      }}
    >
      {children}
    </MarkerMobileContext.Provider>
  );
};

const useMarkerMobile = () => {
  const isMobile = window.innerWidth < minWidth;
  const context = useContext(MarkerMobileContext) || NO_CONTEXT_DEFAULT;

  return useMemo(() => ({ isMobile, ...context }), [isMobile, context]);
};

function MarkerMobile({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { openedMarkerId, setOpenedMarker } = useMarkerMobile();

  const closeHandler = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      setOpenedMarker(null);
    },
    [setOpenedMarker]
  );

  if (openedMarkerId !== id) {
    return null;
  }

  return createPortal(
    <div className="leaflet-popup-content-wrapper">
      <a
        className="leaflet-popup-close-button"
        onClick={closeHandler}
        role="button"
        aria-label="Close popup"
        href="#close"
      >
        ×
      </a>
      <div className="leaflet-popup-content"> {children}</div>
    </div>,
    document.getElementById("mobile-sidebar") || document.body
  );
}

type TMarker = {
  id: string;
  icon: Icon<IconOptions> | DivIcon;
  children: React.ReactNode;
  position: LatLngExpression;
  offset: PointTuple;
};

function Marker({ id, icon, children, position, offset }: TMarker) {
  const { isMobile, setOpenedMarker } = useMarkerMobile();

  const PopupComponent = isMobile ? MarkerMobile : Popup;

  return (
    <LeafletMarker
      key={id}
      position={position}
      icon={icon}
      eventHandlers={{
        click: () => setOpenedMarker(id),
      }}
    >
      <PopupComponent id={id} offset={offset} autoPan={false}>
        {children}
      </PopupComponent>
    </LeafletMarker>
  );
}

export default Marker;
