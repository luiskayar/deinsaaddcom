"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL,listAll,deleteObject } from "firebase/storage";
import { storage } from "@/lib/firebase"; 
import Button from "../atoms/Button";
import FileInput from "../molecules/fileInput";
import FileList from "../molecules/FileList";

export default function PdfUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string }[]>([]);
  const [isLoading, setIsLoading ] = useState(true);

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


useEffect(() => {
  const fetchFiles = async () => {
    setIsLoading(true);
    const folderRef = ref(storage, "downloadableContent");

    try {
      const res = await listAll(folderRef);

      const files = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url,
          };
        })
      );

      setUploadedFiles(files);
    } catch (err) {
      console.error("Error al listar archivos:", err);
    } finally{
        setIsLoading(false);
    }
  };

  fetchFiles();
}, []);

    const handleDelete = async (fileName: string) =>{
        const fileRef = ref(storage, `downloadableContent/${fileName}`);

        try{
            await deleteObject(fileRef);


            setUploadedFiles((prev) => prev.filter((file)   => file.name !== fileName)) ;
            alert(`Archivo ${fileName} eliminado con éxito`)
        }catch (err){

            console.error("Error al eliminar el archivo:", err)
            alert("No se pudo eliminar el archivo")
        }



    }


  return (


    <div className=" felx justify-between p-4 border-2 rounded-lg shadow-md bg-white w-full max-w-[1000px] mx-auto text-black items-center">
       



      {isLoading ? (
  <p className="text-sm text-black">Cargando archivos...</p>
) : uploadedFiles.length === 0 ? (
  <p className="text-sm text-black">No hay archivos aún.</p>
) : (
  <FileList files={uploadedFiles} onDelete={handleDelete} />
  
)}
    <div className="flex flex-row mt-10 gap-10 items-center">
<FileInput onChange={handleFileChange}/>
    <div className="flex flex-row gap-2 mb-5.5">
      <Button  onClick={handleUpload} disabled={uploading}>
        {uploading ? "Subiendo..." : "Subir PDF"}
      </Button>
      {success && <p className="mt-2">Archivo subido con éxito</p>}</div>
      </div>

    </div>
  );
}
