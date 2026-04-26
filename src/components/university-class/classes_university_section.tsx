'use client'

import { Archivo } from "next/font/google";
import workshopThumb from "../../../public/images/portfolio/agile_workshop.png";
import { useMemo, useState } from "react";
import { label } from "framer-motion/client";
import ClassesCard from "./classes_card";
import { StaticImageData } from "next/image";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

type Institution = "University of Manitoba" | "The University of Winnipeg" | "McMaster University";
type Tags = "Business Analysis" | "Fundamentals" | "Project Management"
    | "Management" | "Networking" | "Global Business" | "Public Speaking"
    | "Communication";


type clasessModel = {
    title: string;
    excerpt?: string;
    venue: string;
    tags: string[];
    image?: StaticImageData,
    featured?: boolean;
    level?: "beginner" | "intermediate" | "advanced";
    categories: string[];
    sortKey: {
        name: string;
        date?: number;  // Date.parse(...)
    };
}

const RAW: clasessModel[] = [
    {
        title: "Agile Business Analysis",
        excerpt:
            "This course lays the groundwork for understanding the role of a business analyst, focusing on core concepts, methodologies, and industry best practices.",
        venue: "University of Manitoba",
        tags: ["Business Analysis", "Project Management"],
        categories: ["Business Analysis", "Project Management"],
        image: workshopThumb,
        sortKey: { name: "Agile Business Analysis" },
    },
    {
        title: "Business Analysis Fundamentals",
        excerpt:
            "This course lays the groundwork for understanding the role of a business analyst, focusing on core concepts, methodologies, and industry best practices.",
        venue: "University of Manitoba",
        tags: ["Business Analysis", "Fundamentals"],
        categories: ["Business Analysis"],
        image: workshopThumb,
        sortKey: { name: "Business Analysis Fundamentals" },
    },
    {
        title: "Elicitation and Collaboration",
        excerpt:
            "This course lays the groundwork for understanding the role of a business analyst, focusing on core concepts, methodologies, and industry best practices.",
        venue: "University of Manitoba",
        tags: ["Business Analysis", "Fundamentals"],
        categories: ["Business Analysis"],
        image: workshopThumb,
        sortKey: { name: "Elicitation and Collaboration" },
    },
    {
        title: "Planning and Monitoring",
        excerpt:
            "This course lays the groundwork for understanding the role of a business analyst, focusing on core concepts, methodologies, and industry best practices.",
        venue: "University of Manitoba",
        tags: ["Business Analysis"],
        categories: ["Business Analysis"],
        image: workshopThumb,
        sortKey: { name: "Planning and Monitoring" },
    },
    {
        title: "Solution Assessment and Validation",
        excerpt:
            "This course lays the groundwork for understanding the role of a business analyst, focusing on core concepts, methodologies, and industry best practices.",
        venue: "University of Manitoba",
        tags: ["Business Analysis"],
        categories: ["Business Analysis"],
        image: workshopThumb,
        sortKey: { name: "Solution Assessment and Validation" },
    },
    {
        title: "Requirements Life Cycle Management",
        excerpt:
            "This course lays the groundwork for understanding the role of a business analyst, focusing on core concepts, methodologies, and industry best practices.",
        venue: "University of Manitoba",
        tags: ["Business Analysis", "Management"],
        categories: ["Business Analysis"],
        image: workshopThumb,
        sortKey: { name: "Requirements Life Cycle Management" },
    },
];

const institutionList: { id: Institution; label: string }[] = [
    { id: "University of Manitoba", label: "University of Manitoba" },
    { id: "The University of Winnipeg", label: "The University of Winnipeg" },
    { id: "McMaster University", label: "McMaster University" },
];

