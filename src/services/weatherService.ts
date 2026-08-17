import type { WeatherResponse } from "../types/weather";

const BACKEND_URL = "http://localhost:5000";

/**
 * Fetches weather data from our own backend, which holds the
 * real weather API key. The frontend never sees or sends any
 * API key directly.
 */
export async function fetchWeather(): Promise<WeatherResponse> {
  const response = await fetch(`${BACKEND_URL}/api/weather`);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message || "Unable to load weather data right now.");
  }

  const json = await response.json();
  return json.data;
}