export type Project = {
    id?: string; // Same as name - used as Firestore document ID
    name: string; // Used as the Firestore document ID and URL slug
    cover?: string;
    date: string;
    gallery?: string[];
    lang?: string;
    slogan?: string;
    title: string;
    type?: string;
    info?: string;
    link?: string;
    code?: string;
    user_id?: string;
    email?: string;
    youtube?: string;
};
