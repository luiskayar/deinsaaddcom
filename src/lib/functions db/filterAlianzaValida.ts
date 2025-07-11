// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filterAlianzaValida(doc: any): boolean {
  if (!doc.contactInfo || !Array.isArray(doc.contactInfo)) return false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return doc.contactInfo.some((contact: { info: any[]; }) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contact.info?.some((i: any) => {
      const texto = i?.es?.toLowerCase?.().trim();
      return texto && texto !== "sin información";
    })
  );
}