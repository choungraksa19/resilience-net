interface HistoryFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  crop: string;
  onCropChange: (value: string) => void;
  disease: string;
  onDiseaseChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  date: string;
  onDateChange: (value: string) => void;
  crops: string[];
  diseases: string[];
  statuses: string[];
}

export default function HistoryFilters({
  search,
  onSearchChange,
  crop,
  onCropChange,
  disease,
  onDiseaseChange,
  status,
  onStatusChange,
  date,
  onDateChange,
  crops,
  diseases,
  statuses,
}: HistoryFiltersProps) {
  return (
    <div className="history-filters">
      <input
        type="text"
        className="history-search-input"
        placeholder="Search scan history..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search scan history"
      />

      <select
        className="history-select"
        value={crop}
        onChange={(e) => onCropChange(e.target.value)}
        aria-label="Filter by crop"
      >
        <option value="All">All Crops</option>
        {crops.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        className="history-select"
        value={disease}
        onChange={(e) => onDiseaseChange(e.target.value)}
        aria-label="Filter by disease"
      >
        <option value="All">All Diseases</option>
        {diseases.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <select
        className="history-select"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        aria-label="Filter by status"
      >
        <option value="All">All Statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <input
        type="date"
        className="history-date-input"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        aria-label="Filter by date"
      />
    </div>
  );
}