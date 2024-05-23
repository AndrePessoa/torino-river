const getTimeByHalfHour = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const minutesRounded = Math.round(minutes / 30) * 30;

  return new Date(date.setHours(hours, minutesRounded, 0, 0)).getTime();
};

export const sensorOriginalURL = (sensorId: string) =>
  `https://www.arpa.piemonte.it/rischi_naturali/snippets_arpa_graphs/dettaglio_stazione/?id=${sensorId}&param=idro`;

export const sensorURL = (sensorId: string) =>
  `https://www.arpa.piemonte.it/rischi_naturali/data/tr/idro/${sensorId}.geojson`;

export const proxyURL = (sensorURL: string) =>
  `https://projetos.entreoutros.com/torino/proxy.php?url=${encodeURI(
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
