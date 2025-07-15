'use client'
import { ChangeEventHandler, useRef, useState } from "react";
import Button from "../atoms/Button";

type FileInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function FileInput({ onChange }: FileInputProps) {
  const [fileName, setFileName] = useState<string>("Ningún archivo seleccionado");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onChange(e); 
    }
  };

  return (
    <div className=" flex flex-col">
      <Button onClick={handleClick}>Seleccionar PDF</Button>

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleChange}
      />

      <p className="text-sm text-gray-400 mt-1">{fileName}</p>
    </div>
  );
}
