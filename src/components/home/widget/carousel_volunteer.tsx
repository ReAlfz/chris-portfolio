"use client";

import Image, { StaticImageData } from "next/image";
import juniorAchievment from "../../../../public/images/home/junior_achievement.jpg";
import coachingBasket from "../../../../public/images/home/coaching_basket.jpg";
import bigBrotherWinnipeg from "../../../../public/images/home/big_brother_winnipeg.jpg";
import { useState } from "react";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

interface CorouselVolenteerProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const items: CorouselVolenteerProps[] = [
  {
    title: "Junior Achievement",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: juniorAchievment,
  },
  {
    title: "Coaching Basketball",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    image: coachingBasket,
  },
  {
    title: "Big Brothers Big Sisters of Winnipeg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: bigBrotherWinnipeg,
  },
];

export default function CarouselVolenteer() {
  const [current, setCurrent] = useState(1);
  const totals = items.length;

  const move = (dir: number) => {
    setCurrent((prev) => (prev + dir + totals) % totals);
  };

  const getIndex = (offset: number) => (current + offset + totals) % totals;

  return (
    <div className="flex w-full items-center justify-center overflow-hidden px-15 py-8">
      <button
        type="button"
        className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-surface p-3 text-ink"
        onClick={() => move(-1)}
        aria-label="Previous slide"
      >
        <svg
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20L-4.37114e-07 10L10 1.47023e-06L12.5 2.5L5 10L12.5 17.5L10 20Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className="flex h-130.5 w-full items-start gap-5.75 px-12">
        {[-1, 0, 1].map((offset) => {
          const index = getIndex(offset);
          const item = items[index];
          const isActive = offset === 0;

          return (
            <div
              key={item.title}
              className="h-full"
              style={{
                flex: isActive ? "2 1 0%" : "0 0 260px",
                transition: "flex 0.4s ease, opacity 0.4s ease",
                opacity: isActive ? 1 : 0.8,
              }}
            >
              <div className="overflow-hidden rounded-sm border border-border-card">
                <div className={`relative w-full ${isActive ? "h-75" : "h-100"}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                <div className="flex flex-col items-center justify-center pb-8 pt-5.25">
                  <h5
                    className={`text-center font-semibold text-ink ${isActive ? "text-3xl" : "text-2xl"} ${archivo.className}`}
                  >
                    {item.title}
                  </h5>

                  {isActive && (
                    <>
                      <span
                        className={`pt-3 text-center text-lg font-normal text-subtle transition-none ${archivo.className}`}
                      >
                        {item.description}
                      </span>
                      <span
                        className={`pt-7 text-center text-lg font-normal text-subtle ${archivo.className}`}
                      >
                        Read more
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-surface p-3 text-ink"
        onClick={() => move(+1)}
        aria-label="Next slide"
      >
        <svg
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 1.31134e-06L12.5 10L2.5 20L1.34117e-06 17.5L7.5 10L-6.25839e-07 2.5L2.5 1.31134e-06Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
