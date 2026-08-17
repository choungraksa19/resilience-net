import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import HistoryFilters from "../components/history/HistoryFilters";
import ScanHistoryCard from "../components/history/ScanHistoryCard";
import ScanDetailsModal from "../components/history/ScanDetailsModal";
import { scanHistoryData } from "../data/scanHistoryData";
import type { ScanHistoryEntry } from "../types/scanHistory";
import "../components/history/History.css";

export default function ScanHistory() {
  const navigate = useNavigate();

  // Local state seeded from sample data. Later this can be replaced
  // with data fetched from an API/database on mount, and delete can
  // call a real API instead of just updating local state.
  const [scans, setScans] = useState<ScanHistoryEntry[]>(scanHistoryData);

  const [search, setSearch] = useState("");
  const [crop, setCrop] = useState("All");
  const [disease, setDisease] = useState("All");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");

  const [selectedScan, setSelectedScan] = useState<ScanHistoryEntry | null>(null);

  const crops = useMemo(() => Array.from(new Set(scans.map((s) => s.crop))), [scans]);
  const diseases = useMemo(() => Array.from(new Set(scans.map((s) => s.disease))), [scans]);
  const statuses = useMemo(() => Array.from(new Set(scans.map((s) => s.status))), [scans]);

  const filtered = useMemo(() => {
    return scans.filter((s) => {
      const matchesSearch =
        search.trim() === "" ||
        s.crop.toLowerCase().includes(search.toLowerCase()) ||
        s.disease.toLowerCase().includes(search.toLowerCase()) ||
        s.recommendation.toLowerCase().includes(search.toLowerCase());

      const matchesCrop = crop === "All" || s.crop === crop;
      const matchesDisease = disease === "All" || s.disease === disease;
      const matchesStatus = status === "All" || s.status === status;
      const matchesDate = date === "" || s.date === date;

      return matchesSearch && matchesCrop && matchesDisease && matchesStatus && matchesDate;
    });
  }, [scans, search, crop, disease, status, date]);

  const handleDelete = (id: string) => {
    setScans((prev) => prev.filter((s) => s.id !== id));
  };

  const handleScanAgain = (_crop: string) => {
    navigate("/scan");
  };

  return (
    <div className="page history-page">
      <h1>Scan History</h1>
      <p className="history-intro">Review, filter, and manage your past crop scans.</p>

      <HistoryFilters
        search={search}
        onSearchChange={setSearch}
        crop={crop}
        onCropChange={setCrop}
        disease={disease}
        onDiseaseChange={setDisease}
        status={status}
        onStatusChange={setStatus}
        date={date}
        onDateChange={setDate}
        crops={crops}
        diseases={diseases}
        statuses={statuses}
      />

      {filtered.length === 0 ? (
        <p className="history-empty">No scans match your filters.</p>
      ) : (
        <div className="history-grid">
          {filtered.map((scan) => (
            <ScanHistoryCard
              key={scan.id}
              scan={scan}
              onViewDetails={setSelectedScan}
              onDelete={handleDelete}
              onScanAgain={handleScanAgain}
            />
          ))}
        </div>
      )}

      {selectedScan && (
        <ScanDetailsModal scan={selectedScan} onClose={() => setSelectedScan(null)} />
      )}
    </div>
  );
}