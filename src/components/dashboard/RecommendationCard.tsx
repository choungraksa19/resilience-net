import { Link } from "react-router-dom";

interface RecommendationCardProps {
  recommendation: string;
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="dashboard-card recommendation-card">
      <h2 className="card-title">Farming Recommendation</h2>
      <p className="recommendation-text">{recommendation}</p>
      <Link to="/recommendations" className="card-link">
        View all recommendations →
      </Link>
    </div>
  );
}