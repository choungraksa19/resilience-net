export interface ScanResult {
  cropName: string;
  disease: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High";
  description: string;
  treatment: string;
  prevention: string;
}

export const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const MAX_FILE_SIZE_MB = 8;
export interface ScanResult {
  cropName: string;
  disease: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High";
  description: string;
  treatment: string;
  prevention: string;
  isSimulated?: boolean;
}