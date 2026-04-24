"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Archivo } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const archivo = Archivo({ subsets: ["latin"] });

export type MomentSlide = {
  title: string;
  meta: string;
  body: string;
  imageMain: StaticImageData;
  imageSide?: StaticImageData;
};

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function SolaceMomentsSection({ heading, slides, useFuture }: { heading: string; slides: MomentSlide[], useFuture: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentItem = slides[activeIndex];

  const navigate = (dir: 1 | -1) => {
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  const defaultView = (
    <section className="bg-ink flex flex-col px-16 pt-21 pb-35 gap-14">
      <h3 className={`text-center text-display font-semibold text-on-ink ${archivo.className}`}>
        {heading}
      </h3>
      <div className="flex flex-row gap-6 items-center">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full w-12.5 h-12.5 bg-[#6D7A8A] flex items-center justify-center">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 25L8.75 15L18.75 5L21.25 7.5L13.75 15L21.25 22.5L18.75 25Z" fill="#FAFAFA" />
          </svg>
        </button>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={currentItem.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-row w-full">
            <div className="flex-1 flex flex-row bg-[#1A252E] rounded-[10px] py-12.5 pl-12.5">
              <div className="flex flex-col flex-2 gap-5 pr-16.25 justify-center">
                <div className="flex flex-col gap-3">
                  <h6 className={`text-2xl text-[#FAFAFA] font-semibold ${archivo.className}`}>
                    {currentItem.title}
                  </h6>
                  <h6 className={`text-base text-[#E5E7EB] font-normal ${archivo.className}`}>
                    {currentItem.meta}
                  </h6>
                </div>
                <p className={`mt-2 text-base font-normal text-[#E5E7EB] ${archivo.className}`}>
                  {currentItem.body}
                </p>
              </div>
              <div className="flex flex-row flex-5 gap-3 overflow-clip items-center pr-0">
                <Image
                  className="h-75 w-125 object-cover rounded-[10px]"
                  src={currentItem.imageMain}
                  alt={`${currentItem.title}-1`}
                />
                {currentItem.imageSide && <Image
                  className="h-75 w-125 object-cover rounded-[10px]"
                  src={currentItem.imageSide}
                  alt={`${currentItem.title}-2`}
                />}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <button
          onClick={() => navigate(1)}
          className="rounded-full w-12.5 h-12.5 bg-[#6D7A8A] flex items-center justify-center">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 5L21.25 15L11.25 25L8.75 22.5L16.25 15L8.75 7.5L11.25 5Z" fill="#FAFAFA" />
          </svg>
        </button>
      </div>
    </section>
  );

  return defaultView;
}
