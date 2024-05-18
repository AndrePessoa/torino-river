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

export const clubs: Record<string, TClubData> = {
  esperia: {
    coords: { lat: 45.06187124175834, lng: 7.696283791727894 },
    logo: "./imgs/esperia.webp",
    thumbnail: "./imgs/esperia-facede.jpeg",
    name: "Esperia",
    site: "https://www.esperia-torino.it/",
    description: "Società Canottieri Esperia",
    content:
      "<p>La Società Canottieri Esperia - Torino è una associazione sportiva torinese di canottaggio. La società fu fondata nel 1886 e la sua sede dal 1929 si trova sulla riva orientale del Po in Corso Moncalieri 2, all'altezza della Chiesa della Gran Madre di Dio.</p>",
    activities: ["Canottaggio"],
  },
  amici: {
    coords: { lat: 45.05932490162514, lng: 7.693730645137854 },
    logo: "./imgs/amici.png",
    thumbnail: "./imgs/amici-facede.jpeg",
    name: "Amici del Fiume",
    site: "https://www.amicidelfiume.it/",
    description: "Circolo Amici del Fiume ASD",
    content:
      "<p>Il Circolo Amici del Fiume è un'associazione sportiva dilettantistica che si occupa di canottaggio, canoa e dragon boat. La sede è situata in Corso Moncalieri 2, a Torino, all'interno della Società Canottieri Esperia. </p>",
    activities: [
      "Canottaggio",
      "Canoa",
      "Dragon Boat",
      "Kayak",
      "Tennis",
      "Beach Volley",
      "Yoga",
    ],
  },
  caprera: {
    coords: { lat: 45.058402783829365, lng: 7.693008707475018 },
    logo: "./imgs/caprera.webp",
    thumbnail: "./imgs/caprera-facede.jpeg",
    name: "Caprera",
    site: "https://www.canottiericaprera.it/",
    description: "Canottieri Caprera",
    content:
      "<p>La Società Canottieri Caprera è una società di canottaggio fondata nel 1883 a Torino.</p>",
    activities: ["Canottaggio", "Tennis"],
  },
  canoa: {
    coords: { lat: 45.05633729245881, lng: 7.689865708163326 },
    logo: "./imgs/canoa.webp",
    thumbnail: "./imgs/canoa-facede.jpeg",
    name: "Canoa Club",
    site: "https://www.canoaclubtorino.it/",
    description: "Canoa Club Torino",
    content:
      "<p>Abbiamo in comune la passione per la canoa, la propensione all'aperitivo e una gran voglia di divertirci in mezzo alla natura.</p><p>Dai torrenti di montagna, dai laghi alpini e dalle onde marine, troviamo anche a Torino il nostro angolo di pace acquatica.</p>",
    activities: ["Canoa", "Paddle", "Kayak"],
  },
  armida: {
    coords: { lat: 45.054942575648965, lng: 7.688348444144571 },
    logo: "./imgs/armida.png",
    thumbnail: "./imgs/armida-facede.jpeg",
    name: "Armida",
    site: "https://www.canottieriarmida.it/",
    description: "Società Canottieri Armida",
    content:
      "<p>Da oltre 150 anni la Società Armida è un punto di riferimento per il canottaggio torinese e italiano, offrendo corsi per adulti e ragazzi, attività agonistiche, pararowing e iniziative sociali</p>",
    activities: ["Canottaggio"],
  },
  cerea: {
    coords: { lat: 45.05338264732368, lng: 7.68730703601933 },
    logo: "./imgs/cerea.png",
    thumbnail: "./imgs/cerea-facede.jpeg",
    name: "Cerea",
    site: "https://www.canottiericerea.it/",
    description: "Reale Società Canottieri Cerea",
    content:
      "<p>La Cerea è, dopo la Canottieri Limite, il più antico club remiero in Italia, ma il più longevo svolgendo ininterrottamente dal 1863 attività sportiva e ricreativa. Il ricchissimo archivio sociale contiene documenti e corrispondenza che consentono di ricostruire la vita e le attività del club, ma anche la crescita organizzativa del canottaggio italiano.</p>",
    activities: ["Canottaggio"],
  },
  eridano: {
    coords: { lat: 45.05189815668324, lng: 7.687856822386068 },
    logo: "./imgs/eridano.png",
    thumbnail: "./imgs/eridano-facede.jpeg",
    name: "Eridano",
    site: "https://www.circoloeridano.it/",
    description: "Circolo Eridano",
    content:
      "<p>È un'associazione sportivo - culturale, non a scopo di lucro, dotata di campi da tennis, un imbarcadero per attività di canoa e canottaggio e un Bar/Ristorante per soci.</p>",
    activities: ["Canottaggio", "Canoa", "Kayak"],
  },
  cus: {
    coords: { lat: 45.03884989422468, lng: 7.677882189193597 },
    logo: "./imgs/cus.jpeg",
    thumbnail: "./imgs/cus-facede.jpeg",
    name: "CUS",
    site: "https://www.custorino.it/",
    description: "Centro Universitario Sportivo",
    content:
      "<p>A Torino esiste un centro polisportivo in cui praticare tantissimi sport e il canottaggio è uno di questi. Andare in canoa sul Po, per passione, per provare la prima volta o perchè lo si è scelto come sport da diverso tempo. Qualunque sia il motivo il CUS Torino offre le sua strutture in Corso Sicilia 50.</p>",
    activities: ["Canottaggio", "Canoa", "Paddle", "Kayak"],
  },
};

