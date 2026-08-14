import { useRef, useState } from "react";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_MB } from "../../types/scan";

interface UploadAreaProps {
  onFileAccepted: (file: File) => void;
}

export default function UploadArea({ onFileAccepted }: UploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateAndAccept = (file: File | undefined) => {
    setError(null);

    if (!file) {
      setError("No file was selected. Please choose an image.");
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setError("Unsupported file type. Please upload a JPG, PNG, or WEBP image.");
      return;
    }

    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > MAX_FILE_SIZE_MB) {
      setError(`File is too large. Maximum size is ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }

    onFileAccepted(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    validateAndAccept(e.dataTransfer.files?.[0]);
  };

  return (
    <div
      className={`upload-area ${isDragging ? "dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <div className="upload-icon" aria-hidden="true">📷</div>
      <p className="upload-title">Drag and drop your crop image here</p>
      <p className="upload-subtext">JPG, JPEG, PNG, or WEBP — up to {MAX_FILE_SIZE_MB}MB</p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => inputRef.current?.click()}
      >
        Browse Files
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_FILE_TYPES.join(",")}
        onChange={(e) => validateAndAccept(e.target.files?.[0])}
        hidden
      />

      {error && (
        <p className="upload-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}