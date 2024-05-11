import { useEffect, useState } from "react";
import { clubs } from "../data";

export interface IWeatherData {
  windDirection: number;
  windVelocity: number;
  rain: number;
  temperature: number;
  cloud_cover: number;
  date: string;
}

export interface IWeatherDataResult {
  data: IWeatherData[];
  units: Record<string, string>;
}

export const weatherApi = `https://api.open-meteo.com/v1/forecast`;
export const weatherSite = "https://open-meteo.com/";
export const weatherSearchParams = `?latitude=${clubs.armida.coords.lat}&longitude=${clubs.armida.coords.lng}&hourly=temperature_2m,rain,wind_speed_10m,wind_direction_10m,cloud_cover&forecast_days=2`;

export function useWeather(hours: number = 1) {
  const [weatherData, setWeatherData] = useState<null | IWeatherDataResult>(
    null
  );

  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(null);

    fetch(`${weatherApi}${weatherSearchParams}`, { signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataResult = [];
        const now = new Date();

        console.log(data);

        const timeIndex = data?.hourly.time.findIndex((t: any) => {
          const date = new Date(t);

          return date > now;
        });

        for (let i = 0; i < hours; i++) {
          if (!data?.hourly?.time[timeIndex + i]) continue;

          dataResult.push({
            windDirection: data?.hourly.wind_direction_10m[timeIndex + i],
            windVelocity: data?.hourly.wind_speed_10m[timeIndex + i],
            rain: data?.hourly.rain[timeIndex + i],
            temperature: data?.hourly.temperature_2m[timeIndex + i],
            cloud_cover: data?.hourly.cloud_cover[timeIndex + i],
            date: data?.hourly.time[timeIndex + i],
          });
        }

        setWeatherData({
          data: dataResult,
          units: data?.hourly_units,
        });

        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (abortController.signal.aborted) return;

        console.error(error);

        setLoading(false);
        setError(error);
      });

    return () => {
      abortController.abort("Unmounted weather component");
    };
  }, [hours]);

  return { weatherData, error, loading };
}
