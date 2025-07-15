"use client";

import React from "react";

type File = {
  name: string;
  url: string;
};

type FileListProps = {
  files: File[];
  onDelete: (name: string) => void;
};

export default function FileList({ files, onDelete }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold mb-2">Archivos subidos:</h3>
      <ul className="space-y-2 text-sm gap-5">
        {files.map((file) => (
          <li key={file.name} className="flex justify-between items-center  border border-blue-300 rounded-full  shadow-lg px-4 py-2 text-black">
            <span className="truncate max-w-[150px]">{file.name}</span>
            <div className="flex gap-2">
              <a
                href={file.url}
                target="_blank"
                className="text-blue-500 underline"
              >
                Ver
              </a>
              <button
                onClick={() => onDelete(file.name)}
                className="cursor-pointer text-red-500 underline"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
