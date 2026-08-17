import type { ScanResult } from "../types/scan";

/**
 * ============================================================
 * AI SERVICE — now calls the real backend
 * ============================================================
 * This function sends the crop image to the backend, which
 * handles the real/simulated AI decision. The frontend never
 * talks to any AI provider or API key directly — it only ever
 * talks to our own backend.
 * ============================================================
 */

const BACKEND_URL = "http://localhost:5000";

export async function analyzeCropImage(file: File): Promise<ScanResult & { isSimulated: boolean }> {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${BACKEND_URL}/api/scans/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message || "Failed to analyze crop image.");
  }

  const json = await response.json();
  return json.data;
}