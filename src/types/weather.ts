export interface DailyForecast {
  date: string;
  dayLabel: string;
  minTemp: number;
  maxTemp: number;
  condition: string;
  rainProbability: number;
}

export interface CurrentWeatherData {
  temperature: number;
  humidity: number;
  rainProbability: number;
  windSpeed: number;
  condition: string;
  location: string;
}

export interface WeatherResponse {
  current: CurrentWeatherData;
  forecast: DailyForecast[];
  recommendation: string;
}