export const sensorURL = (sensorId: string) =>
  `https://www.arpa.piemonte.it/rischi_naturali/data/tr/idro/${sensorId}.geojson`;

export const proxyURL = (sensorURL: string) =>
  `https://projetos.entreoutros.com/torino/proxy.php?url=${encodeURI(
    sensorURL
  )}`;
