import { useEffect, useState } from "react";
import { clubs } from "../data";

interface IWeatherData {
  windDirection: number;
  windVelocity: number;
  rain: number;
  temperature: number;
  date: string;
  units: Record<string, string>;
}

export const weatherApi = `https://api.open-meteo.com/v1/forecast`;
export const weatherSite = "https://open-meteo.com/";
export const weatherSearchParams = `?latitude=${clubs.armida.coords.lat}&longitude=${clubs.armida.coords.lng}&hourly=temperature_2m,rain,wind_speed_10m,wind_direction_10m&forecast_days=2`;

export function useWeather() {
  const [weatherData, setWeatherData] = useState<null | IWeatherData>(null);

  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(null);

    fetch(`${weatherApi}${weatherSearchParams}`, { signal })
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => {
        console.log(data);

        const now = new Date();

        const timeIndex = data?.hourly.time.findIndex((time: any) => {
          const date = new Date(time);

          return date > now;
        });

        const wind_direction_10m = data?.hourly.wind_direction_10m[timeIndex];
        const wind_speed_10m = data?.hourly.wind_speed_10m[timeIndex];
        const rain = data?.hourly.rain[timeIndex];
        const temperature = data?.hourly.temperature_2m[timeIndex];

        setWeatherData({
          windDirection: wind_direction_10m,
          windVelocity: wind_speed_10m,
          rain,
          temperature,
          date: data?.hourly?.time[timeIndex],
          units: data?.hourly_units,
        });

        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error(error);

        setLoading(false);
        setError(error);
      });

    return () => {
      abortController.abort("Unmounted weather component");
    };
  }, []);

  return { weatherData, error, loading };
}
