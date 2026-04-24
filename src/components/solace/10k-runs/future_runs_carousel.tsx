"use client";

import { useRef } from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import type { FutureRun } from "./ten_k_data";

const archivo = Archivo({ subsets: ["latin"] });

export default function FutureRunsCarousel({ runs }: { runs: FutureRun[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-future-card]");
    const w = card?.offsetWidth ?? 320;
    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  return (
    <section className="bg-ink px-36 pt-17 pb-32 flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" width="15" height="15" fill="#FAFAFA" />
            <rect x="15" y="15" width="15" height="15" fill="#FAFAFA" />
            <rect y="15" width="15" height="15" fill="#1A9B66" />
          </svg>
          <h2 className={`text-[69px] font-semibold text-on-ink ${archivo.className}`}>
            Future Runs
          </h2>
        </div>
        <div className="flex flex-row items-center gap-6">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex size-12 items-center justify-center rounded-full bg-surface-soft text-ink hover:bg-surface-muted"
            aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex size-12 items-center justify-center rounded-full bg-surface-soft text-ink hover:bg-surface-muted"
            aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
      <h6 className={`text-2xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
        More miles, more memories—let&apos;s hit the road!
      </h6>
      <div
        ref={scrollerRef}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {runs.map((run) => (
          <article
            key={run.title}
            data-future-card
            className="w-[min(100%,320px)] shrink-0 snap-start overflow-hidden rounded-sm border border-border bg-surface shadow-sm"
          >
            <div className="relative aspect-368/220 w-full bg-surface-muted">
              <Image
                src={run.image}
                alt=""
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="border-t border-border px-5 py-5">
              <h3 className={`text-xl font-semibold leading-snug text-ink ${archivo.className}`}>{run.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed text-subtle ${archivo.className}`}>{run.metaLine}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
