export interface CropHealthSummary {
  healthy: number;
  needsAttention: number;
  critical: number;
}

export interface WeatherSnapshot {
  temperature: string;
  humidity: string;
  rainProbability: string;
  condition: string;
}

export interface RecentScan {
  id: string;
  crop: string;
  disease: string;
  confidence: number;
  date: string;
  status: "Healthy" | "Needs Attention" | "Critical";
}

export const sampleHealthSummary: CropHealthSummary = {
  healthy: 12,
  needsAttention: 4,
  critical: 1,
};

export const sampleWeather: WeatherSnapshot = {
  temperature: "28°C",
  humidity: "64%",
  rainProbability: "70%",
  condition: "Partly Cloudy",
};

export const sampleRecommendation =
  "Rain is expected tomorrow. Consider checking field drainage.";

export const sampleRecentScans: RecentScan[] = [
  {
    id: "1",
    crop: "Tomato",
    disease: "Early Blight",
    confidence: 94,
    date: "2026-08-12",
    status: "Needs Attention",
  },
  {
    id: "2",
    crop: "Rice",
    disease: "Rice Blast",
    confidence: 89,
    date: "2026-08-11",
    status: "Critical",
  },
  {
    id: "3",
    crop: "Tomato",
    disease: "Healthy",
    confidence: 97,
    date: "2026-08-10",
    status: "Healthy",
  },
  {
    id: "4",
    crop: "Pepper",
    disease: "Bacterial Leaf Spot",
    confidence: 91,
    date: "2026-08-09",
    status: "Needs Attention",
  },
];