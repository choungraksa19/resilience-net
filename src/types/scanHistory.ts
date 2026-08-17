export type ScanStatus = "Healthy" | "Needs Attention" | "Critical";
export type ScanSeverity = "Low" | "Moderate" | "High";

export interface ScanHistoryEntry {
  id: string;
  date: string; // ISO format: YYYY-MM-DD
  crop: string;
  image: string; // placeholder image path or emoji-style identifier for now
  disease: string;
  confidence: number;
  severity: ScanSeverity;
  recommendation: string;
  status: ScanStatus;
}