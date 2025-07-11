import type { ContactAlianza } from '@/app/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractContactInfo(info:any[]): ContactAlianza[] {
   /* return info.map((item) => {
        const info = item.info ?? [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: ContactAlianza[] = info.map((infoItem:any) => ({
            text: infoItem.es || "",
            subtitle: infoItem.subtitle,
        }));
        
        return result;
    }).flat();*/
    if(!Array.isArray(info)) {
        return [];
    }
    return info.map((grupo) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items = (grupo.info ?? []).map((item: any)=> item.es || "").filter(Boolean);
        return {
            text: grupo.text || "",
            subtitle: grupo.subtitle,
            items,
        };
    }) 
}