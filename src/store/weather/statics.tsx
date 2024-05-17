import { clubs } from "../../data";

export const weatherApi = `https://api.open-meteo.com/v1/forecast`;
export const weatherSite = "https://open-meteo.com/";
export const weatherSearchParams = `?latitude=${clubs.armida.coords.lat}&longitude=${clubs.armida.coords.lng}&hourly=temperature_2m,rain,wind_speed_10m,wind_direction_10m,cloud_cover&forecast_days=2`;

export const DEFAULT_KEY = "default";
