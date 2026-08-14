import { Link } from "react-router-dom";
import type { WeatherSnapshot } from "../../data/dashboardSampleData";

interface WeatherCardProps {
  weather: WeatherSnapshot;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="dashboard-card weather-card">
      <h2 className="card-title">Today's Weather</h2>
      <p className="weather-condition">{weather.condition}</p>
      <div className="weather-grid">
        <div className="weather-stat">
          <span className="weather-label">Temperature</span>
          <span className="weather-value">{weather.temperature}</span>
        </div>
        <div className="weather-stat">
          <span className="weather-label">Humidity</span>
          <span className="weather-value">{weather.humidity}</span>
        </div>
        <div className="weather-stat">
          <span className="weather-label">Rain Probability</span>
          <span className="weather-value">{weather.rainProbability}</span>
        </div>
      </div>
      <Link to="/weather" className="card-link">
        View full weather →
      </Link>
    </div>
  );
}