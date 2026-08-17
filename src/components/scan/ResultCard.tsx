import { Link } from "react-router-dom";
import type { ScanResult } from "../../types/scan";

interface ResultCardProps {
  result: ScanResult;
  onScanAnother: () => void;
  onSave: () => void;
}

export default function ResultCard({ result, onScanAnother, onSave }: ResultCardProps) {
  return (
    <div className="result-card">
      <h2>Analysis Result</h2>
      {result.isSimulated ? (
         <p className="result-disclaimer">
           ⚠ Simulated result — not a real AI diagnosis. Real AI analysis is not currently configured.
        </p>
      ) : (
        <p className="result-disclaimer result-disclaimer-real">
         ✓ Analyzed by a real AI vision model.
        </p>
      )}

      <div className="result-grid">
        <div className="result-row">
          <span className="result-label">Crop</span>
          <span className="result-value">{result.cropName}</span>
        </div>
        <div className="result-row">
          <span className="result-label">Disease</span>
          <span className="result-value">{result.disease}</span>
        </div>
        <div className="result-row">
          <span className="result-label">Confidence</span>
          <span className="result-value">{result.confidence}%</span>
        </div>
        <div className="result-row">
          <span className="result-label">Severity</span>
          <span className={`severity-badge severity-${result.severity.toLowerCase()}`}>
            {result.severity}
          </span>
        </div>
      </div>

      <div className="result-text-block">
        <h3>Description</h3>
        <p>{result.description}</p>
      </div>

      <div className="result-text-block">
        <h3>Treatment</h3>
        <p>{result.treatment}</p>
      </div>

      <div className="result-text-block">
        <h3>Prevention</h3>
        <p>{result.prevention}</p>
      </div>

      <div className="result-actions">
        <button type="button" className="btn btn-secondary" onClick={onScanAnother}>
          Scan Another Crop
        </button>
        <Link
          to={`/recommendations?crop=${encodeURIComponent(result.cropName)}&disease=${encodeURIComponent(result.disease)}`}
          className="btn btn-secondary"
        >
          View Recommendations
        </Link>
        <button type="button" className="btn btn-primary" onClick={onSave}>
          Save Result
        </button>
      </div>
    </div>
  );
}