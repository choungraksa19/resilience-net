import type { ScanHistoryEntry } from "../types/scanHistory";

/**
 * Local sample data standing in for a future API/database source.
 * Any function that later fetches real scan history should resolve
 * to an array matching ScanHistoryEntry[], so consuming components
 * do not need to change.
 */
export const scanHistoryData: ScanHistoryEntry[] = [
  {
    id: "1",
    date: "2026-08-12",
    crop: "Tomato",
    image: "🍅",
    disease: "Early Blight",
    confidence: 94,
    severity: "Moderate",
    recommendation: "Remove infected leaves and improve air circulation.",
    status: "Needs Attention",
  },
  {
    id: "2",
    date: "2026-08-11",
    crop: "Rice",
    image: "🌾",
    disease: "Rice Blast",
    confidence: 89,
    severity: "High",
    recommendation: "Apply appropriate fungicide and remove severely affected plants.",
    status: "Critical",
  },
  {
    id: "3",
    date: "2026-08-10",
    crop: "Tomato",
    image: "🍅",
    disease: "Healthy",
    confidence: 97,
    severity: "Low",
    recommendation: "No treatment needed. Continue standard care.",
    status: "Healthy",
  },
  {
    id: "4",
    date: "2026-08-09",
    crop: "Pepper",
    image: "🫑",
    disease: "Bacterial Leaf Spot",
    confidence: 91,
    severity: "Moderate",
    recommendation: "Remove affected leaves and avoid overhead watering.",
    status: "Needs Attention",
  },
  {
    id: "5",
    date: "2026-08-05",
    crop: "Rice",
    image: "🌾",
    disease: "Healthy",
    confidence: 95,
    severity: "Low",
    recommendation: "No treatment needed. Continue standard care.",
    status: "Healthy",
  },
  {
    id: "6",
    date: "2026-07-29",
    crop: "Pepper",
    image: "🫑",
    disease: "Bacterial Leaf Spot",
    confidence: 88,
    severity: "High",
    recommendation: "Remove affected leaves and sanitize tools between plants.",
    status: "Critical",
  },
];