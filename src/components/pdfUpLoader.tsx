"use client";

import { useState, ChangeEvent } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase"; 

export default function PdfUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || file.type !== "application/pdf") {
      alert("Selecciona un archivo PDF válido.");
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `downloadableContent/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

    console.log("Archivo subido:", downloadURL);
      setSuccess(true);
      alert("PDF subido con éxito ");
    } catch (err) {
      console.error("Error al subir el archivo:", err);
      alert("Error al subir el PDF ");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-40">
        <label htmlFor="pdf-upload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
  Seleccionar PDF
</label>
      <input id="pdf-upload" type="file" accept="application/pdf" onChange={handleFileChange} className="hidden"/>
      <button className="cursor-pointer bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center" onClick={handleUpload} disabled={uploading}>
        {uploading ? "Subiendo..." : "Subir PDF"}
      </button>
      {success && <p>Archivo subido con éxito</p>}
    </div>
  );
}
