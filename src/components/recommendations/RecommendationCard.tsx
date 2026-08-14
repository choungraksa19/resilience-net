import type { Recommendation } from "../../types/recommendation";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

function priorityClass(priority: Recommendation["priority"]) {
  if (priority === "High") return "priority-high";
  if (priority === "Medium") return "priority-medium";
  return "priority-low";
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="recommendation-card">
      <div className="rec-card-header">
        <div>
          <h3>{recommendation.crop}</h3>
          {recommendation.disease !== "None" && (
            <p className="rec-disease">{recommendation.disease}</p>
          )}
        </div>
        <span className={`priority-badge ${priorityClass(recommendation.priority)}`}>
          {recommendation.priority} Priority
        </span>
      </div>

      <span className="rec-category">{recommendation.category}</span>

      <div className="rec-text-block">
        <h4>Recommendation</h4>
        <p>{recommendation.recommendation}</p>
      </div>

      <div className="rec-text-block">
        <h4>Prevention</h4>
        <p>{recommendation.prevention}</p>
      </div>
    </div>
  );
}