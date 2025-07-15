import { useState, useEffect } from 'react';
import { extractContactInfo } from '@/lib/functions/extractContactInfo';
import { ContactAlianza, AlianzaFirebase} from '@/app/types';
import { findPais } from '@/lib/functions/findPais';



export default function AlianzaPopup({ title, onClose,documents}: {
    title: string;
    onClose: () => void;
    url: string;
    documents: AlianzaFirebase[];

}) {
  const [contacts, setContacts] = useState<ContactAlianza[]>([]);

  useEffect(() =>{
    const doc = findPais(title, documents);
    if(doc && doc.contactInfo){
      const extraidos = extractContactInfo(doc.contactInfo);
      setContacts(extraidos);
    }else{
      setContacts([]);
    }
  }, [title, documents]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-fit max-w-[95vw] text-center space-y-4">
        <h2 className="text-lg font-bold text-gray-800">Alianzas en {title}</h2>

        <div className="flex flex-row gap-6 justify-center px-2 py-4">
          {contacts.length > 0 ? (
            contacts.map((contacto, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border rounded-xl shadow-md p-4 min-w-[250px] max-w-[300px] flex-shrink-0"
              >
                <p className="text-sm font-semibold text-blue-700 mb-2">{contacto.text}</p>
        {contacto.subtitle && (
          <p className="text-sm text-gray-800 mb-2">
            {contacto.subtitle}
          </p>
        )}
        {contacto.items.map((item, i) => (
          <div key={i} className="mb-1 px-3 py-1 bg-white rounded shadow-sm text-sm text-gray-700">
            {item}
          </div>
        ))}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">No hay información disponible.</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}