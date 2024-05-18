import L from "leaflet";

const realSizes = {
  icon: { height: 1050, width: 300 },
  anchor: { y: 968, x: 120 },
};

const scale = 0.1;

export const clubIcon = (brand: string) =>
  L.divIcon({
    html: ` 
  <svg viewBox="0 0 300 1050" version="1.1" id="svg1" xml:space="preserve"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <defs id="defs1">
    <linearGradient id="linearGradient15">&#10;
      <stop style="stop-color:#000000;stop-opacity:0.14827587;" offset="0" id="stop16" />&#10;
      <stop style="stop-color:#747474;stop-opacity:0;" offset="0.45765027" id="stop18" />&#10;
      <stop style="stop-color:#ffffff;stop-opacity:0.18620689;" offset="1" id="stop17" />&#10;
    </linearGradient>
    <linearGradient id="linearGradient9">&#10;
      <stop style="stop-color:#000000;stop-opacity:0.1;" offset="0" id="stop10" />&#10;
      <stop style="stop-color:#000000;stop-opacity:0;" offset="1" id="stop11" />&#10;
    </linearGradient>
    <linearGradient id="linearGradient2">&#10;
      <stop style="stop-color:#000000;stop-opacity:1;" offset="0" id="stop2" />&#10;
      <stop style="stop-color:#000000;stop-opacity:1;" offset="0.29781422" id="stop4" />&#10;
      <stop style="stop-color:#343434;stop-opacity:1;" offset="0.37978142" id="stop5" />&#10;
      <stop style="stop-color:#1e1e1e;stop-opacity:1;" offset="0.48907104" id="stop7" />&#10;
      <stop style="stop-color:#595959;stop-opacity:1;" offset="0.56557375" id="stop8" />&#10;
      <stop style="stop-color:#444444;stop-opacity:1;" offset="0.78551912" id="stop9" />&#10;
      <stop style="stop-color:#000000;stop-opacity:1;" offset="0.90846997" id="stop6" />&#10;
      <stop style="stop-color:#000000;stop-opacity:1;" offset="1" id="stop3" />&#10;
    </linearGradient>
    <linearGradient xlink:href="#linearGradient2" id="linearGradient3" x1="104.25926" y1="233.68474" x2="116.84721"
      y2="233.90697" gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(3.6702553,0,0,3.6702553,-285.01518,-43.352852)" />
    <linearGradient xlink:href="#linearGradient15" id="linearGradient17" x1="64.924782" y1="37.663589" x2="110.92892"
      y2="171.4178" gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(3.5629605,0,0,3.6427332,-170.76317,-38.196069)" />
    <radialGradient xlink:href="#linearGradient9" id="radialGradient13" cx="82.033089" cy="277.47363" fx="82.033089"
      fy="277.47363" r="22.966915" gradientTransform="matrix(3.6702553,0,0,1.536604,-182.0123,560.33225)"
      gradientUnits="userSpaceOnUse" />
    <linearGradient xlink:href="#linearGradient15" id="linearGradient4" gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(3.5542813,0.24853955,-0.25410422,3.6338597,-167.68278,-50.014862)" x1="64.924782"
      y1="37.663589" x2="110.92892" y2="171.4178" />
    <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1">
      <path
        style="display:inline;opacity:1;fill:url(#linearGradient4);fill-opacity:1;stroke-width:62.3224;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke fill markers"
        d="m 95.24707,650.68782
        c 0,0 27.64735,-67.46804 139.99053,-118.27475 15.96701,-7.22103 19.78153,-36.78266 19.78153,-36.78266
        l 15.2793,-425.733568
        c 0,0 -2.54396,-16.174526 -17.60615,-16.371472
        C 237.63012,53.328422 39.233582,39.870548 27.803249,35.646039 16.372912,31.421532 6.8247701,39.624433 5.7745655,51.231749 -0.72164126,123.03079 30.125159,519.89621 55.11014,608.47739
        c 5.278481,18.71419 3.577366,41.53447 3.577366,41.53447
        z"
        id="path2" />
    </clipPath>
  </defs>
  <g id="oar">
    <rect
      style="opacity:0.75;fill:url(#radialGradient13);stroke-width:63.4925;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke fill markers"
      id="shadow" width="168.58888" height="70.582108" x="34.775631" y="951.40851" />
    <rect style="fill:#808000;stroke-width:62.8315;-inkscape-stroke:none" id="brand" width="311.97171"
      height="642.29468" x="-13.23544" y="12.18871" transform="rotate(-3.9999999)" clip-path="url(#clipPath1)" />
    <use href="#${brand}" width="311.97171"
      height="650.29468"  transform="rotate(-3.9999999)" clip-path="url(#clipPath1)" />
    <path
      style="display:inline;opacity:1;fill:url(#linearGradient17);fill-opacity:1;stroke-width:62.3224;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke fill markers"
      d="m 140.40474,642.45868
      c 0,0 22.87367,-69.23228 131.39909,-127.75189 15.4244,-8.31724 17.16751,-38.07295 17.16751,-38.07295
      L 274.51575,50.871512
      c 0,0 -3.66604,-15.957668 -18.70528,-15.103449
      C 240.77127,36.622278 41.91924,37.036629 30.222064,33.61975 18.524884,30.202874 9.572206,39.051838 9.334245,50.704138 7.862311,122.78144 66.317901,516.52834 97.42113,603.15088
      c 6.57106,18.3004 6.46595,41.18375 6.46595,41.18375
      z"
      id="3d-effect" />
    <path
      style="display:inline;opacity:1;fill:url(#linearGradient3);fill-opacity:1;stroke-width:63.4925;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke fill markers"
      d="m 141.00144,986.1794 5.68493,-342.06793 c 0.49299,-7.16466 -42.54703,-12.09473 -43.02119,0.22316 -1.6449,42.73355 -11.984887,341.60497 -11.984887,341.60497 0.200029,10.3184 49.520557,9.5499 49.321147,0.2397 z"
      id="base" />
  </g>
</svg>
  `,
    className: "svg-icon",
    iconSize: [realSizes.icon.width * scale, realSizes.icon.height * scale],
    iconAnchor: [realSizes.anchor.x * scale, realSizes.anchor.y * scale],
  });
