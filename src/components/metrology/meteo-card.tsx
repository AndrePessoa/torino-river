import { MoveDown, Sun, CloudDrizzle, Cloud, CloudSun } from "lucide-react";
import { IWeatherData } from "../../store/weather/types";
import "./meteo-card.css";

type TMeteologyCardProps = {
  data: IWeatherData;
};

const ICON_SIZE = 50;
const ICON_LINE = 1;

function WeatherIcon({
  rain,
  cloud_cover,
}: {
  rain: number;
  cloud_cover: number;
}) {
  if (rain > 0) {
    return (
      <div className="weather-icon rainy">
        <CloudDrizzle size={ICON_SIZE} strokeWidth={ICON_LINE} />
      </div>
    );
  }

  if (cloud_cover > 20) {
    return (
      <div className="weather-icon partly-cloudy">
        <CloudSun size={ICON_SIZE} strokeWidth={ICON_LINE} />
      </div>
    );
  }

  if (cloud_cover > 50) {
    return (
      <div className="weather-icon cloudy">
        <Cloud size={ICON_SIZE} strokeWidth={ICON_LINE} />
      </div>
    );
  }

  return (
    <div className="weather-icon">
      <Sun size={ICON_SIZE} strokeWidth={ICON_LINE} />
    </div>
  );
}

const WIND_COLORS: Record<string, string> = {
  "0": "#909ffe",
  "5": "#c68dc4",
  "10": "#e7798c",
  "15": "#ff6055",
};

function getCloserWindColor(windVelocity: number): string {
  const keys = Object.keys(WIND_COLORS).map(Number);
  const closest = keys.reduce((prev, curr) =>
    Math.abs(curr - windVelocity) < Math.abs(prev - windVelocity) ? curr : prev
  );
  const closestString = closest.toString();

  return WIND_COLORS[closestString];
}

function WindIcon({
  windDirection,
  windVelocity,
}: {
  windDirection: number;
  windVelocity: number;
}) {
  // clamp windDirection to 0-360
  const windDirectionClamped = windDirection % 360;
  const color = getCloserWindColor(windVelocity);

  return (
    <MoveDown
      style={{ transform: `rotate(${windDirectionClamped}deg)` }}
      strokeWidth={2}
      color={color}
    />
  );
}

export function MeteologyCard({ data }: TMeteologyCardProps) {
  const { windDirection, windVelocity, rain, temperature, date, cloud_cover } =
    data;
  const time = new Date(date).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="meteology-card">
      <h4>{time}</h4>
      <WeatherIcon rain={rain} cloud_cover={cloud_cover} />
      <div className="meteology-data">
        <small>Pioggia</small>
        <span>{rain}mm</span>
        <small>Temperatura</small>
        <span>{temperature} °C</span>
        <div className="wind-direction">
          <WindIcon windDirection={windDirection} windVelocity={windVelocity} />
        </div>
        <small>Vento</small>
        <span>{windDirection}°</span>
        <span></span>
        <span>{windVelocity} km/h</span>
      </div>
    </div>
  );
}
