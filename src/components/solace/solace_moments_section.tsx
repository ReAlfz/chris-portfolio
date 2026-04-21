"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export type MomentSlide = {
  title: string;
  meta: string;
  body: string;
  imageMain: StaticImageData;
  imageSide?: StaticImageData;
};

export default function SolaceMomentsSection({ heading, slides }: { heading: string; slides: MomentSlide[] }) {
  const [i, setI] = useState(0);
  const slide = slides[i] ?? slides[0];
  if (!slide) return null;
  const n = slides.length;

  return (
    <section className="bg-ink px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className={`text-center text-display font-semibold text-on-ink ${archivo.className}`}>{heading}</h2>
        <div className="relative mt-12">
          <button
            type="button"
            onClick={() => setI((x) => (x - 1 + n) % n)}
            className="absolute left-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-surface-soft text-ink md:flex"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setI((x) => (x + 1) % n)}
            className="absolute right-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-surface-soft text-ink md:flex"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          <div className="mx-auto flex max-w-[1151px] flex-col overflow-hidden rounded-[10px] bg-[#1a252e] md:flex-row">
            <div className="flex flex-1 flex-col gap-5 p-8 md:max-w-[320px] md:p-12">
              <h3 className={`text-2xl font-semibold text-on-ink ${archivo.className}`}>{slide.title}</h3>
              <p className={`text-base text-[#e5e7eb] ${archivo.className}`}>{slide.meta}</p>
              <p className={`text-base leading-relaxed text-[#e5e7eb] ${archivo.className}`}>{slide.body}</p>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4 md:flex-row md:p-6">
              <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-lg md:min-h-[300px]">
                <Image src={slide.imageMain} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              {slide.imageSide ? (
                <div className="relative min-h-[200px] w-full overflow-hidden rounded-lg md:min-h-[300px] md:w-[226px] md:shrink-0">
                  <Image src={slide.imageSide} alt="" fill className="object-cover" sizes="226px" />
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setI((x) => (x - 1 + n) % n)}
              className="flex size-12 items-center justify-center rounded-full bg-surface-soft text-ink"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setI((x) => (x + 1) % n)}
              className="flex size-12 items-center justify-center rounded-full bg-surface-soft text-ink"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
