"use client";

import Image, { StaticImageData } from "next/image";
import juniorAchievment from "../../../../public/images/home/junior_achievement.jpg";
import coachingBasket from "../../../../public/images/home/coaching_basket.jpg";
import bigBrotherWinnipeg from "../../../../public/images/home/big_brother_winnipeg.jpg";
import { useState } from "react";
import { Archivo } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

interface CorouselVolenteerProps {
  id: number,
  title: string;
  description: string;
  image: StaticImageData;
}

const listItems: CorouselVolenteerProps[] = [
  {
    id: 0,
    title: "Junior Achievement",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: juniorAchievment,
  },
  {
    id: 1,
    title: "Coaching Basketball",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    image: coachingBasket,
  },
  {
    id: 2,
    title: "Big Brothers Big Sisters of Winnipeg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: bigBrotherWinnipeg,
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function CarouselVolenteer() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = listItems.length;

  const navigate = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  };

  const getItem = (offset: number) =>
    listItems[(current + offset + total) % total];

  return (
    <div className="flex w-full items-center justify-center overflow-hidden px-15 py-8">
      <button
        type="button"
        className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-surface p-3 text-ink"
        onClick={() => navigate(-1)}
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

      <div className="flex flex-row h-130.5 w-full justify-center items-stretch gap-3 px-8">
        {/* Left card */}
        <div className="flex-2 flex flex-col shrink-0 bg-white overflow-hidden border border-gray-100 opacity-60 h-full">
          <div className="relative w-full flex-1">
            <Image
              src={getItem(-1).image}
              alt={getItem(-1).title}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-9 py-8 text-center shrink-0 min-h-33.75">
            <h3 className={`text-2xl font-semibold text-[#101920] ${archivo.className}`}>
              {getItem(-1).title}
            </h3>
          </div>
        </div>

        {/* Center card */}
        <div className="shrink-0 flex-5 h-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="bg-white h-full w-full flex flex-col border border-gray-100"
            >
              <div className="relative w-full flex-1">
                <Image
                  src={getItem(0).image}
                  alt={getItem(0).title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-10.5 py-7 gap-3 flex flex-col text-center shrink-0">
                <h5 className={`text-3xl text-[#101920] font-semibold ${archivo.className}`}>
                  {getItem(0).title}
                </h5>
                {getItem(0).description && (
                  <p className={`text-[18px] text-[#6A7282] font-normal ${archivo.className}`}>
                    {getItem(0).description}
                  </p>
                )}
                {getItem(0).description && (
                  <button className={`mt-4 text-[18px] text-gray-500 hover:text-gray-600 transition-colors ${archivo.className}`}>
                    Read more
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right card */}
        <div className="flex-2 flex flex-col shrink-0 bg-white overflow-hidden border border-gray-100 opacity-60 h-full">
          <div className="relative w-full flex-1">
            <Image
              src={getItem(1).image}
              alt={getItem(1).title}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-9 py-8 text-center shrink-0 min-h-33.75">
            <h6 className={`text-2xl font-semibold text-[#101920] ${archivo.className}`}>
              {getItem(1).title}
            </h6>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-surface p-3 text-ink"
        onClick={() => navigate(1)}
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
