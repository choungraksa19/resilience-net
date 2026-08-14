import type { RecommendationCategory } from "../../types/recommendation";

interface RecommendationFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  crop: string;
  onCropChange: (value: string) => void;
  categories: RecommendationCategory[];
  crops: string[];
}

export default function RecommendationFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  crop,
  onCropChange,
  categories,
  crops,
}: RecommendationFiltersProps) {
  return (
    <div className="rec-filters">
      <input
        type="text"
        className="rec-search-input"
        placeholder="Search recommendations..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search recommendations"
      />

      <select
        className="rec-select"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className="rec-select"
        value={crop}
        onChange={(e) => onCropChange(e.target.value)}
        aria-label="Filter by crop"
      >
        <option value="All">All Crops</option>
        {crops.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}