interface ImagePreviewProps {
  file: File;
  previewUrl: string;
  onRemove: () => void;
  onReplace: () => void;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function ImagePreview({ file, previewUrl, onRemove, onReplace }: ImagePreviewProps) {
  return (
    <div className="image-preview">
      <img src={previewUrl} alt="Selected crop preview" className="preview-img" />
      <div className="preview-info">
        <p className="preview-filename">{file.name}</p>
        <p className="preview-filesize">{formatFileSize(file.size)}</p>
        <div className="preview-actions">
          <button type="button" className="btn btn-secondary" onClick={onReplace}>
            Replace Image
          </button>
          <button type="button" className="btn btn-danger" onClick={onRemove}>
            Remove Image
          </button>
        </div>
      </div>
    </div>
  );
}