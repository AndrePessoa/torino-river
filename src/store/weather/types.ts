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
