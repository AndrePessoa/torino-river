import { useMemo } from "react";
import "./weather.css";
import { useWeather } from "../../../store/weather/hook";
import {
  weatherSearchParams,
  weatherSite,
} from "../../../store/weather/statics";

function getStatusClassname(rain: number) {
  if (rain < 2) {
    return "";
  } else if (rain < 6) {
    return "warning";
  } else {
    return "danger";
  }
}

export function WeatherPanel() {
  const { weatherData, error, loading } = useWeather();

  const { data, units } = weatherData || {};

  const title = useMemo(() => {
    const date = data?.at(0)?.date;

    return date
      ? `Data from open-meteo.com to ${new Date(date).toLocaleString()}`
      : "";
  }, [data]);

  if (loading) {
    return <div className="floating-panel weather-panel">Loading...</div>;
  }

  if (error || !data || !units) {
    return null;
  }

  const { rain, temperature, windDirection, windVelocity } = data.at(0) || {};

  const status = getStatusClassname(rain || 0);

  return (
    <a
      className={`floating-panel weather-panel ${status}`}
      title={title}
      href={`${weatherSite}${weatherSearchParams}`}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <span className="water-level__label">Pioggia</span>
        <span className="water-level__values">
          <span className="water-level__value">{rain}</span>
          <span className="water-level__unit">{units.rain}</span>
        </span>
      </div>
      <div>
        <span className="water-level__label">Temperatura</span>
        <span className="water-level__values">
          <span className="water-level__value">{temperature}</span>
          <span className="water-level__unit">{units.temperature_2m}</span>
        </span>
      </div>
      <div>
        <span className="water-level__label">Vento</span>
        <span className="water-level__values">
          <span className="water-level__value">{windDirection}</span>
          <span className="water-level__unit">{units.wind_direction_10m}</span>
        </span>
      </div>
      <div>
        <span className="water-level__label"></span>
        <span className="water-level__values">
          <span className="water-level__value">{windVelocity}</span>
          <span className="water-level__unit">{units.wind_speed_10m}</span>
        </span>
      </div>
    </a>
  );
}
