import { useState, useMemo } from "react";
import { Story, StoryFilterState, StoryTag, SortField, SortOrder } from "./story";

const INITIAL_STATE: StoryFilterState = {
    query: "",
    activeTags: [],
    sortField: "date",
    sortOrder: "ascending",
    page: 1,
    perPage: 15,
};

export function useStoryFilter(stories: Story[]) {
    const [filterState, setFilterState] = useState<StoryFilterState>(INITIAL_STATE);

    // Derived: filtered + sorted + paginated
    const filtered = useMemo(() => {
        let result = [...stories];

        // Search: match title, event, or tags
        if (filterState.query.trim()) {
            const q = filterState.query.toLowerCase();
            result = result.filter(
                (s) =>
                    s.title.toLowerCase().includes(q) ||
                    s.event.toLowerCase().includes(q) ||
                    s.location.toLowerCase().includes(q) ||
                    s.tags.some((t) => t.toLowerCase().includes(q))
            );
        }

        // Tag filter: item must have ALL active tags
        if (filterState.activeTags.length > 0) {
            result = result.filter((s) =>
                filterState.activeTags.every((tag) => s.tags.includes(tag))
            );
        }

        // Sort
        result.sort((a, b) => {
            let cmp = 0;
            if (filterState.sortField === "date") {
                cmp = new Date(a.date).getTime() - new Date(b.date).getTime();
            } else {
                cmp = a.title.localeCompare(b.title);
            }
            return filterState.sortOrder === "ascending" ? cmp : -cmp;
        });

        return result;
    }, [stories, filterState.query, filterState.activeTags, filterState.sortField, filterState.sortOrder]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / filterState.perPage));

    const paginated = useMemo(() => {
        const start = (filterState.page - 1) * filterState.perPage;
        return filtered.slice(start, start + filterState.perPage);
    }, [filtered, filterState.page, filterState.perPage]);

    // Actions
    const setQuery = (query: string) =>
        setFilterState((s) => ({ ...s, query, page: 1 }));

    const toggleTag = (tag: StoryTag) =>
        setFilterState((s) => ({
            ...s,
            page: 1,
            activeTags: s.activeTags.includes(tag)
                ? s.activeTags.filter((t) => t !== tag)
                : [...s.activeTags, tag],
        }));

    const removeTag = (tag: StoryTag) =>
        setFilterState((s) => ({
            ...s,
            page: 1,
            activeTags: s.activeTags.filter((t) => t !== tag),
        }));

    const setSortField = (sortField: SortField) =>
        setFilterState((s) => ({ ...s, sortField, page: 1 }));

    const setSortOrder = (sortOrder: SortOrder) =>
        setFilterState((s) => ({ ...s, sortOrder, page: 1 }));

    const setPage = (page: number) =>
        setFilterState((s) => ({ ...s, page: Math.min(Math.max(1, page), totalPages) }));

    const reset = () => setFilterState(INITIAL_STATE);

    return {
        filterState,
        filtered,
        paginated,
        totalPages,
        totalResults: filtered.length,
        setQuery,
        toggleTag,
        removeTag,
        setSortField,
        setSortOrder,
        setPage,
        reset,
    };
}