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
    <section className="bg-ink px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-3xl items-start gap-4">
            <div className="mt-2 inline-grid shrink-0 grid-cols-2 gap-0">
              <span className="size-[15px] bg-on-ink" />
              <span className="size-[15px] bg-on-ink" />
              <span className="size-[15px] bg-brand" />
              <span className="size-[15px] bg-on-ink" />
            </div>
            <div>
              <h2 className={`text-display font-semibold text-on-ink ${archivo.className}`}>Future Runs</h2>
              <p className={`mt-3 text-lg font-normal text-on-ink/85 md:text-xl ${archivo.className}`}>
                More miles, more memories—let&apos;s hit the road!
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-4">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="flex size-12 items-center justify-center rounded-full bg-surface-soft text-ink hover:bg-surface-muted"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="flex size-12 items-center justify-center rounded-full bg-surface-soft text-ink hover:bg-surface-muted"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {runs.map((run) => (
            <article
              key={run.title}
              data-future-card
              className="w-[min(100%,320px)] shrink-0 snap-start overflow-hidden rounded-sm border border-border bg-surface shadow-sm"
            >
              <div className="relative aspect-[368/220] w-full bg-surface-muted">
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
      </div>
    </section>
  );
}
