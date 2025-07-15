import type { AlianzaFirebase } from "@/app/types";

export interface TitleFlag {
  title: string;
  url: string;
}

export function mapTitleFlag(data: AlianzaFirebase[]): TitleFlag[] {
  return data.map((item) => ({
    title: item.title || "",
    url: String(item.url || ""),
  }));
}