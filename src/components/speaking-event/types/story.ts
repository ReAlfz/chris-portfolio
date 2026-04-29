export type StoryTag =
    | "Tech"
    | "Business"
    | "Skill Development"
    | "Bootcamp"
    | "Enterprise Training"
    | "Mental Health"
    | "Agile"
    | "Leadership";

export interface Story {
    id: string;
    title: string;
    event: string;
    date: string;
    location: string;
    tags: StoryTag[];
    imageUrl: string;
    excerpt?: string;
}

export type SortField = "date" | "title";
export type SortOrder = "ascending" | "descending";

export interface StoryFilterState {
    query: string;
    activeTags: StoryTag[];
    sortField: SortField;
    sortOrder: SortOrder;
    page: number;
    perPage: number;
}