"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import type { TableRow, TimelineEntry } from "./ten_k_data";
import { TABLE_ROWS, TIMELINE_ENTRIES } from "./ten_k_data";

const archivo = Archivo({ subsets: ["latin"] });

type View = "timeline" | "table";

function IconTimeline({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 15l4-4 3 3 5-6 4 3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconTable({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5h16v14H4V5zm0 5h16M9 5v14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStopwatch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 10v4l2 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M9 3h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

function SortArrowsPair({ className }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col text-[9px] leading-[0.65] text-muted ${className ?? ""}`} aria-hidden>
      <span>▲</span>
      <span>▼</span>
    </span>
  );
}

function SortArrowDown({ className }: { className?: string }) {
  return (
    <span className={`text-[10px] text-muted ${className ?? ""}`} aria-hidden>
      ▼
    </span>
  );
}

function ChevronExpand({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TimeBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
      <IconStopwatch className="size-3.5 shrink-0" />
      {children}
    </span>
  );
}

function RunningJourneyTable() {
  const [expandedId, setExpandedId] = useState<string | null>(TABLE_ROWS[0]?.id ?? null);

  const toggle = (row: TableRow) => {
    if (!row.detail) return;
    setExpandedId((prev) => (prev === row.id ? null : row.id));
  };

  return (
    <div className="mt-12">
      <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
        <table className={`w-full min-w-[880px] border-collapse text-left text-sm ${archivo.className}`}>
          <thead>
            <tr className="border-b border-border bg-surface-muted/80">
              <th className="px-4 py-3.5 text-xs font-medium text-subtle">
                <span className="inline-flex items-center">
                  Place
                  <SortArrowsPair className="ml-1" />
                </span>
              </th>
              <th className="px-4 py-3.5 text-xs font-medium text-subtle">Event Name</th>
              <th className="px-4 py-3.5 text-xs font-medium text-subtle">
                <span className="inline-flex items-center">
                  Date
                  <SortArrowDown className="ml-1" />
                </span>
              </th>
              <th className="px-4 py-3.5 text-xs font-medium text-subtle">
                <span className="inline-flex items-center">
                  Chip Time
                  <SortArrowsPair className="ml-1" />
                </span>
              </th>
              <th className="px-4 py-3.5 text-xs font-medium text-subtle">
                <span className="inline-flex items-center">
                  Official Time
                  <SortArrowsPair className="ml-1" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row) => {
              const isOpen = expandedId === row.id;
              return (
                <tr
                  key={row.id}
                  className={`border-b border-border-card last:border-b-0 ${
                    row.detail ? "cursor-pointer hover:bg-surface-muted/60" : ""
                  } ${isOpen ? "bg-surface-tint/50" : ""}`}
                  onClick={row.detail ? () => toggle(row) : undefined}
                  onKeyDown={
                    row.detail
                      ? (ev) => {
                          if (ev.key === "Enter" || ev.key === " ") {
                            ev.preventDefault();
                            toggle(row);
                          }
                        }
                      : undefined
                  }
                  tabIndex={row.detail ? 0 : undefined}
                  role={row.detail ? "button" : undefined}
                  aria-expanded={row.detail ? isOpen : undefined}
                >
                  <td className="align-top px-4 py-4">
                    <p className="text-lg font-bold leading-tight text-heading">{row.placeRank}</p>
                    <p className="mt-0.5 text-xs text-muted">/ {row.placeOf}</p>
                  </td>
                  <td className="max-w-md align-top px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-heading">{row.eventName}</p>
                        <div className="mt-2 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
                          <IconPin className="size-3.5 shrink-0" />
                          {row.locationPill}
                        </div>
                        {row.detail && isOpen ? (
                          <p className="mt-3 text-sm leading-relaxed text-subtle">{row.detail}</p>
                        ) : null}
                      </div>
                      {row.detail ? (
                        <span className="pointer-events-none shrink-0 pt-0.5">
                          <ChevronExpand expanded={isOpen} />
                        </span>
                      ) : null}
                    </div>
                  </td>
                  <td className="whitespace-nowrap align-top px-4 py-4 text-subtle">{row.dateLabel}</td>
                  <td className="align-top px-4 py-4">
                    <div className="flex flex-col gap-1.5">
                      <TimeBadge>{row.chipTime}</TimeBadge>
                      <span className="text-xs font-medium text-emerald-600">{row.chipDelta}</span>
                    </div>
                  </td>
                  <td className="align-top px-4 py-4">
                    <TimeBadge>{row.officialTime}</TimeBadge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex w-full items-center gap-0">
        <div className="h-px min-h-px flex-1 bg-border" aria-hidden />
        <div className="h-px w-16 shrink-0 border-t-2 border-dashed border-muted md:w-28" aria-hidden />
        <p className={`ml-4 shrink-0 text-2xl font-semibold text-heading md:text-3xl ${archivo.className}`}>
          What next?
        </p>
      </div>
    </div>
  );
}

function TimelineTextCard({ entry, align }: { entry: TimelineEntry; align: "left" | "right" }) {
  const alignClass = align === "left" ? "md:text-left" : "md:text-right";
  const flexRow = align === "left" ? "md:flex-row" : "md:flex-row-reverse";
  const justifyMeta = align === "right" ? "md:justify-end" : "md:justify-start";

  return (
    <div
      className={`group relative rounded-2xl border border-transparent p-1 transition-colors md:p-5 ${alignClass} hover:border-border hover:bg-slate-100`}
    >
      <h3 className={`text-xl font-semibold text-heading ${archivo.className}`}>{entry.title}</h3>
      <p className={`mt-3 text-base leading-relaxed text-subtle ${archivo.className}`}>{entry.description}</p>
      <div
        className={`mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted ${flexRow} ${justifyMeta}`}
      >
        <span className={`inline-flex items-center gap-1.5 ${archivo.className}`}>
          <IconStopwatch className="size-[18px] shrink-0 text-heading" />
          <span className="font-medium text-heading">{entry.time}</span>
        </span>
        <span className={`inline-flex items-center gap-1.5 ${archivo.className}`}>
          <IconPin className="size-[18px] shrink-0 text-heading" />
          {entry.location}
        </span>
      </div>
    </div>
  );
}

function TimelineRow({ entry, isFirst, isLast }: { entry: TimelineEntry; isFirst: boolean; isLast: boolean }) {
  const textLeft = entry.side === "left";

  return (
    <li className="relative">
      <p className={`mb-10 text-center text-3xl font-semibold text-ink md:mb-14 md:text-[40px] ${archivo.className}`}>
        {entry.year}
      </p>

      {/* Mobile: stacked with left rail */}
      <div className="relative border-l-2 border-border pb-2 pl-8 md:hidden">
        <div className="absolute -left-[9px] top-6 size-4 rounded-full border-2 border-heading bg-canvas ring-2 ring-surface-muted" aria-hidden />
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl border border-border-card">
          <Image src={entry.image} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <TimelineTextCard entry={entry} align="left" />
      </div>

      {/* Desktop: center spine + alternating columns */}
      <div className="hidden gap-0 md:grid md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-center md:gap-x-0">
        {textLeft ? (
          <>
            <div className="flex justify-end pr-6">
              <div className="max-w-md">
                <TimelineTextCard entry={entry} align="right" />
              </div>
            </div>
            <div className="relative flex w-12 flex-col items-center justify-center self-stretch">
              <div className={`w-px flex-1 bg-border ${isFirst ? "min-h-0 opacity-0" : "min-h-12"}`} aria-hidden />
              <div
                className="z-10 size-4 shrink-0 rounded-full border-2 border-heading bg-canvas ring-4 ring-surface-muted"
                aria-hidden
              />
              <div className={`w-px flex-1 bg-border ${isLast ? "min-h-12" : "min-h-12"}`} aria-hidden />
            </div>
            <div className="flex justify-start pl-6">
              <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-xl border border-border-card">
                <Image src={entry.image} alt="" fill className="object-cover" sizes="400px" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end pr-6">
              <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-xl border border-border-card">
                <Image src={entry.image} alt="" fill className="object-cover" sizes="400px" />
              </div>
            </div>
            <div className="relative flex w-12 flex-col items-center justify-center self-stretch">
              <div className={`w-px flex-1 bg-border ${isFirst ? "min-h-0 opacity-0" : "min-h-12"}`} aria-hidden />
              <div
                className="z-10 size-4 shrink-0 rounded-full border-2 border-heading bg-canvas ring-4 ring-surface-muted"
                aria-hidden
              />
              <div className="w-px flex-1 bg-border min-h-12" aria-hidden />
            </div>
            <div className="flex justify-start pl-6">
              <div className="max-w-md">
                <TimelineTextCard entry={entry} align="left" />
              </div>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default function TenKJourneySection() {
  const [view, setView] = useState<View>("timeline");

  return (
    <section className="bg-surface px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className={`text-display font-semibold text-ink ${archivo.className}`}>My Running Journey</h2>
          <div
            className={`inline-flex rounded-full border border-border bg-surface p-1 ${archivo.className}`}
            role="tablist"
            aria-label="Journey view"
          >
            <button
              type="button"
              role="tab"
              aria-selected={view === "timeline"}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                view === "timeline" ? "bg-ink text-on-ink" : "text-subtle hover:text-heading"
              }`}
              onClick={() => setView("timeline")}
            >
              <IconTimeline className={view === "timeline" ? "text-on-ink" : "text-muted"} />
              Timeline
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === "table"}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                view === "table" ? "bg-ink text-on-ink" : "text-subtle hover:text-heading"
              }`}
              onClick={() => setView("table")}
            >
              <IconTable className={view === "table" ? "text-on-ink" : "text-muted"} />
              Table
            </button>
          </div>
        </div>

        {view === "timeline" ? (
          <div className="relative mt-16 md:mt-20">
            <ul className="space-y-16 md:space-y-24">
              {TIMELINE_ENTRIES.map((e, idx) => (
                <TimelineRow
                  key={`${e.year}-${e.title}`}
                  entry={e}
                  isFirst={idx === 0}
                  isLast={idx === TIMELINE_ENTRIES.length - 1}
                />
              ))}
            </ul>
            <div className="mx-auto mt-16 flex max-w-md flex-col items-center md:mt-24">
              <div className="h-14 w-px border-l-2 border-dashed border-muted" aria-hidden />
              <p className={`mt-4 text-center text-xl font-semibold text-heading ${archivo.className}`}>What next?</p>
            </div>
          </div>
        ) : (
          <RunningJourneyTable />
        )}
      </div>
    </section>
  );
}
