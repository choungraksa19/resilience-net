import type { ScanHistoryEntry } from "../../types/scanHistory";

interface ScanHistoryCardProps {
  scan: ScanHistoryEntry;
  onViewDetails: (scan: ScanHistoryEntry) => void;
  onDelete: (id: string) => void;
  onScanAgain: (crop: string) => void;
}

function statusClass(status: ScanHistoryEntry["status"]) {
  if (status === "Healthy") return "status-healthy";
  if (status === "Needs Attention") return "status-attention";
  return "status-critical";
}

export default function ScanHistoryCard({ scan, onViewDetails, onDelete, onScanAgain }: ScanHistoryCardProps) {
  return (
    <div className="history-card">
      <div className="history-card-top">
        <div className="history-thumb" aria-hidden="true">{scan.image}</div>
        <div className="history-card-info">
          <h3>{scan.crop}</h3>
          <p className="history-disease">{scan.disease}</p>
          <p className="history-date">{scan.date}</p>
        </div>
        <span className={`status-badge ${statusClass(scan.status)}`}>{scan.status}</span>
      </div>

      <div className="history-card-meta">
        <span>Confidence: <strong>{scan.confidence}%</strong></span>
        <span>Severity: <strong>{scan.severity}</strong></span>
      </div>

      <div className="history-card-actions">
        <button type="button" className="btn btn-secondary" onClick={() => onViewDetails(scan)}>
          View Details
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => onScanAgain(scan.crop)}>
          Scan Again
        </button>
        <button type="button" className="btn btn-danger" onClick={() => onDelete(scan.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}