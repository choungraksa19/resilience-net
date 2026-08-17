interface WeatherRecommendationProps {
  recommendation: string;
}

export default function WeatherRecommendation({ recommendation }: WeatherRecommendationProps) {
  return (
    <div className="weather-recommendation">
      <h2 className="section-heading">Farming Recommendation</h2>
      <p>{recommendation}</p>
    </div>
  );
}