import { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./FileUpload.css";

interface FileUploadProps {
  name: string;
  allowedTypes?: string[];
  onFileSelect?: (file: File) => void;
  label?: string;
  id?: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  allowedTypes = ["image/png", "image/jpeg", "image/svg+xml", "image/webp", "image/gif"],
  onFileSelect,
  label = "Upload file",
  id,
  className,
}) => {
  const { control } = useFormContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, onChange: (file: File) => void) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (allowedTypes.includes(file.type)) {
        setLoading(true);
        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
        onChange(file);
        if (onFileSelect) {
          onFileSelect(file);
        }
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        alert("Selected file type is not allowed");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="file-upload-component">
          <label htmlFor={id || name} className={`file-upload-label ${className}`}>
            {loading ? (
              <div className="file-upload-loading">
                <div className="spinner"></div>
                <p className="text-sm text-gray-600 mt-2">Uploading...</p>
              </div>
            ) : (
              <>
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-500" viewBox="0 0 32 32">
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="file-upload-label-text">{label}</p>
                </div>
                <input
                  type="file"
                  id={id || name}
                  className="hidden"
                  onChange={(event) => handleFileChange(event, field.onChange)}
                />
                <p className="file-upload-hint">
                  Allowed: {allowedTypes.map((type) => type.split("/")[1].toUpperCase()).join(", ")}.
                </p>
                {selectedFile && (
                  <div className="file-preview">
                    {filePreview && <img src={filePreview} alt="Preview" className="file-preview-image" />}
                    <p className="file-preview-name">{selectedFile.name}</p>
                  </div>
                )}
              </>
            )}
          </label>
        </div>
      )}
    />
  );
};

export default FileUpload;
