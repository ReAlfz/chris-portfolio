"use client";

import { useState } from "react";
import { STORIES_DATA } from "./types/stories";
import { useStoryFilter } from "./types/use_story_filter";
import StoryCard from "./story_card";
import { SortField, SortOrder, StoryTag } from "./types/story";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

const ALL_TAGS: StoryTag[] = [
    "Tech",
    "Business",
    "Skill Development",
    "Bootcamp",
    "Enterprise Training",
    "Mental Health",
    "Agile",
    "Leadership",
];

export default function StoriesFromTheStage() {
    const {
        filterState,
        paginated,
        totalPages,
        totalResults,
        setQuery,
        toggleTag,
        removeTag,
        setSortField,
        setSortOrder,
        setPage,
    } = useStoryFilter(STORIES_DATA);

    const [showTagsDropdown, setShowTagsDropdown] = useState(false);

    return (
        <section className={`min-h-screen bg-[#f3f4f6] px-36 py-16 ${archivo.className}`}>
            {/* Title */}
            <h3 className="text-display font-semibold text-black mb-9.5 tracking-tight">
                Stories from the Stage
            </h3>

            {/* Search + Sort bar */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
                {/* Search input */}
                <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 w-75">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z" fill="#99A1AF" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search event, tag, or location"
                        value={filterState.query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="text-sm text-gray-700 bg-transparent outline-none w-full placeholder:text-gray-400 placeholder:text-sm"
                    />
                </div>

                {/* Result count */}
                <span className="text-sm text-gray-500 font-normal">
                    Result: {totalResults} matches
                </span>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Sort by label */}
                <span className="text-sm text-gray-500">Sort by</span>

                {/* Sort field */}
                <div className="relative">
                    <select
                        value={filterState.sortField}
                        onChange={(e) => setSortField(e.target.value as SortField)}
                        className="appearance-none text-sm bg-white border border-gray-200 pl-3 pr-8 py-2 outline-none cursor-pointer text-gray-400">
                        <option value="date">Date</option>
                        <option value="title">Title</option>
                    </select>
                    <svg
                        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {/* Sort order */}
                <div className="relative">
                    <select
                        value={filterState.sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                        className="appearance-none text-sm bg-white border border-gray-200 pl-3 pr-8 py-2 outline-none cursor-pointer text-gray-400"
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                    <svg
                        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <span className="text-sm text-gray-500">Tags</span>

                {/* Tags dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowTagsDropdown((v) => !v)}
                        className="flex items-center gap-1.5 text-sm bg-white border border-gray-200 px-3 py-2 text-gray-400 hover:bg-gray-50"
                    >
                        setting
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {showTagsDropdown && (
                        <div className="absolute right-0 mt-1 w-52 bg-white border border-gray-200 rounded-sm shadow-lg z-10 p-2">
                            {ALL_TAGS.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => {
                                        toggleTag(tag);
                                        setShowTagsDropdown(false);
                                    }}
                                    className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${filterState.activeTags.includes(tag)
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Active tag chips */}
            {filterState.activeTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                    {filterState.activeTags.map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 text-sm font-medium bg-gray-200 border border-gray-300 px-3 py-1 text-gray-500 rounded-md">
                            {tag}
                            <button
                                onClick={() => removeTag(tag)}
                                className="ml-1 text-gray-400 hover:text-gray-700 leading-none"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {/* Grid */}
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    {paginated.map((story) => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <svg className="w-12 h-12 mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium">No stories found</p>
                    <p className="text-xs mt-1">Try adjusting your search or filters</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1">
                    {/* Prev */}
                    <button
                        onClick={() => setPage(filterState.page - 1)}
                        disabled={filterState.page === 1}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${p === filterState.page
                                ? "bg-gray-900 text-white shadow"
                                : "text-gray-600 hover:bg-white hover:shadow-sm"
                                }`}
                        >
                            {p}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => setPage(filterState.page + 1)}
                        disabled={filterState.page === totalPages}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
}