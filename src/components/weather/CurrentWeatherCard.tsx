import type { CurrentWeatherData } from "../../types/weather";

interface CurrentWeatherCardProps {
  current: CurrentWeatherData;
}

export default function CurrentWeatherCard({ current }: CurrentWeatherCardProps) {
  return (
    <div className="current-weather-card">
      <div className="current-weather-main">
        <span className="current-temp">{current.temperature}°C</span>
        <span className="current-condition">{current.condition}</span>
        <span className="current-location">{current.location}</span>
      </div>

      <div className="current-weather-grid">
        <div className="current-weather-stat">
          <span className="stat-label">Humidity</span>
          <span className="stat-value">{current.humidity}%</span>
        </div>
        <div className="current-weather-stat">
          <span className="stat-label">Rain Probability</span>
          <span className="stat-value">{current.rainProbability}%</span>
        </div>
        <div className="current-weather-stat">
          <span className="stat-label">Wind Speed</span>
          <span className="stat-value">{current.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}