import { LatLngLiteral } from "leaflet";

export const points: [number, number][] = [
  [45.06318715047797, 7.6968535445438375],
  [45.059487727624045, 7.693146699916952],
  [45.055630875862164, 7.689904856455191],
  [45.05165709676047, 7.687159836346949],
  [45.0471743425485, 7.685854826751025],
  [45.04347024155883, 7.682299800718752],
  [45.04029056449632, 7.677799767492534],
  [45.03583871961347, 7.677923518507262],
  [45.03146603483683, 7.676382257256115],
  [45.027291796786805, 7.673963489514518],
  [45.02281508515237, 7.673963489549046],
  [45.01826645122465, 7.674188491190777],
  [45.01481497386699, 7.67829477141385],
  [45.010957661981074, 7.681534795189342],
  [45.007012596079804, 7.684414816454123],
  [45.003003621637546, 7.68143354455255],
];

type TClubData = {
  coords: LatLngLiteral;
  logo?: string;
  thumbnail?: string;
  name?: string;
  site?: string;
  description?: string;
  content?: string;
  activities?: string[];
};

export type TClubsData = Record<string, TClubData>;

export const clubs: TClubsData = {
  esperia: {
    coords: { lat: 45.06187124175834, lng: 7.696283791727894 },
    logo: "esperia.webp",
    thumbnail: "esperia-facede.jpeg",
    name: "Esperia",
    site: "https://www.esperia-torino.it/",
    description: "Società Canottieri Esperia",
    content: "",
    activities: [],
  },
  amici: {
    coords: { lat: 45.05932490162514, lng: 7.693730645137854 },
    logo: "amici.png",
    thumbnail: "amici-facede.jpeg",
    name: "Amici del Fiume",
    site: "https://www.amicidelfiume.it/",
    description: "Circolo Amici del Fiume ASD",
    content: "",
    activities: [],
  },
  caprera: {
    coords: { lat: 45.058402783829365, lng: 7.693008707475018 },
    logo: "caprera.webp",
    thumbnail: "caprera-facede.jpeg",
    name: "Caprera",
    site: "https://www.canottiericaprera.it/",
    description: "Canottieri Caprera",
    content: "",
    activities: [],
  },
  canoa: {
    coords: { lat: 45.05633729245881, lng: 7.689865708163326 },
    logo: "canoa.webp",
    thumbnail: "canoa-facede.jpeg",
    name: "Canoa Club",
    site: "https://www.canoaclubtorino.it/",
    description: "Canoa Club Torino",
    content: "",
    activities: [],
  },
  armida: {
    coords: { lat: 45.054942575648965, lng: 7.688348444144571 },
    logo: "armida.png",
    thumbnail: "armida-facede.jpeg",
    name: "Armida",
    site: "https://www.canottieriarmida.it/",
    description: "Società Canottieri Armida",
    content: "",
    activities: [],
  },
  cerea: {
    coords: { lat: 45.05338264732368, lng: 7.68730703601933 },
    logo: "cerea.png",
    thumbnail: "cerea-facede.jpeg",
    name: "Cerea",
    site: "https://www.canottiericerea.it/",
    description: "Reale Società Canottieri Cerea",
    content: "",
    activities: [],
  },
  eridano: {
    coords: { lat: 45.05189815668324, lng: 7.687856822386068 },
    logo: "eridano.png",
    thumbnail: "eridano-facede.jpeg",
    name: "Eridano",
    site: "https://www.circoloeridano.it/",
    description: "Circolo Eridano",
    content: "",
    activities: [],
  },
  cus: {
    coords: { lat: 45.03884989422468, lng: 7.677882189193597 },
    logo: "cus.jpeg",
    thumbnail: "cus-facede.jpeg",
    name: "CUS",
    site: "https://www.custorino.it/",
    description: "Centro Universitario Sportivo",
    content: "",
    activities: [],
  },
};

export type TBridgeData = {
  coords: LatLngLiteral;
  name?: string;
  description?: string;
  photo?: string;
  schema?: string;
};

export type TBridgesData = Record<string, TBridgeData>;

export const bridges: Record<string, TBridgeData> = {
  umberto: {
    coords: { lat: 45.05755948996082, lng: 7.693258429166913 },
    name: "Ponte Umberto I",
    description: "",
    photo:
      "https://st2.depositphotos.com/1509235/5396/i/950/depositphotos_53968303-stock-photo-turin-torino-river-po-and.jpg",
    schema: "ponteumberto-detail.svg",
  },
  isabella: {
    coords: { lat: 45.044697565400455, lng: 7.685845025050853 },
    name: "Ponte Isabella",
    description: "",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ponte_Principessa_Isabella_-_Torino_12-2006_-_panoramio.jpg",
    schema: "ponteisabella-detail.svg",
  },
  balbis: {
    coords: { lat: 45.0408555357611, lng: 7.679474916637052 },
    name: "Ponte Balbis",
    description: "",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ponte_Balbis_-_Torino.jpg/1600px-Ponte_Balbis_-_Torino.jpg?20220719103538",
    schema: "pontebalbi-detail.svg",
  },
  passerella: {
    coords: { lat: 45.02514836709875, lng: 7.674894105601077 },
    name: "Passerella",
    description: "",
    photo:
      "https://www.museotorino.it/images/f0/66/c8/59/f066c859e6684b0b8eda3d582fe07d37-1.jpg?VSCL=100",
    schema: "passarela-detail.svg",
  },
};

export type TWaterLevelData = {
  id: string;
  key: string;
  label: string;
  warningAlert: number;
  dangerAlert: number;
};

export const waterLevelSensors: Record<string, TWaterLevelData> = {
  MONCALIERI: {
    id: "001156901",
    key: "MONCALIERI",
    label: "Moncalieri",
    warningAlert: 2.2,
    dangerAlert: 2.35,
  },
  MURAZZI: {
    id: "001272703",
    key: "MURAZZI",
    label: "Murazzi",
    warningAlert: 1.35,
    dangerAlert: 1.5,
  },
  CARIGNANO: {
    id: "001058900",
    key: "CARIGNANO",
    label: "Carignano",
    warningAlert: 2.1,
    dangerAlert: 2.25,
  },
};

export const positionInit = points[0];
