import { useSelector } from "react-redux";
import { useFetch } from "../common/hook";
import { DEFAULT_KEY } from "../statics";
import { AppState } from "..";
import { weatherApi, weatherSearchParams } from "./statics";
import { weatherDataSelector, weatherFetchStatusSelector } from "./selector";
import { updateData, updateFetcherStatus } from "./actions";

export const useWeatherData = (key: string = DEFAULT_KEY) =>
  useSelector((state: AppState) => weatherDataSelector(state, key));

export const useWeatherFetcherStatus = (key: string = DEFAULT_KEY) =>
  useSelector((state: AppState) => weatherFetchStatusSelector(state, key));

export function useWeather(hours: number = 1) {
  const key = hours.toString() || DEFAULT_KEY;
  const weatherData = useWeatherData(key);
  const { error, loading } = useWeatherFetcherStatus(key);
  const noCache = !weatherData;

  useFetch<any>({
    url: `${weatherApi}${weatherSearchParams}`,
    onStatus: (status) => updateFetcherStatus({ key, status }),
    onData: (data) => {
      const dataResult = [];
      const now = new Date();

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

      updateData({
        key,
        data: {
          data: dataResult,
          units: data?.hourly_units,
        },
      });
    },
    errorMessage: "Unmounted weather component",
    noCache,
  });

  return { weatherData, error, loading };
}
