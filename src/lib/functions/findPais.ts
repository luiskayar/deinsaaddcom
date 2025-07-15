import type { AlianzaFirebase } from "@/app/types";

export function findPais(pais:string,documents: AlianzaFirebase[]): AlianzaFirebase | undefined {

  const found = documents.find((doc) => doc.title?.toLowerCase() === pais.toLowerCase());
  
  if (!found) {
    return undefined;
  }
  return found;
}