import React, { useRef, useState } from "react";

interface FileSelectorProps {
  mode: "file" | "folder";
  label: string;
  placeholder: string;
}

const FileSelector: React.FC<FileSelectorProps> = ({
  mode,
  label,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedName(files[0].name);
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
        {...(mode === "folder" && { webkitdirectory: "true" })}
      />
      <button onClick={handleClick}>{label}</button>
      <span>{selectedName || placeholder}</span>
    </div>
  );
};

export default FileSelector;
