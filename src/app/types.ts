export interface AlianzaFirebase{
    title?:string;
    url?:string;
    [key: string]: unknown;
    contactInfo?: ContactGroup[];
}

export interface ContactGroup {
    info: ContactInfo[];
}

export interface ContactInfo {
    en?:string;
    es?:string;
    subtitle?:string;
}

export interface ContactAlianza{
    text:string;
    subtitle?:string;
    items:string[];
}

export interface NewsFirebase{
    description:string;
    image:string;
    title:string;
}

export interface News{
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
}
