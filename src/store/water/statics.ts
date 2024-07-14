import { getTimeByHalfHour } from "../../utils/get-time-by-halfhour";

export const sensorOriginalURL = (sensorId: string) =>
  `https://www.arpa.piemonte.it/rischi_naturali/snippets_arpa_graphs/dettaglio_stazione/?id=${sensorId}&param=idro`;

export const sensorURL = (sensorId: string) =>
  `https://www.arpa.piemonte.it/rischi_naturali/data/tr/idro/${sensorId}.geojson`;

export const proxyURL = (sensorURL: string) =>
  `/.netlify/functions/loader?url=${encodeURI(
    sensorURL
  )}&nocache=${getTimeByHalfHour()}`;

export enum WaterLevelStatus {
  UNKNOWN = "unknown",
  GOOD = "good",
  WARNING = "warning",
  DANGER = "danger",
}

export enum IdroChartFilter {
  LAST_24H = "LAST_24H",
  LAST_3D = "LAST_3D",
  ALL = "ALL",
}
