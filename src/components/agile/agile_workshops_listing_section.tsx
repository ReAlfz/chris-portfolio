"use client";

import { useEffect, useMemo, useState } from "react";
import type { StaticImageData } from "next/image";
import { Archivo } from "next/font/google";
import WorkshopCard from "./workshop_card";
import workshopThumb from "../../../public/images/portfolio/agile_workshop.png";

const archivo = Archivo({
  subsets: ["latin"],
});

type Industry = "startups" | "enterprise" | "tech" | "non-tech" | "educators";
type Place = "on-site" | "online";
type Level = "beginner" | "advance";

type Workshop = {
  title: string;
  excerpt: string;
  venue: string;
  dateLabel: string;
  tags: string[];
  image: StaticImageData;
  featured?: boolean;
  industry: Industry[];
  place: Place[];
  level: Level;
  sortKey: { name: string; date: number };
};

const RAW: Workshop[] = [
  {
    title: "Mastering Agile Mindset for Business",
    excerpt:
      "This workshop helps professionals shift from traditional ways of working to an adaptive, value-driven approach. Participants will explore Agile principles, real-world applications, and strategies to...",
    venue: "University of Manitoba",
    dateLabel: "March 15, 2024",
    tags: ["Beginner", "Fundamentals", "On-site"],
    image: workshopThumb,
    featured: true,
    industry: ["startups", "tech"],
    place: ["on-site"],
    level: "beginner",
    sortKey: { name: "Mastering Agile Mindset for Business", date: Date.parse("2024-03-15") },
  },
  {
    title: "Practical Scrum & Kanban for Team",
    excerpt: "Hands-on facilitation for teams adopting Scrum and Kanban side by side.",
    venue: "The University of Winnipeg",
    dateLabel: "April 5, 2025",
    tags: ["Startups", "Beginner", "On-site"],
    image: workshopThumb,
    industry: ["startups"],
    place: ["on-site"],
    level: "beginner",
    sortKey: { name: "Practical Scrum & Kanban for Team", date: Date.parse("2025-04-05") },
  },
  {
    title: "Agile Leadership: Driving Change",
    excerpt: "Leadership patterns for scaling agility across departments.",
    venue: "McMaster University",
    dateLabel: "April 20, 2024",
    tags: ["Advance", "Enterprise", "On-site"],
    image: workshopThumb,
    industry: ["enterprise", "tech"],
    place: ["on-site"],
    level: "advance",
    sortKey: { name: "Agile Leadership: Driving Change", date: Date.parse("2024-04-20") },
  },
  {
    title: "Remote Agile Rituals That Stick",
    excerpt: "Designing effective online ceremonies for distributed teams.",
    venue: "Online",
    dateLabel: "June 2, 2024",
    tags: ["Beginner", "Online"],
    image: workshopThumb,
    industry: ["tech", "non-tech"],
    place: ["online"],
    level: "beginner",
    sortKey: { name: "Remote Agile Rituals That Stick", date: Date.parse("2024-06-02") },
  },
  {
    title: "Value Streams for Educators",
    excerpt: "Applying flow thinking in academic and training environments.",
    venue: "University of Manitoba",
    dateLabel: "September 12, 2024",
    tags: ["Educators", "Fundamentals", "On-site"],
    image: workshopThumb,
    industry: ["educators"],
    place: ["on-site"],
    level: "beginner",
    sortKey: { name: "Value Streams for Educators", date: Date.parse("2024-09-12") },
  },
  {
    title: "Enterprise Agile Governance",
    excerpt: "Policies and metrics that support autonomy at scale.",
    venue: "Online",
    dateLabel: "October 3, 2024",
    tags: ["Advance", "Enterprise", "Online"],
    image: workshopThumb,
    industry: ["enterprise"],
    place: ["online"],
    level: "advance",
    sortKey: { name: "Enterprise Agile Governance", date: Date.parse("2024-10-03") },
  },
  {
    title: "Non-Tech Team Kanban",
    excerpt: "Visualizing work for HR, marketing, and operations teams.",
    venue: "The University of Winnipeg",
    dateLabel: "November 18, 2024",
    tags: ["Non-Tech", "Beginner", "On-site"],
    image: workshopThumb,
    industry: ["non-tech"],
    place: ["on-site"],
    level: "beginner",
    sortKey: { name: "Non-Tech Team Kanban", date: Date.parse("2024-11-18") },
  },
  {
    title: "Metrics that Matter",
    excerpt: "Outcome-oriented measurement without gaming the numbers.",
    venue: "McMaster University",
    dateLabel: "January 22, 2025",
    tags: ["Advance", "Tech", "On-site"],
    image: workshopThumb,
    industry: ["tech"],
    place: ["on-site"],
    level: "advance",
    sortKey: { name: "Metrics that Matter", date: Date.parse("2025-01-22") },
  },
  {
    title: "Facilitation Skills for Scrum Masters",
    excerpt: "Deep practice in neutral facilitation and team coaching.",
    venue: "Online",
    dateLabel: "February 8, 2025",
    tags: ["Beginner", "Online"],
    image: workshopThumb,
    industry: ["startups", "educators"],
    place: ["online"],
    level: "beginner",
    sortKey: { name: "Facilitation Skills for Scrum Masters", date: Date.parse("2025-02-08") },
  },
];

