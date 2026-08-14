import { useState, useEffect } from "react";
import UploadArea from "../components/scan/UploadArea";
import ImagePreview from "../components/scan/ImagePreview";
import ResultCard from "../components/scan/ResultCard";
import { analyzeCropImage } from "../services/aiService";
import type { ScanResult } from "../types/scan";
import "../components/scan/ScanCrop.css";

export default function ScanCrop() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileAccepted = (newFile: File) => {
    setFile(newFile);
    setResult(null);
  };

  const handleRemove = () => {
    setFile(null);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    setResult(null);
    try {
      const analysis = await analyzeCropImage(file);
      setResult(analysis);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleScanAnother = () => {
    setFile(null);
    setResult(null);
  };

  const handleSave = () => {
    // Placeholder — no backend/storage yet
    alert("Result saved (placeholder — not connected to storage yet).");
  };

  return (
    <div className="page scan-page">
      <h1>Scan Crop</h1>
      <p className="scan-intro">
        Upload a photo of your crop to check for signs of disease.
      </p>

      {!file && <UploadArea onFileAccepted={handleFileAccepted} />}

      {file && previewUrl && !result && (
        <>
          <ImagePreview
            file={file}
            previewUrl={previewUrl}
            onRemove={handleRemove}
            onReplace={handleRemove}
          />

          <button
            type="button"
            className="btn btn-primary btn-large analyze-btn"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? "Analyzing crop..." : "Analyze Crop"}
          </button>

          {isAnalyzing && (
            <div className="analyzing-indicator" role="status">
              <div className="spinner" />
              <span>Analyzing crop...</span>
            </div>
          )}
        </>
      )}

      {result && (
        <ResultCard
          result={result}
          onScanAnother={handleScanAnother}
          onSave={handleSave}
        />
      )}
    </div>
  );
}