const tagsList: { id: Tags; label: string }[] = [
    { id: "Business Analysis", label: "Business Analysis" },
    { id: "Fundamentals", label: "Fundamentals" },
    { id: "Project Management", label: "Project Management" },
    { id: "Management", label: "Management" },
    { id: "Networking", label: "Networking" },
    { id: "Global Business", label: "Global Business" },
    { id: "Public Speaking", label: "Public Speaking" },
    { id: "Communication", label: "Communication" },
]

export default function ClassesUniversitySection() {
    const PAGE_SIZE = 9;
    const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const [institution, setInstitution] = useState<Set<Institution>>(new Set(["University of Manitoba"]));
    const [tag, setTag] = useState<Set<Tags>>(new Set(["Business Analysis"]));

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        let list = RAW.filter((course) => {
            // filter by institution (venue is a string, not array)
            if (institution.size && !institution.has(course.venue as Institution)) return false;

            // filter by tag
            if (tag.size && !course.tags.some((t) => tag.has(t as Tags))) return false;

            // search query
            if (q) {
                const blob = `${course.title} ${course.excerpt ?? ""} ${course.venue} ${course.tags.join(" ")}`.toLowerCase();
                if (!blob.includes(q)) return false;
            }

            return true;
        });

        list = [...list].sort((a, b) => {
            const av = a.sortKey.date ?? 0;
            const bv = b.sortKey.date ?? 0;
            const cmp = av - bv;
            return sortDir === "asc" ? cmp : -cmp;
        });

        return list;
    }, [query, institution, tag, sortDir]);

    const toggle = <T extends string>(set: Set<T>, id: T) => {
        const next = new Set(set);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
    };

    const clearFilters = () => {
        setInstitution(new Set(["University of Manitoba"]));
        setTag(new Set(["Business Analysis"]));
        setQuery("");
        setPage(1);
    };

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageSafe = Math.min(page, totalPages);
    const slice = filtered.slice((pageSafe - 1) * PAGE_SIZE, pageSafe * PAGE_SIZE);

    return (
        <section className="bg-surface-muted px-36 py-31.75 flex flex-col gap-6">
            <div className="flex flex-row justify-between gap-33.25">
                <h3 className={`text-display font-semibold text-black ${archivo.className}`}>
                    Classes
                </h3>
                <label className="relative w-full flex">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                    </span>
                    <input
                        type="search"
                        placeholder="Search workshop name or tag"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        className={`w-full rounded-[20px] border border-[#cad5e2] bg-surface py-2.5 pl-12 pr-4 text-sm text-ink placeholder:text-muted ${archivo.className}`}
                    />
                </label>
            </div>

            <div className="flex flex-row gap-7.5 mt-2">
                {/* left side */}
                <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-[20px] flex flex-col flex-1 px-6 py-8 gap-6">
                    <h6 className={`text-2xl font-semibold text-[#6A7282] ${archivo.className}`}>
                        Filters
                    </h6>
                    <fieldset className="flex flex-col">
                        <legend className={`mb-4 text-base font-bold ${archivo.className}`}>
                            Industry
                        </legend>
                        <div className="flex flex-col gap-4">
                            {institutionList.map((item) => {
                                return (
                                    <label key={item.id} className={`flex cursor-pointer items-center gap-2 text-sm text-subtle ${archivo.className}`}>
                                        <input
                                            type="checkbox"
                                            className="size-4 rounded-sm border-border text-brand focus:ring-brand"
                                            checked={institution.has(item.id)}
                                            onChange={() => {
                                                setInstitution((prev) => toggle(prev, item.id));
                                                setPage(1);
                                            }}
                                        />
                                        {item.label}
                                    </label>
                                );
                            })}
                        </div>
                    </fieldset>

                    <hr className="border-border" />

                    <fieldset className="flex flex-col">
                        <legend className={`mb-4 text-base font-bold ${archivo.className}`}>
                            Tags
                        </legend>
                        <div className="flex flex-col gap-4">
                            {tagsList.map((item) => {
                                return (
                                    <label key={item.id} className={`flex cursor-pointer items-center gap-2 text-sm text-subtle ${archivo.className}`}>
                                        <input
                                            type="checkbox"
                                            className="size-4 rounded-sm border-border text-brand focus:ring-brand"
                                            checked={tag.has(item.id)}
                                            onChange={() => {
                                                setTag((prev) => toggle(prev, item.id));
                                                setPage(1);
                                            }}
                                        />
                                        {item.label}
                                    </label>
                                );
                            })}
                        </div>
                    </fieldset>

                    <hr className="border-border" />

                    <div className="flex flex-col">
                        <legend className={`mb-4 text-base font-bold ${archivo.className}`}>
                            Order
                        </legend>
                        <div className="flex flex-row rounded-full w-full bg-[#E5E7EB]">
                            <button
                                type="button"
                                className={`flex-1 rounded-full px-2 py-2 ${sortDir === "asc" ? "bg-[#101920] text-[#FAFAFA]" : "text-subtle"}`}
                                onClick={() => {
                                    setSortDir("asc");
                                    setPage(1);
                                }}
                            >
                                Ascending
                            </button>
                            <button
                                type="button"
                                className={`flex-1 rounded-full px-2 py-2 ${sortDir === "desc" ? "bg-[#101920] text-[#FAFAFA]" : "text-subtle"}`}
                                onClick={() => {
                                    setSortDir("desc");
                                    setPage(1);
                                }}
                            >
                                Descending
                            </button>
                        </div>
                    </div>

                    <hr className="border-border" />

                    <button
                        type="button"
                        className={`flex w-full items-center flex-row justify-center gap-2 rounded-lg text-base text-subtle hover:bg-surface-muted ${archivo.className}`}
                        onClick={clearFilters}
                    >
                        Clear all filters
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_370_1246)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.75 3V1.5H10.25V3H5.75ZM4.25 3V1C4.25 0.734784 4.35536 0.48043 4.54289 0.292893C4.73043 0.105357 4.98478 0 5.25 0L10.75 0C11.0152 0 11.2696 0.105357 11.4571 0.292893C11.6446 0.48043 11.75 0.734784 11.75 1V3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75C15 3.94891 14.921 4.13968 14.7803 4.28033C14.6397 4.42098 14.4489 4.5 14.25 4.5H13.885L13.142 14.153C13.1034 14.6554 12.8767 15.1248 12.507 15.4673C12.1373 15.8097 11.6519 16 11.148 16H4.852C4.34808 16 3.86274 15.8097 3.49304 15.4673C3.12335 15.1248 2.89655 14.6554 2.858 14.153L2.115 4.5H1.75C1.55109 4.5 1.36032 4.42098 1.21967 4.28033C1.07902 4.13968 1 3.94891 1 3.75C1 3.55109 1.07902 3.36032 1.21967 3.21967C1.36032 3.07902 1.55109 3 1.75 3H4.25ZM3.62 4.5H12.38L11.646 14.038C11.6364 14.1636 11.5798 14.2809 11.4875 14.3666C11.3952 14.4522 11.2739 14.4999 11.148 14.5H4.852C4.72607 14.4999 4.60482 14.4522 4.5125 14.3666C4.42017 14.2809 4.36357 14.1636 4.354 14.038L3.62 4.5Z" fill="#6A7282" />
                            </g>
                            <defs>
                                <clipPath id="clip0_370_1246">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                </div>

                {/* right side */}
                <div className="flex flex-col items-end flex-4 gap-6">
                    <p className={`text-sm text-subtle ${archivo.className}`}>
                        Result: {filtered.length} match{filtered.length === 1 ? "" : "es"}
                    </p>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {slice.map((item) => {
                            return (
                                <ClassesCard
                                    title={item.title}
                                    excerpt={item.excerpt}
                                    tags={item.tags}
                                    level={item.level}
                                    image={item.image}
                                    sortKey={item.sortKey}
                                    venue={item.venue}
                                    categories={item.categories}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}