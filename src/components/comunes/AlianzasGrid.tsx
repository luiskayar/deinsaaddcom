'use client'
import { useState, useEffect} from "react"
import { AlianzaPopup } from "./index"
import Image from "next/image"
import { getAlianzas } from "@/lib/getAlianzas"
import { mapTitleFlag, TitleFlag } from "@/lib/functions/mapTitleFlag"
import type { AlianzaFirebase } from "@/app/types"
import { filterAlianzaValida } from "@/lib/functions/filterAlianzaValida"


export default function AlianzasGrid() {
    const [alianzas, setAlianzas] = useState<TitleFlag[]>([]);
    const [selected, setSelected] = useState<TitleFlag | null>(null);
    const [documentos, setDocumentos] = useState<AlianzaFirebase[]>([]);

    useEffect(() => {
    async function fetchData() {
      const documentos = await getAlianzas();
      const validos = documentos.filter((doc) => filterAlianzaValida(doc));
      setDocumentos(documentos);
      const reducidos = mapTitleFlag(validos);
      setAlianzas(reducidos);
    }
    fetchData();
  }, []);

    return (
         <div className="relative">
      {selected && (
        <AlianzaPopup
          title={selected.title}
          url={selected.url}
          documents={documentos}
          onClose={() => setSelected(null)}
        />
      )}

      <div className="flex flex-wrap justify-center gap-8">
        {alianzas.map((a, i) => (
          <div
            onClick={() => setSelected(a)}
            key={i}
            className="group cursor-pointer flex flex-col items-center space-y-3 p-4 w-32 h-32 bg-[#181818] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <div className="w-16 h-12 relative overflow-hidden rounded-lg shadow-md">
                <Image
                    src={a.url}
                    alt={a.title}
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="text-sm font-semibold text-white text-center group-hover:text-orange-400 transition-colors break-words">
              {a.title}
            </span>
          </div>
        ))}
      </div>
    </div>
    );
}