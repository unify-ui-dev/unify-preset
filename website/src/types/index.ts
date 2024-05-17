export type SeoType = {
    ogImage: {
        src: string;
        alt: string;
    };
    keywords: string;
    title: string;
    description: string;
};

export type SidebarItem = {
    title: string;
    path: string;
    description: string;
    keywords: string;
    state?: "updated" | "draft" | "new" | "none"
}
type SidebarGroupItems = {
    label: string;
    items: SidebarItem[];
}

export type SidebarGroupCat = {
    name: string;
    items: SidebarGroupItems[];
}
