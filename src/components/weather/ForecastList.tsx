import type { DailyForecast } from "../../types/weather";

interface ForecastListProps {
  forecast: DailyForecast[];
}

export default function ForecastList({ forecast }: ForecastListProps) {
  return (
    <div className="forecast-section">
      <h2 className="section-heading">7-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day) => (
          <div className="forecast-day-card" key={day.date}>
            <span className="forecast-day-label">{day.dayLabel}</span>
            <span className="forecast-condition">{day.condition}</span>
            <span className="forecast-temps">
              {day.maxTemp}° / {day.minTemp}°
            </span>
            <span className="forecast-rain">💧 {day.rainProbability}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}