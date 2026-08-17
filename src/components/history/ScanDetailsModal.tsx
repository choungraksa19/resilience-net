import type { ScanHistoryEntry } from "../../types/scanHistory";

interface ScanDetailsModalProps {
  scan: ScanHistoryEntry;
  onClose: () => void;
}

export default function ScanDetailsModal({ scan, onClose }: ScanDetailsModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close details">
          ×
        </button>

        <div className="modal-thumb" aria-hidden="true">{scan.image}</div>
        <h2>{scan.crop}</h2>
        <p className="modal-date">{scan.date}</p>

        <div className="modal-grid">
          <div className="modal-row">
            <span className="modal-label">Disease</span>
            <span className="modal-value">{scan.disease}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Confidence</span>
            <span className="modal-value">{scan.confidence}%</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Severity</span>
            <span className="modal-value">{scan.severity}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Status</span>
            <span className="modal-value">{scan.status}</span>
          </div>
        </div>

        <div className="modal-text-block">
          <h4>Recommendation</h4>
          <p>{scan.recommendation}</p>
        </div>
      </div>
    </div>
  );
}