const PAGE_SIZE = 9;

const INDUSTRY_OPTIONS: { id: Industry; label: string }[] = [
  { id: "startups", label: "Startups" },
  { id: "enterprise", label: "Enterprise" },
  { id: "tech", label: "Tech" },
  { id: "non-tech", label: "Non-Tech Teams" },
  { id: "educators", label: "Educators" },
];

export default function AgileWorkshopsListingSection() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<Set<Industry>>(new Set(["startups"]));
  const [place, setPlace] = useState<Set<Place>>(new Set(["on-site"]));
  const [level, setLevel] = useState<Set<Level>>(new Set(["beginner"]));
  const [sortBy, setSortBy] = useState<"name" | "date">("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);

  const toggle = <T extends string>(set: Set<T>, id: T) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = RAW.filter((w) => {
      if (industry.size && !w.industry.some((i) => industry.has(i))) return false;
      if (place.size && !w.place.some((p) => place.has(p))) return false;
      if (level.size && !level.has(w.level)) return false;
      if (q) {
        const blob = `${w.title} ${w.excerpt} ${w.venue} ${w.tags.join(" ")}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
    list = [...list].sort((a, b) => {
      const av = sortBy === "name" ? a.sortKey.name : a.sortKey.date;
      const bv = sortBy === "name" ? b.sortKey.name : b.sortKey.date;
      const cmp = sortBy === "name" ? String(av).localeCompare(String(bv)) : Number(av) - Number(bv);
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [query, industry, place, level, sortBy, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const pageSafe = Math.min(page, totalPages);
  const slice = filtered.slice((pageSafe - 1) * PAGE_SIZE, pageSafe * PAGE_SIZE);

  const clearFilters = () => {
    setIndustry(new Set(INDUSTRY_OPTIONS.map((o) => o.id)));
    setPlace(new Set(["on-site", "online"]));
    setLevel(new Set(["beginner", "advance"]));
    setQuery("");
    setPage(1);
  };

  return (
    <section className="bg-surface-muted px-36 py-32 flex flex-col gap-3" data-name="Content">
      {/* header */}
      <div className="flex flex-row items-center gap-13">
        <h2 className={`text-display font-semibold leading-[1.2] text-ink ${archivo.className}`}>
          Workshops
        </h2>
        <label className="relative block w-full">
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

      {/* result count */}
      <div className="flex flex-row justify-between">
        <p className={`text-xl font-semibold text-ink ${archivo.className}`}>
          Filters
        </p>
        <p className={`text-sm text-subtle ${archivo.className}`}>
          Result: {filtered.length} match{filtered.length === 1 ? "" : "es"}
        </p>
      </div>

      <div className="flex flex-row gap-10">
        {/* left side */}
        <aside className="w-full shrink-0 lg:w-73.75">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <fieldset className="space-y-4">
              <legend className={`mb-2 text-base font-bold ${archivo.className}`}>
                Industry
              </legend>
              {INDUSTRY_OPTIONS.map((o) => (
                <label key={o.id} className={`flex cursor-pointer items-center gap-2 text-sm text-subtle ${archivo.className}`}>
                  <input
                    type="checkbox"
                    className="size-4 rounded-sm border-border text-brand focus:ring-brand"
                    checked={industry.has(o.id)}
                    onChange={() => {
                      setIndustry((s) => toggle(s, o.id));
                      setPage(1);
                    }}
                  />
                  {o.label}
                </label>
              ))}
            </fieldset>

            <hr className="my-6 border-border" />

            <fieldset className="space-y-4">
              <legend className={`mb-2 text-base font-bold ${archivo.className}`}>
                Place
              </legend>
              {(
                [
                  ["on-site", "On-site"],
                  ["online", "Online"],
                ] as const
              ).map(([id, label]) => (
                <label key={id} className={`flex cursor-pointer items-center gap-2 text-sm text-subtle ${archivo.className}`}>
                  <input
                    type="checkbox"
                    className="size-4 rounded border-border text-brand focus:ring-brand"
                    checked={place.has(id)}
                    onChange={() => {
                      setPlace((s) => toggle(s, id));
                      setPage(1);
                    }}
                  />
                  {label}
                </label>
              ))}
            </fieldset>

            <hr className="my-6 border-border" />

            <fieldset className="space-y-4">
              <legend className={`mb-2 text-base font-bold ${archivo.className}`}>
                Level
              </legend>
              {(
                [
                  ["beginner", "Beginner-friendly"],
                  ["advance", "Advance Practitioner"],
                ] as const
              ).map(([id, label]) => (
                <label key={id} className={`flex cursor-pointer items-center gap-2 text-sm text-subtle ${archivo.className}`}>
                  <input
                    type="checkbox"
                    className="size-4 rounded border-border text-brand focus:ring-brand"
                    checked={level.has(id)}
                    onChange={() => {
                      setLevel((s) => toggle(s, id));
                      setPage(1);
                    }}
                  />
                  {label}
                </label>
              ))}
            </fieldset>

            <hr className="my-6 border-border" />

            <div>
              <p className={`mb-3 text-sm font-medium text-heading ${archivo.className}`}>Order</p>
              <div className="grid grid-cols-1 gap-4 text-center text-sm">
                <div className="flex flex-row rounded-full w-full bg-[#E5E7EB]">
                  <button
                    type="button"
                    className={`flex-1 rounded-full px-2 py-2 ${sortBy === "name" ? "bg-[#101920] text-[#FAFAFA]" : "text-subtle"}`}
                    onClick={() => {
                      setSortBy("name");
                      setPage(1);
                    }}
                  >
                    Name
                  </button>
                  <button
                    type="button"
                    className={`flex-1 rounded-full px-2 py-2 ${sortBy === "date" ? "bg-[#101920] text-[#FAFAFA]" : "text-subtle"}`}
                    onClick={() => {
                      setSortBy("date");
                      setPage(1);
                    }}
                  >
                    Date
                  </button>
                </div>
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
            </div>

            <hr className="my-6 border-border" />

            <button
              type="button"
              className={`mt-6 flex w-full items-center flex-row justify-center gap-2 rounded-lg text-base text-subtle hover:bg-surface-muted ${archivo.className}`}
              onClick={clearFilters}
            >
              Clear all filters
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_370_1246)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 3V1.5H10.25V3H5.75ZM4.25 3V1C4.25 0.734784 4.35536 0.48043 4.54289 0.292893C4.73043 0.105357 4.98478 0 5.25 0L10.75 0C11.0152 0 11.2696 0.105357 11.4571 0.292893C11.6446 0.48043 11.75 0.734784 11.75 1V3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75C15 3.94891 14.921 4.13968 14.7803 4.28033C14.6397 4.42098 14.4489 4.5 14.25 4.5H13.885L13.142 14.153C13.1034 14.6554 12.8767 15.1248 12.507 15.4673C12.1373 15.8097 11.6519 16 11.148 16H4.852C4.34808 16 3.86274 15.8097 3.49304 15.4673C3.12335 15.1248 2.89655 14.6554 2.858 14.153L2.115 4.5H1.75C1.55109 4.5 1.36032 4.42098 1.21967 4.28033C1.07902 4.13968 1 3.94891 1 3.75C1 3.55109 1.07902 3.36032 1.21967 3.21967C1.36032 3.07902 1.55109 3 1.75 3H4.25ZM3.62 4.5H12.38L11.646 14.038C11.6364 14.1636 11.5798 14.2809 11.4875 14.3666C11.3952 14.4522 11.2739 14.4999 11.148 14.5H4.852C4.72607 14.4999 4.60482 14.4522 4.5125 14.3666C4.42017 14.2809 4.36357 14.1636 4.354 14.038L3.62 4.5Z" fill="#6A7282" />
                </g>
                <defs>
                  <clipPath id="clip0_370_1246">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {slice.map((w) => (
              <WorkshopCard
                key={w.title + w.dateLabel}
                title={w.title}
                excerpt={w.excerpt}
                venue={w.venue}
                dateLabel={w.dateLabel}
                tags={w.tags}
                image={w.image}
                featured={w.featured}
              />
            ))}
          </div>

          {slice.length === 0 ? (
            <p className={`mt-12 text-center text-subtle ${archivo.className}`}>No workshops match your filters.</p>
          ) : null}

          {totalPages > 1 ? (
            <nav
              className="mt-12 flex items-center justify-center gap-3"
              aria-label="Pagination"
            >
              <button
                type="button"
                className="rounded-full p-2 text-ink hover:bg-surface"
                disabled={pageSafe <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="rotate-180">
                  <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`flex size-8 items-center justify-center rounded-full text-sm font-medium ${n === pageSafe ? "bg-brand text-on-brand" : "bg-surface text-ink hover:bg-surface-soft"}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                className="rounded-full p-2 text-ink hover:bg-surface"
                disabled={pageSafe >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                aria-label="Next page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </nav>
          ) : null}
        </div>
      </div>
    </section>
  );
}
