import { useWeather } from "../../../store/weather/hook";
import { MeteologyCard } from "./meteo-card";
import "./index.css";

export function Meteology() {
  const { weatherData, loading, error } = useWeather(5);

  return (
    <>
      {loading && <div className="alert">loading...</div>}
      {error && <div className="alert">{error.message}</div>}
      {!loading && !error && (
        <div>
          <h3>Meteo</h3>
          <div className="meteology-cards">
            {weatherData?.data.map((d) => (
              <MeteologyCard data={d} key={d.date} />
            ))}
          </div>
          <div className="legend">
            <small>
              Data from {""}
              <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noreferrer"
              >
                Open-Meteo
              </a>
            </small>
          </div>
        </div>
      )}
    </>
  );
}
