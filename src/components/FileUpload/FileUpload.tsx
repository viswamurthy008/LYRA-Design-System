import './FileUpload.css';
import { useRef, useState } from 'react';

export interface FileUploadProps {
  /** `accept` attribute, e.g. 'image/*'. */
  accept?: string;
  multiple?: boolean;
  onFiles?: (files: File[]) => void;
  hint?: string;
  className?: string;
}

/** Drag-and-drop file dropzone with a selected-file list. Mirrors the Figma "File Upload". */
export function FileUpload({
  accept,
  multiple = true,
  onFiles,
  hint = 'SVG, PNG, JPG or PDF (max 10MB)',
  className = '',
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const handle = (list: FileList | null) => {
    if (!list) return;
    const arr = Array.from(list);
    setFiles(arr);
    onFiles?.(arr);
  };
  return (
    <div className={`ds-fileupload ${className}`.trim()}>
      <button
        type="button"
        className={`ds-fileupload__zone${dragOver ? ' ds-fileupload__zone--over' : ''}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handle(e.dataTransfer.files);
        }}
      >
        <span className="ds-fileupload__icon" aria-hidden="true">
          ⬆
        </span>
        <span className="ds-fileupload__text">
          <strong>Click to upload</strong> or drag and drop
        </span>
        <span className="ds-fileupload__hint">{hint}</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        hidden
        onChange={(e) => handle(e.target.files)}
      />
      {files.length > 0 && (
        <ul className="ds-fileupload__list">
          {files.map((f, i) => (
            <li className="ds-fileupload__file" key={i}>
              <span className="ds-fileupload__filename">{f.name}</span>
              <span className="ds-fileupload__size">{(f.size / 1024).toFixed(0)} KB</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
