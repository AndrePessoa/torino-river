import { useEffect, useState } from "react";

interface IdroData {
  value: number;
  valid_type?: string;
  flag_type?: string;
}

export function useWaterLevel(sensorId: string) {
  const murazziSensor = `https://www.arpa.piemonte.it/rischi_naturali/data/tr/idro/${sensorId}.geojson`;

  const proxyUrl = `https://projetos.entreoutros.com/torino/proxy.php?url=${encodeURI(
    murazziSensor
  )}`;

  const [waterLevel, setWaterLevel] = useState<null | [string, any][]>(null);
  const [unit, setUnit] = useState<null | string>(null);
  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(null);

    fetch(proxyUrl, { signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const metric = data?.contents?.properties?.units_sym_html || {};

        const idro = (data?.contents?.properties?.idro || {}) as IdroData;

        // sort by date
        const sorted = Object.entries(idro).sort(
          ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
        );

        setUnit(metric);
        setWaterLevel(sorted);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (abortController.signal.aborted) return;

        setLoading(false);
        setError(error);
      });

    return () => {
      abortController.abort("Unmounted water level component");
    };
  }, [proxyUrl]);

  return { waterLevel, unit, error, loading };
}
