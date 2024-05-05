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

export const clubs: Record<string, LatLngLiteral> = {
  esperia: { lat: 45.06187124175834, lng: 7.696283791727894 },
  amicci: { lat: 45.05880114009306, lng: 7.693330137422033 },
  caprera: { lat: 45.058402783829365, lng: 7.693008707475018 },
  canoa: { lat: 45.05633729245881, lng: 7.689865708163326 },
  armida: { lat: 45.054942575648965, lng: 7.688348444144571 },
  cerea: { lat: 45.05338264732368, lng: 7.68730703601933 },
  eridano: { lat: 45.05189815668324, lng: 7.687856822386068 },
  cus: { lat: 45.03884989422468, lng: 7.677882189193597 },
};

export const positionInit = points[0];
