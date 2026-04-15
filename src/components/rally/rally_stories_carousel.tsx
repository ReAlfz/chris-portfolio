"use client";

/**
 * Client-only carousel for the “Their Stories” band on the Rally page.
 *
 * Why this file is separate: React state (current slide) only works in a client
 * component. The rest of the Rally page can stay a server component for faster
 * first paint. Figma shows arrow controls; we keep the same visuals and wire up
 * simple prev/next. When you add real CMS data, replace STORIES with fetched content.
 */

import Image from "next/image";
import { useCallback, useState } from "react";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600"],
});

/** One slide = everything inside the big white card in Figma (node 237:1638). */
export type RallyStorySlide = {
  title: string;
  year: string;
  industryLabel: string;
  industryValue: string;
  body: string;
  tags: string[];
  mainImage: string;
  sideImage: string;
  /** Optional external link; if missing we still show the icon row for layout parity. */
  linkHref?: string;
};

const STORIES: RallyStorySlide[] = [
  {
    title: "Wooden Gate Cider | Manitoba Cidery",
    year: "2025",
    industryLabel: "Industry:",
    industryValue: "Food and Beverage",
    body: `Meet Pam and Clint Cavers, the heart and soul behind Wooden Gate Cider. With a deep love for the land and Clint's expertise in brewing, they've turned their farm into a thriving orchard, where they craft exceptional, traditional ciders that celebrate the rich flavors of Manitoba.`,
    tags: ["Content Creation", "Social Media Management"],
    mainImage:
      "https://www.figma.com/api/mcp/asset/8e044da9-629d-407a-b77e-aa10138304a7",
    sideImage:
      "https://www.figma.com/api/mcp/asset/4283a36d-c35d-42a7-914f-8aca855075ba",
  },
];

type Props = {
  /** Figma-exported arrow glyphs (circular chevrons). */
  arrowLeft: string;
  arrowRight: string;
  instagramIcon: string;
};

export default function RallyStoriesCarousel({
  arrowLeft,
  arrowRight,
  instagramIcon,
}: Props) {
  const [index, setIndex] = useState(0);
  const slide = STORIES[index] ?? STORIES[0];

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? STORIES.length - 1 : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= STORIES.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-border-card py-16 md:min-h-197.5 md:py-24"
      data-name="Clients"
      data-node-id="237:1612"
    >
      <div className="mx-auto w-full max-w-360 px-6 md:px-36">
        {/* Section title: “People” is brand green in Figma */}
        <h2
          className={`max-w-225 text-[40px] font-semibold leading-[1.2] text-ink md:text-[53px] ${archivo.className}`}
        >
          More Than Business—It&apos;s About{" "}
          <span className="text-brand">People</span>
        </h2>
        <p
          className={`mt-3 text-[24px] font-semibold leading-[1.2] text-narrative md:text-[31px] ${archivo.className}`}
        >
          Their Stories
        </p>

        {/* White card + arrows (arrows sit outside the card in Figma) */}
        <div className="relative mt-10 md:mt-14">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 md:-left-1.5 md:block"
            aria-label="Previous story"
          >
            <Image src={arrowLeft} alt="" width={50} height={50} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-2 md:-right-1.5 md:block"
            aria-label="Next story"
          >
            <Image src={arrowRight} alt="" width={50} height={50} />
          </button>

          <article className="mx-auto flex min-h-110 max-w-287.75 flex-col gap-8 rounded-[10px] bg-surface-soft p-6 shadow-sm md:flex-row md:items-stretch md:p-10 lg:p-12">
            <div className="flex flex-1 flex-col gap-5">
              <div>
                <h3
                  className={`text-xl font-semibold leading-[1.2] text-ink md:text-2xl ${archivo.className}`}
                >
                  {slide.title}
                </h3>
                <p
                  className={`mt-2 text-lg font-semibold text-narrative md:text-xl ${archivo.className}`}
                >
                  {slide.year}
                </p>
              </div>
              <p className={`text-base text-narrative ${archivo.className}`}>
                <span className="font-semibold text-narrative">
                  {slide.industryLabel}
                </span>{" "}
                {slide.industryValue}
              </p>
              <p
                className={`max-w-103.75 text-base leading-[1.3] text-narrative ${archivo.className}`}
              >
                {slide.body}
              </p>
              <div className="flex items-center gap-0.5">
                <span
                  className={`text-base font-semibold text-narrative ${archivo.className}`}
                >
                  Links:
                </span>
                {slide.linkHref ? (
                  <a
                    href={slide.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-5 items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Image
                      src={instagramIcon}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                ) : (
                  <span className="inline-flex size-5 items-center justify-center opacity-70">
                    <Image
                      src={instagramIcon}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-[10px] bg-border-card px-2 py-1 text-sm text-subtle ${archivo.className}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-4 md:flex-row md:items-stretch">
              <div className="relative h-55 w-full overflow-hidden rounded-md md:h-75 md:w-103">
                <Image
                  src={slide.mainImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 412px"
                />
              </div>
              <div className="relative mx-auto h-50 w-35 overflow-hidden rounded-md md:mx-0 md:h-75 md:w-49">
                <Image
                  src={slide.sideImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="196px"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
