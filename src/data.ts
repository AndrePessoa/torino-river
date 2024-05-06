import { LatLngLiteral } from "leaflet";

export const points: Record<number, LatLngLiteral> = {
  0: { lat: 45.06060384165228, lng: 7.694414135592664 }, // murazzi
  7: { lat: 45.05798386859555, lng: 7.692299843038191 }, // ponte umberto
  15: { lat: 45.053133791460766, lng: 7.68775058026506 }, // clubs
  27: { lat: 45.04508700912004, lng: 7.685426957918047 }, // ponte isabella
  38: { lat: 45.041473813253525, lng: 7.678107805437917 }, // ponte balbis
  68: { lat: 45.025300863749735, lng: 7.674208915721956 }, // passarela
  83: { lat: 45.017568214470586, lng: 7.6746329111147515 }, // idrovora
  100: { lat: 45.011730633061134, lng: 7.682267755522201 }, // cemiterio moncalieri
};

type TClubData = {
  coords: LatLngLiteral;
  logo?: string;
  name?: string;
  site?: string;
  description?: string;
};

export const clubs: Record<string, TClubData> = {
  esperia: {
    coords: { lat: 45.06187124175834, lng: 7.696283791727894 },
    logo: "./imgs/esperia.webp",
    name: "Esperia",
    site: "https://www.esperiatorino.it/",
    description: "Società Canottieri Esperia",
  },
  amici: {
    coords: { lat: 45.05932490162514, lng: 7.693730645137854 },
    logo: "./imgs/amici.png",
    name: "Amici del Fiume",
    site: "https://www.amicidelfiume.it/",
    description: "Circolo Amici del Fiume ASD",
  },
  caprera: {
    coords: { lat: 45.058402783829365, lng: 7.693008707475018 },
    logo: "./imgs/caprera.webp",
    name: "Caprera",
    site: "https://www.canottiericaprera.it/",
    description: "Canottieri Caprera",
  },
  canoa: {
    coords: { lat: 45.05633729245881, lng: 7.689865708163326 },
    logo: "./imgs/canoa.webp",
    name: "Canoa Club",
    site: "https://www.canoaclubtorino.it/",
    description: "Canoa Club Torino",
  },
  armida: {
    coords: { lat: 45.054942575648965, lng: 7.688348444144571 },
    logo: "./imgs/armida.png",
    name: "Armida",
    site: "https://www.canottieriarmida.it/",
    description: "Società Canottieri Armida",
  },
  cerea: {
    coords: { lat: 45.05338264732368, lng: 7.68730703601933 },
    logo: "./imgs/cerea.png",
    name: "Cerea",
    site: "https://www.canottiericerea.it/",
    description: "Reale Società Canottieri Cerea",
  },
  eridano: {
    coords: { lat: 45.05189815668324, lng: 7.687856822386068 },
    logo: "./imgs/eridano.png",
    name: "Eridano",
    site: "https://www.circoloeridano.it/",
    description: "Circolo Eridano",
  },
  cus: {
    coords: { lat: 45.03884989422468, lng: 7.677882189193597 },
    logo: "./imgs/cus.jpeg",
    name: "CUS",
    site: "https://www.custorino.it/",
    description: "Centro Universitario Sportivo",
  },
};

type TBridgeData = {
  coords: LatLngLiteral;
  name?: string;
  description?: string;
  photo?: string;
};

export const bridges: Record<string, TBridgeData> = {
  umberto: {
    coords: { lat: 45.05755948996082, lng: 7.693258429166913 },
    name: "Ponte Umberto I",
    description:
      "Il ponte UMBERTO I (Corso Vittorio) ha tre arcate. Quella verso corso Moncalieri è riservata alle imbarcazioni che risalgono verso monte, mentre le altre due (quella centrale e quella verso corso Cairoli) servono unicamente per la discesa. Nella figura è rappresentata anche un’ideale linea di mezzeria che ci si deve immaginare correre lungo tutto il fiume e che non deve mai essere oltrepassata se non con grande attenzione per invertire la marcia.",
    photo:
      "https://st2.depositphotos.com/1509235/5396/i/950/depositphotos_53968303-stock-photo-turin-torino-river-po-and.jpg",
  },
  isabella: {
    coords: { lat: 45.044697565400455, lng: 7.685845025050853 },
    name: "Ponte Isabella",
    description:
      "Il Ponte ISABELLA corrisponde a corso Dante, e possiede quattro arcate; si trova in una stretta curva del fiume. L’arcata più vicina a corso Moncalieri non deve essere mai attraversata, perché si trova nel gomito della curva e presenta secche e scogli affioranti; la seconda arcata (sempre da corso Moncalieri) è quella da utilizzare per risalire. Per la discesa bisogna usare l’arcata più a riva possibile, cioè quella più vicina al Parco del Valentino, e non passare nella seconda.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ponte_Principessa_Isabella_-_Torino_12-2006_-_panoramio.jpg",
  },
  balbis: {
    coords: { lat: 45.0408555357611, lng: 7.679474916637052 },
    name: "Ponte Balbis",
    description:
      "Il ponte BALBIS è anche chiamato “ponte delle Molinette”, e corrisponde a Piazza Zara. Ha tre grandi arcate: per risalire la corrente si deve passare in quella più vicino a corso Moncalieri, mentre per scendere si usa quella centrale. L’arcata verso corso Unità d’Italia è sconsigliabile, sia per la stretta curva che per alcune secche.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ponte_Balbis_-_Torino.jpg/1600px-Ponte_Balbis_-_Torino.jpg?20220719103538",
  },
  passarela: {
    coords: { lat: 45.02514836709875, lng: 7.674894105601077 },
    name: "Passarela",
    description:
      "La PASSERELLA pedonale attraversa il fiume cinquecento metri più a monte del Sisport Fiat, con stretti piloni di cemento. Le arcate navigabili sono tre, ma in quella centrale èvietato passare. Per la navigazione a remi si devono attraversare le arcate più a riva secondo il proprio senso di marcia.",
    photo:
      "https://www.museotorino.it/images/f0/66/c8/59/f066c859e6684b0b8eda3d582fe07d37-1.jpg?VSCL=100",
  },
};

export const positionInit = points[0];
