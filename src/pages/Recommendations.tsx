import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RecommendationFilters from "../components/recommendations/RecommendationFilters";
import RecommendationCard from "../components/recommendations/RecommendationCard";
import { recommendationsData } from "../data/recommendationsData";
import type { RecommendationCategory } from "../types/recommendation";
import "../components/recommendations/Recommendations.css";

const CATEGORIES: RecommendationCategory[] = [
  "Disease Treatment",
  "Disease Prevention",
  "Watering",
  "Fertilization",
  "Weather-Based Advice",
  "General Crop Care",
];

export default function Recommendations() {
  const [searchParams] = useSearchParams();
  const incomingCrop = searchParams.get("crop");
  const incomingDisease = searchParams.get("disease");

  const [search, setSearch] = useState(incomingDisease ?? "");
  const [category, setCategory] = useState("All");
  const [crop, setCrop] = useState(incomingCrop ?? "All");

  // If the query params change (e.g. navigating here again from a new scan), sync filters
  useEffect(() => {
    if (incomingCrop) setCrop(incomingCrop);
    if (incomingDisease) setSearch(incomingDisease);
  }, [incomingCrop, incomingDisease]);

  const crops = useMemo(
    () => Array.from(new Set(recommendationsData.map((r) => r.crop))),
    []
  );

  const filtered = useMemo(() => {
    return recommendationsData.filter((r) => {
      const matchesSearch =
        search.trim() === "" ||
        r.recommendation.toLowerCase().includes(search.toLowerCase()) ||
        r.prevention.toLowerCase().includes(search.toLowerCase()) ||
        r.disease.toLowerCase().includes(search.toLowerCase()) ||
        r.crop.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "All" || r.category === category;
      const matchesCrop = crop === "All" || r.crop === crop;

      return matchesSearch && matchesCategory && matchesCrop;
    });
  }, [search, category, crop]);

  return (
    <div className="page recommendations-page">
      <h1>Recommendations</h1>
      <p className="rec-intro">
        Browse treatment, prevention, and general care guidance for your crops.
      </p>

      {incomingCrop && incomingDisease && (
        <div className="rec-context-banner">
          Showing results related to your recent scan: <strong>{incomingCrop} — {incomingDisease}</strong>
        </div>
      )}

      <RecommendationFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        crop={crop}
        onCropChange={setCrop}
        categories={CATEGORIES}
        crops={crops}
      />

      {filtered.length === 0 ? (
        <p className="rec-empty">No recommendations match your filters.</p>
      ) : (
        <div className="rec-grid">
          {filtered.map((r) => (
            <RecommendationCard recommendation={r} key={r.id} />
          ))}
        </div>
      )}
    </div>
  );
}