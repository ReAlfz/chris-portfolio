'use client'

import { useState } from "react"
import type { JourneyData } from "../10k-runs/ten_k_data";
import { RUN_JOURNEY } from "../10k-runs/ten_k_data";
import Image, { StaticImageData } from "next/image";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function RunJourneySection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [expanded, setExpanded] = useState<string | null>(RUN_JOURNEY[0].id);

    function RunCard({ run, side }: { run: (typeof RUN_JOURNEY)[0], side: "left" | "right" }) {
        const CARD_BG = "#EDF2F8";
        const arrowPointsRight = side === "left";

        return (
            <div className="relative group w-full">
                {/* Hover background */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"
                    style={{ backgroundColor: CARD_BG }}
                />

                {/* Arrow — points toward the center line */}
                {arrowPointsRight ? (
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                            <path d="M0 0 L14 12 L0 24 Z" fill={CARD_BG} />
                        </svg>
                    </div>
                ) : (
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                            <path d="M14 0 L0 12 L14 24 Z" fill={CARD_BG} />
                        </svg>
                    </div>
                )}

                {/* Card content */}
                <div className="relative z-10 px-8.5 py-9">
                    <h3 className="font-semibold text-gray-900 mb-1 text-base">{run.eventName}</h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{run.detail}</p>
                    <div className={`flex flex-row gap-2 ${archivo.className}`}>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F3F4F6] group-hover:bg-white rounded-lg transition-colors duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 20C10.1435 20 8.363 19.2625 7.05025 17.9497C5.7375 16.637 5 14.8565 5 13C5 11.1435 5.7375 9.363 7.05025 8.05025C8.363 6.7375 10.1435 6 12 6C13.8565 6 15.637 6.7375 16.9497 8.05025C18.2625 9.363 19 11.1435 19 13C19 14.8565 18.2625 16.637 16.9497 17.9497C15.637 19.2625 13.8565 20 12 20ZM19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C9.613 4 7.324 4.948 5.636 6.636C3.948 8.324 3 10.613 3 13C3 15.387 3.948 17.676 5.636 19.364C7.324 21.052 9.613 22 12 22C17 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM11 14H13V8H11M15 1H9V3H15V1Z"
                                    className="fill-[#62748E] group-hover:fill-[#101920] transition-colors duration-300"
                                />
                            </svg>
                            <span className="text-sm text-[#62748E] group-hover:text-[#101920] transition-colors duration-300">
                                {run.officialTime}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F3F4F6] group-hover:bg-white rounded-lg transition-colors duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2.25C8.273 2.25 5.25 5.128 5.25 8.672C5.25 12.75 9.75 19.213 11.402 21.445C11.471 21.539 11.561 21.616 11.665 21.669C11.769 21.722 11.884 21.749 12 21.749C12.117 21.749 12.231 21.722 12.335 21.669C12.439 21.616 12.529 21.539 12.598 21.445C14.25 19.214 18.75 12.753 18.75 8.672C18.75 5.128 15.727 2.25 12 2.25Z"
                                    stroke="#62748E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                    className="stroke-[#62748E] group-hover:stroke-[#101920] transition-colors duration-300"
                                />
                                <path
                                    d="M12 11.25C13.243 11.25 14.25 10.243 14.25 9C14.25 7.757 13.243 6.75 12 6.75C10.757 6.75 9.75 7.757 9.75 9C9.75 10.243 10.757 11.25 12 11.25Z"
                                    stroke="#62748E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                    className="stroke-[#62748E] group-hover:stroke-[#101920] transition-colors duration-300"
                                />
                            </svg>
                            <span className="text-sm text-[#62748E] group-hover:text-[#101920] transition-colors duration-300">
                                {run.locationPill}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function RunImage({ src, alt, side }: { src?: StaticImageData; alt: string, side: "left" | "right" }) {
        const arrowPointsRight = side === "left";
        return (
            <div className={`${side ? 'justify-start' : 'justify-end'} flex w-full aspect-video max-h-64 overflow-hidden`}>
                {
                    src
                        ? <Image
                            src={src}
                            alt={alt}
                            className="w-130 rounded-[10px] h-full object-cover"
                        />
                        : <div />
                }
            </div>
        );
    }

    const timeLineView = (
        <div className="flex flex-col gap-3.5 items-center">
            <div className="relative">
                {/* Vertical center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#CAD5E2] -translate-x-1/2 rounded-full" />

                <div className="space-y-16">
                    {RUN_JOURNEY.map((run, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={run.id}>
                                {/* Year label */}
                                <div className="relative flex justify-center mb-9">
                                    <h4 className="bg-[#F9FAFB] px-3 z-10 py-4 text-[40px] font-semibold text-[#101920] relative">
                                        {run.year}
                                    </h4>
                                </div>

                                {/* Row: text left + image right, or image left + text right */}
                                <div className="relative grid grid-cols-2 gap-24 items-center justify-center px-16">
                                    {/* Dot on the center line */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F9FAFB] border-4 border-slate-300 z-10" />

                                    {isEven ? (
                                        <>
                                            {/* Text — left */}
                                            <RunCard
                                                run={run}
                                                side={'left'} />
                                            {/* Image — right */}
                                            <RunImage
                                                src={run.image}
                                                alt={run.eventName}
                                                side={'left'}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            {/* Image — left */}
                                            <RunImage
                                                src={run.image}
                                                alt={run.eventName}
                                                side={'right'}
                                            />
                                            {/* Text — right */}
                                            <RunCard
                                                run={run}
                                                side={'right'} />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <svg width="4" height="94" viewBox="0 0 4 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="10" rx="2" fill="#CAD5E2" />
                <rect y="21" width="4" height="10" rx="2" fill="#CAD5E2" />
                <rect y="42" width="4" height="10" rx="2" fill="#CAD5E2" />
                <rect y="63" width="4" height="10" rx="2" fill="#CAD5E2" />
                <rect y="84" width="4" height="10" rx="2" fill="#CAD5E2" />
            </svg>

            <h2 className={`text-7xl font-semibold text-[#101920] ${archivo.className}`}>
                What next?
            </h2>
        </div>
    );


    // ── icons ──────────────────────────────────────────────────────────────────────
    function ClockIcon({ className }: { className?: string }) {
        return (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={className}>
                <path d="M12 20C10.1435 20 8.363 19.2625 7.05 17.9497C5.7375 16.637 5 14.8565 5 13C5 11.1435 5.7375 9.363 7.05 8.05C8.363 6.7375 10.1435 6 12 6C13.8565 6 15.637 6.7375 16.9497 8.05C18.2625 9.363 19 11.1435 19 13C19 14.8565 18.2625 16.637 16.9497 17.9497C15.637 19.2625 13.8565 20 12 20ZM19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C9.613 4 7.324 4.948 5.636 6.636C3.948 8.324 3 10.613 3 13C3 15.387 3.948 17.676 5.636 19.364C7.324 21.052 9.613 22 12 22C17 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM11 14H13V8H11M15 1H9V3H15V1Z"
                    fill="currentColor" />
            </svg>
        );
    }

    function PinIcon({ className }: { className?: string }) {
        return (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className={className}>
                <path d="M12 2.25C8.273 2.25 5.25 5.128 5.25 8.672C5.25 12.75 9.75 19.213 11.402 21.445C11.471 21.539 11.561 21.616 11.665 21.669C11.769 21.722 11.884 21.749 12 21.749C12.117 21.749 12.231 21.722 12.335 21.669C12.439 21.616 12.529 21.539 12.598 21.445C14.25 19.214 18.75 12.753 18.75 8.672C18.75 5.128 15.727 2.25 12 2.25Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11.25C13.243 11.25 14.25 10.243 14.25 9C14.25 7.757 13.243 6.75 12 6.75C10.757 6.75 9.75 7.757 9.75 9C9.75 10.243 10.757 11.25 12 11.25Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    function SortIcon() {
        return (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path d="M7 15l5 5 5-5M7 9l5-5 5 5" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    function ChevronIcon({ open }: { open: boolean }) {
        return (
            <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
                <path d={open ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    // ── time badge ─────────────────────────────────────────────────────────────────
    function TimeBadge({ time }: { time: string }) {
        return (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EEF2FF] text-[#4F6ACD] rounded-lg text-sm font-medium whitespace-nowrap">
                <ClockIcon />
                {time}
            </span>
        );
    }

    const tableLineView = (
        <div className="flex flex-col gap-16">
            <div className="w-full border border-gray-200 rounded-2xl overflow-hidden bg-white">
                {/* Header */}
                <div className="grid gap-4 px-6 py-3 border-b border-gray-200 bg-white text-sm text-gray-500 font-normal"
                    style={{ gridTemplateColumns: "80px 1fr 160px 180px 180px" }}>
                    <div className="flex items-center gap-1">Place <SortIcon /></div>
                    <div className="flex items-center gap-1">Event Name</div>
                    <div className="flex items-center gap-1">Date <ChevronIcon open={false} /></div>
                    <div className="flex items-center gap-1">Chip Time <SortIcon /></div>
                    <div className="flex items-center gap-1">Official Time <SortIcon /></div>
                </div>

                {/* Rows */}
                {RUN_JOURNEY.map((run, i) => {
                    const isOpen = expanded === run.id;
                    const isLast = i === RUN_JOURNEY.length - 1;

                    return (
                        <div key={run.id} className={`${!isLast ? "border-b border-gray-100" : ""}`}>
                            <button
                                onClick={() => setExpanded(isOpen ? null : run.id)}
                                className="w-full grid gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-150"
                                style={{ gridTemplateColumns: "80px 1fr 160px 180px 180px" }}
                            >
                                {/* Place */}
                                <div className="flex flex-col justify-start pt-0.5">
                                    <span className="text-base font-semibold text-gray-900">{run.placeRank}</span>
                                    <span className="text-sm text-gray-400">/{run.placeOf}</span>
                                </div>

                                {/* Event Name + chevron */}
                                <div className="flex items-start justify-between gap-2 min-w-0">
                                    <div className="flex flex-col gap-1.5 min-w-0">
                                        <span className="text-base font-medium text-gray-900 leading-snug">{run.eventName}</span>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full w-fit">
                                            <PinIcon />
                                            {run.locationPill}
                                        </span>
                                        {/* Expanded detail */}
                                        {isOpen && (
                                            <p className="text-sm text-gray-500 mt-1 leading-relaxed pr-4">
                                                {run.detail}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-1 shrink-0">
                                        <ChevronIcon open={isOpen} />
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="text-sm text-gray-700 pt-0.5">{run.dateLabel}</div>

                                {/* Chip Time */}
                                <div className="flex flex-col gap-1 items-start pt-0.5">
                                    <TimeBadge time={run.chipTime} />
                                    <span className="text-xs text-emerald-600 font-medium pl-1">{run.chipDelta}</span>
                                </div>

                                {/* Official Time */}
                                <div className="flex flex-col gap-1 items-start pt-0.5">
                                    <TimeBadge time={run.officialTime} />
                                </div>
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-row gap-6.25 items-center">
                <div className="flex-1 h-1.25 bg-[#CAD5E2] rounded-full" />

                <svg width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="94" y="4.10887e-06" width="4" height="10" rx="2" transform="rotate(90 94 4.10887e-06)" fill="#CAD5E2" />
                    <rect x="73" y="4.10887e-06" width="4" height="10" rx="2" transform="rotate(90 73 4.10887e-06)" fill="#CAD5E2" />
                    <rect x="52" y="4.10887e-06" width="4" height="10" rx="2" transform="rotate(90 52 4.10887e-06)" fill="#CAD5E2" />
                    <rect x="31" y="4.10887e-06" width="4" height="10" rx="2" transform="rotate(90 31 4.10887e-06)" fill="#CAD5E2" />
                    <rect x="10" y="4.10887e-06" width="4" height="10" rx="2" transform="rotate(90 10 4.10887e-06)" fill="#CAD5E2" />
                </svg>
                <h2 className={`text-7xl font-semibold text-[#101920] ${archivo.className}`}>
                    What next?
                </h2>
            </div>
        </div>
    );

    return (
        <section className={`bg-[#F9FAFB] flex gap-21 flex-col px-36.25 pt-12 ${currentIndex === 0 ? 'pb-20' : 'pb-60'}`}>
            <div className="flex flex-row justify-between">
                <h3 className={`text-display font-semibold text-black ${archivo.className}`}>
                    My Running Journey
                </h3>
                <div className="flex flex-row bg-[#E5E7EB] rounded-full h-10">
                    <button
                        onClick={() => setCurrentIndex(0)}
                        className={`flex flex-1 px-3.5 py-2 flex-row rounded-full ${currentIndex === 0 ? 'bg-[#101920]' : ''} gap-1 items-center transition-all duration-300`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 17.5C2.578 17.5 2.22267 17.3553 1.934 17.066C1.64467 16.7773 1.5 16.422 1.5 16C1.5 15.578 1.64467 15.2227 1.934 14.934C2.22333 14.6453 2.57867 14.5007 3 14.5C3.126 14.5 3.24233 14.5097 3.349 14.529C3.45567 14.5483 3.55733 14.594 3.654 14.666L8.666 9.654C8.594 9.55733 8.54833 9.45567 8.529 9.349C8.50967 9.24233 8.5 9.126 8.5 9C8.5 8.578 8.64467 8.22267 8.934 7.934C9.22267 7.64467 9.578 7.5 10 7.5C10.422 7.5 10.7773 7.64467 11.066 7.934C11.3547 8.22333 11.4993 8.57867 11.5 9C11.5 9.08467 11.4577 9.29 11.373 9.616L14.385 12.627C14.481 12.5803 14.576 12.5477 14.67 12.529C14.7647 12.5097 14.8747 12.5 15 12.5C15.1253 12.5 15.2387 12.5097 15.34 12.529C15.44 12.5483 15.5317 12.594 15.615 12.666L19.665 8.616C19.5937 8.53267 19.5483 8.44067 19.529 8.34C19.5097 8.23933 19.5 8.126 19.5 8C19.5 7.578 19.6447 7.22267 19.934 6.934C20.2227 6.64467 20.578 6.5 21 6.5C21.422 6.5 21.7773 6.64467 22.066 6.934C22.3553 7.22267 22.5 7.578 22.5 8C22.5 8.422 22.3553 8.77733 22.066 9.066C21.7767 9.35467 21.4213 9.49933 21 9.5C20.8747 9.5 20.7613 9.49033 20.66 9.471C20.56 9.45167 20.468 9.406 20.384 9.334L16.334 13.384C16.406 13.4673 16.4517 13.5593 16.471 13.66C16.4903 13.7607 16.5 13.874 16.5 14C16.5 14.422 16.3553 14.7773 16.066 15.066C15.7773 15.3553 15.422 15.5 15 15.5C14.578 15.5 14.2227 15.3553 13.934 15.066C13.6453 14.7767 13.5007 14.4213 13.5 14C13.5 13.8747 13.5097 13.7583 13.529 13.651C13.5483 13.5437 13.594 13.442 13.666 13.346L10.654 10.335C10.558 10.4063 10.4563 10.4517 10.349 10.471C10.2423 10.4903 10.126 10.5 10 10.5C9.91533 10.5 9.71033 10.4577 9.385 10.373L4.373 15.385C4.41967 15.481 4.45233 15.576 4.471 15.67C4.49033 15.7647 4.5 15.8747 4.5 16C4.5 16.422 4.35533 16.7773 4.066 17.066C3.77733 17.3553 3.422 17.5 3 17.5Z"
                                fill="#FAFAFA"
                                className={`${currentIndex === 0 ? 'fill-[#FAFAFA]' : 'fill-[#6A7282]'}`}
                            />
                        </svg>
                        <span className={`text-sm font-normal ${currentIndex === 0 ? 'text-[#FAFAFA]' : 'text-[#6A7282]'} ${archivo.className}`}>
                            Timeline
                        </span>
                    </button>
                    <button
                        onClick={() => setCurrentIndex(1)}
                        className={`flex flex-1 px-3.5 py-2 flex-row rounded-full ${currentIndex === 1 ? 'bg-[#101920]' : ''} gap-1 items-center transition-all duration-300`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 3.5V20.5M20.5 9.5H3.5M3 9.4C3 7.16 3 6.04 3.436 5.184C3.81949 4.43139 4.43139 3.81949 5.184 3.436C6.04 3 7.16 3 9.4 3H14.6C16.84 3 17.96 3 18.816 3.436C19.5686 3.81949 20.1805 4.43139 20.564 5.184C21 6.04 21 7.16 21 9.4V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V9.4Z"
                                stroke="#6A7282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                className={`${currentIndex === 1 ? 'stroke-[#FAFAFA]' : 'stroke-[#6A7282]'}`} />
                        </svg>

                        <span className={`text-sm font-normal ${currentIndex === 1 ? 'text-[#FAFAFA]' : 'text-[#6A7282]'} ${archivo.className}`}>
                            Table
                        </span>
                    </button>
                </div>
            </div>
            {currentIndex === 0 ? timeLineView : tableLineView}
        </section>
    );
}