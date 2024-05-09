import { useEffect, useMemo, useState } from "react";
import "./water-level.css";

interface IdroData {
  value: number;
  valid_type?: string;
  flag_type?: string;
}

function useWaterLevel(sensorId: string) {
  const murazziSensor = `https://www.arpa.piemonte.it/rischi_naturali/data/tr/idro/${sensorId}.geojson`;

  const proxyUrl = `https://projetos.entreoutros.com/torino/proxy.php?url=${encodeURI(
    murazziSensor
  )}`;

  const [waterLevel, setWaterLevel] = useState<null | [string, any]>(null);
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
          ([a], [b]) => new Date(b).getTime() - new Date(a).getTime()
        );

        const [latest] = sorted || [];

        setUnit(metric);
        setWaterLevel(latest || null);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error(error);

        setLoading(false);
        setError(error);
      });

    return () => {
      abortController.abort("Unmounted water level component");
    };
  }, [proxyUrl]);

  return { waterLevel, unit, error, loading };
}

export function WaterLevel({ sensorId = "001272703" }) {
  const { waterLevel, unit, error, loading } = useWaterLevel(sensorId);
  const [date, { value }] = waterLevel || ["", {}];

  const title = useMemo(() => {
    return `Sensor TORINO MURAZZI PO at ${new Date(date).toLocaleString()}`;
  }, [date]);

  if (loading || error) {
    return null;
  }

  return (
    <a
      className="water-level"
      title={title}
      href="https://www.arpa.piemonte.it/rischi_naturali/snippets_arpa_graphs/dettaglio_stazione/?id=001272703&param=idro"
      target="_blank"
      rel="noreferrer"
    >
      <span className="water-level__label">Water level:</span>
      <span className="water-level__values">
        <span className="water-level__value">{value}</span>
        <span className="water-level__unit">{unit || "m"}</span>
      </span>
    </a>
  );
}
