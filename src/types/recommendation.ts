export type RecommendationCategory =
  | "Disease Treatment"
  | "Disease Prevention"
  | "Watering"
  | "Fertilization"
  | "Weather-Based Advice"
  | "General Crop Care";

export type RecommendationPriority = "Low" | "Medium" | "High";

export interface Recommendation {
  id: string;
  crop: string;
  disease: string; // "None" for general/non-disease-specific advice
  category: RecommendationCategory;
  priority: RecommendationPriority;
  recommendation: string;
  prevention: string;
}