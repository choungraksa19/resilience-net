import { useEffect, useState } from "react";
import CurrentWeatherCard from "../components/weather/CurrentWeatherCard";
import ForecastList from "../components/weather/ForecastList";
import WeatherRecommendation from "../components/weather/WeatherRecommendation";
import { fetchWeather } from "../services/weatherService";
import type { WeatherResponse } from "../types/weather";
import "../components/weather/Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadWeather = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchWeather();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong loading the weather.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <div className="page weather-page">
      <h1>Weather</h1>
      <p className="weather-intro">Current conditions and forecast for your area.</p>

      {isLoading && (
        <div className="weather-loading" role="status">
          <div className="spinner" />
          <span>Loading weather data...</span>
        </div>
      )}

      {!isLoading && error && (
        <div className="weather-error">
          <p>We couldn't load the weather right now. {error}</p>
          <button type="button" className="btn btn-secondary" onClick={loadWeather}>
            Try Again
          </button>
        </div>
      )}

      {!isLoading && !error && weather && (
        <>
          <CurrentWeatherCard current={weather.current} />
          <WeatherRecommendation recommendation={weather.recommendation} />
          <ForecastList forecast={weather.forecast} />
        </>
      )}
    </div>
  );
}