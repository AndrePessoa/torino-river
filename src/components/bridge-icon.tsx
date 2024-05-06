import L from "leaflet";

const realSizes = {
  icon: { height: 158.75, width: 158.75 },
  anchor: { y: 79, x: 79 },
};

const scale = 0.35;

export const bridgeIcon = () =>
  L.divIcon({
    html: `
    <svg viewBox="0 0 158.75 158.75" version="1.1" id="svg5" xml:space="preserve"
    inkscape:version="1.3 (0e150ed, 2023-07-21)" sodipodi:docname="segnale_ponte.svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
    <sodipodi:namedview id="namedview7" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0"
      inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1"
      inkscape:document-units="mm" showgrid="false" inkscape:zoom="1.0624097" inkscape:cx="336.96982"
      inkscape:cy="231.5491" inkscape:window-width="2000" inkscape:window-height="1257" inkscape:window-x="0"
      inkscape:window-y="44" inkscape:window-maximized="1" inkscape:current-layer="layer1-4" />
    <defs id="defs2" />
    <g inkscape:label="Livello 1" inkscape:groupmode="layer" id="layer1">
      <g id="g4882-2" transform="matrix(1.0247014,0,0,1.0266542,162.19047,-26.98889)" />
      <g inkscape:label="Livello 1" inkscape:groupmode="layer"
        transform="matrix(0.26458333,0,0,0.26458333,-498.48563,-77.3006)" id="layer1-4">
        <g inkscape:label="Ebene 1" inkscape:groupmode="layer" transform="matrix(1.0307,0,0,1.0307,-657.219,84.4022)"
          id="layer1-7">
          <g transform="matrix(2.91064,0,0,2.91064,575.877,80.8884)" id="g1882" />
          <g transform="matrix(2.91064,0,0,2.91064,871.198,53.7252)" id="g2461" />
        </g>
        <g inkscape:label="Livello 1" inkscape:groupmode="layer" transform="translate(716.082,-173.142)" id="layer1-6">
          <g id="g2760" transform="translate(0,-522.51966)">
            <g id="g20552" transform="matrix(3.7795276,0,0,3.7795276,1167.9582,465.30172)">
              <rect
                style="opacity:0.993;fill:#013f8d;fill-opacity:1;stroke-width:8.43643;stroke-linejoin:round;stroke-dasharray:67.4915, 67.4915;paint-order:markers stroke fill"
                id="rect31" width="158.75" height="158.75" x="0" y="138.25" rx="8" />
              <rect
                style="opacity:0.993;fill:none;stroke:#ffffff;stroke-width:2.64583;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill"
                id="rect259-5" width="153.45833" height="153.45833" x="2.6458316" y="140.89584" rx="6.6145835"
                ry="6.6145835" />
            </g>
            <path id="rect2418"
              style="opacity:0.993;fill:#ffffff;fill-opacity:1;stroke-width:24.5576;paint-order:fill markers stroke"
              d="m 1234.4582,1255.3443 v 205.4771 h 37.5171 a 212.95131,212.95131 0 0 1 195.8121,-130.138 212.95131,212.95131 0 0 1 196.1535,130.138 h 37.5173 v -205.4771 z" />
          </g>
        </g>
      </g>
    </g>
  </svg>   
`,
    className: "svg-icon",
    iconSize: [realSizes.icon.width * scale, realSizes.icon.height * scale],
    iconAnchor: [realSizes.anchor.x * scale, realSizes.anchor.y * scale],
  });
