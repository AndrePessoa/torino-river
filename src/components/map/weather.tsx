import { useMemo } from "react";
import "./weather.css";
import {
  useWeather,
  weatherSearchParams,
  weatherSite,
} from "../../hooks/useWeather";

export function WeatherPanel() {
  const { weatherData, error, loading } = useWeather();

  const title = useMemo(() => {
    return weatherData?.date
      ? `Data from open-meteo.com to ${new Date(
          weatherData?.date
        ).toLocaleString()}`
      : "";
  }, [weatherData]);

  if (loading) {
    return <div className="floating-panel weather-panel">Loading...</div>;
  }

  if (error || !weatherData) {
    return null;
  }

  const { rain, temperature, windDirection, windVelocity, units } = weatherData;

  return (
    <a
      className="floating-panel weather-panel"
      title={title}
      href={`${weatherSite}${weatherSearchParams}`}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <span className="water-level__label">Rain</span>
        <span className="water-level__values">
          <span className="water-level__value">{rain}</span>
          <span className="water-level__unit">{units.rain}</span>
        </span>
      </div>
      <div>
        <span className="water-level__label">Temperature</span>
        <span className="water-level__values">
          <span className="water-level__value">{temperature}</span>
          <span className="water-level__unit">{units.temperature_2m}</span>
        </span>
      </div>
      <div>
        <span className="water-level__label">Wind direction</span>
        <span className="water-level__values">
          <span className="water-level__value">{windDirection}</span>
          <span className="water-level__unit">{units.wind_direction_10m}</span>
        </span>
      </div>
      <div>
        <span className="water-level__label">Wind velocity</span>
        <span className="water-level__values">
          <span className="water-level__value">{windVelocity}</span>
          <span className="water-level__unit">{units.wind_speed_10m}</span>
        </span>
      </div>
    </a>
  );
}