type TBridgeData = {
  coords: LatLngLiteral;
  name?: string;
  description?: string;
  photo?: string;
  schema?: string;
};

export const bridges: Record<string, TBridgeData> = {
  umberto: {
    coords: { lat: 45.05755948996082, lng: 7.693258429166913 },
    name: "Ponte Umberto I",
    description:
      "Il ponte UMBERTO I (Corso Vittorio) ha tre arcate. Quella verso corso Moncalieri è riservata alle imbarcazioni che risalgono verso monte, mentre le altre due (quella centrale e quella verso corso Cairoli) servono unicamente per la discesa. Nella figura è rappresentata anche un’ideale linea di mezzeria che ci si deve immaginare correre lungo tutto il fiume e che non deve mai essere oltrepassata se non con grande attenzione per invertire la marcia.",
    photo:
      "https://st2.depositphotos.com/1509235/5396/i/950/depositphotos_53968303-stock-photo-turin-torino-river-po-and.jpg",
    schema: "./imgs/ponteumberto-detail.svg",
  },
  isabella: {
    coords: { lat: 45.044697565400455, lng: 7.685845025050853 },
    name: "Ponte Isabella",
    description:
      "Il Ponte ISABELLA corrisponde a corso Dante, e possiede quattro arcate; si trova in una stretta curva del fiume. L’arcata più vicina a corso Moncalieri non deve essere mai attraversata, perché si trova nel gomito della curva e presenta secche e scogli affioranti; la seconda arcata (sempre da corso Moncalieri) è quella da utilizzare per risalire. Per la discesa bisogna usare l’arcata più a riva possibile, cioè quella più vicina al Parco del Valentino, e non passare nella seconda.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ponte_Principessa_Isabella_-_Torino_12-2006_-_panoramio.jpg",
    schema: "./imgs/ponteisabella-detail.svg",
  },
  balbis: {
    coords: { lat: 45.0408555357611, lng: 7.679474916637052 },
    name: "Ponte Balbis",
    description:
      "Il ponte BALBIS è anche chiamato “ponte delle Molinette”, e corrisponde a Piazza Zara. Ha tre grandi arcate: per risalire la corrente si deve passare in quella più vicino a corso Moncalieri, mentre per scendere si usa quella centrale. L’arcata verso corso Unità d’Italia è sconsigliabile, sia per la stretta curva che per alcune secche.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ponte_Balbis_-_Torino.jpg/1600px-Ponte_Balbis_-_Torino.jpg?20220719103538",
    schema: "./imgs/pontebalbi-detail.svg",
  },
  passarela: {
    coords: { lat: 45.02514836709875, lng: 7.674894105601077 },
    name: "Passarella",
    description:
      "La PASSERELLA pedonale attraversa il fiume cinquecento metri più a monte del Sisport Fiat, con stretti piloni di cemento. Le arcate navigabili sono tre, ma in quella centrale èvietato passare. Per la navigazione a remi si devono attraversare le arcate più a riva secondo il proprio senso di marcia.",
    photo:
      "https://www.museotorino.it/images/f0/66/c8/59/f066c859e6684b0b8eda3d582fe07d37-1.jpg?VSCL=100",
    schema: "./imgs/passarela-detail.svg",
  },
};

export const waterLevelSensors = {
  MONCALIERI: {
    id: "001156901",
    label: "Moncalieri",
  },
  MURAZZI: {
    id: "001272703",
    label: "Murazzi",
  },
  CARIGNANO: {
    id: "001058900",
    label: "Carignano",
  },
};

export const positionInit = points[0];
