'use client'

import { Archivo } from "next/font/google";
import mainImage from "../../../public/images/rally/story_cider_1.png"
import sideImage from "../../../public/images/rally/story_cider_2.png"
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InstagramIcon from "./widgets/instagram_icon";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function BusinesssSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const listStory = [
        {
            title: "Wooden Gate Cider | Manitoba Cidery",
            year: "2025",
            industryLabel: "Industry:",
            industryValue: "Food and Beverage",
            body: `Meet Pam and Clint Cavers, the heart and soul behind Wooden Gate Cider. With a deep love for the land and Clint's expertise in brewing, they've turned their farm into a thriving orchard, where they craft exceptional, traditional ciders that celebrate the rich flavors of Manitoba.`,
            tags: ["Content Creation", "Social Media Management"],
            mainImage: mainImage,
            sideImage: sideImage,
            linkIg: "https://www.instagram.com/woodengatecider?igsh=MTg3bThzMnBkdnI3Zw==",
        },
        {
            title: "Wooden Gate Cider ",
            year: "2025",
            industryLabel: "Industry:",
            industryValue: "Food and Beverage",
            body: `Meet Pam and Clint Cavers, the heart and soul behind Wooden Gate Cider. With a deep love for the land and Clint's expertise in brewing, they've turned their farm into a thriving orchard, where they craft exceptional, traditional ciders that celebrate the rich flavors of Manitoba.`,
            tags: ["Content Creation", "Social Media Management"],
            mainImage: mainImage,
            sideImage: sideImage,
            linkIg: "https://www.instagram.com/woodengatecider?igsh=MTg3bThzMnBkdnI3Zw==",
        },
        {
            title: "Manitoba Cidery",
            year: "2025",
            industryLabel: "Industry:",
            industryValue: "Food and Beverage",
            body: `Meet Pam and Clint Cavers, the heart and soul behind Wooden Gate Cider. With a deep love for the land and Clint's expertise in brewing, they've turned their farm into a thriving orchard, where they craft exceptional, traditional ciders that celebrate the rich flavors of Manitoba.`,
            tags: ["Content Creation", "Social Media Management"],
            mainImage: mainImage,
            sideImage: sideImage,
            linkIg: "https://www.instagram.com/woodengatecider?igsh=MTg3bThzMnBkdnI3Zw==",
        },
    ];

    const navigate = (dir: 1 | -1) => {
        setDirection(dir);
        setActiveIndex((prev) => (prev + dir + listStory.length) % listStory.length);
    };

    const currentItem = listStory[activeIndex];

    return (
        <section className="bg-[#E5E7EB] flex flex-col px-16 py-25">
            <div className="flex flex-col gap-4 justify-start items-start px-20">
                <h3 className={`text-[53px] text-[#101920] font-semibold ${archivo.className}`}>
                    More Than Business—It’s About{" "}
                    <span className={`text-[53px] text-brand font-semibold ${archivo.className}`}>
                        People
                    </span>
                </h3>
                <h5 className={`text-3xl text-[#6D7A8A] font-semibold ${archivo.className}`}>
                    Their Stories
                </h5>
            </div>
            <div className="pt-9 flex flex-row gap-7 items-center">
                <button
                    className="flex bg-[#FAFAFA] rounded-full p-3 justify-center items-center w-12.5 h-12.5"
                    onClick={() => navigate(-1)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 25L8.75 15L18.75 5L21.25 7.5L13.75 15L21.25 22.5L18.75 25Z" fill="#101920" />
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
                        <div className="flex-1 flex flex-row bg-[#FAFAFA] rounded-[10px] py-12.5 pl-12.5">
                            <div className="flex flex-col flex-3 gap-5 pr-16.25 justify-center">
                                <div className="flex flex-col gap-3">
                                    <h6 className={`text-2xl text-[#101920] font-semibold ${archivo.className}`}>
                                        {currentItem.title}
                                    </h6>
                                    <h6 className={`text-2xl text-[#6D7A8A] font-semibold ${archivo.className}`}>
                                        {currentItem.year}
                                    </h6>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className={`text-base font-semibold text-[#6D7A8A] ${archivo.className}`}>
                                        {`${currentItem.industryLabel} `}
                                        <span className={`text-base font-normal text-[#6D7A8A] ${archivo.className}`}>
                                            {currentItem.industryValue}
                                        </span>
                                    </span>
                                    <span className={`text-base font-normal text-[#6D7A8A] ${archivo.className}`}>
                                        {currentItem.body}
                                    </span>
                                    <div className="flex flex-row items-center">
                                        <span className={`text-base font-semibold text-[#6D7A8A] ${archivo.className}`}>
                                            Links:
                                        </span>
                                        <InstagramIcon
                                            linkHref="https://www.instagram.com/woodengatecider?igsh=MTg3bThzMnBkdnI3Zw==" />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    {currentItem.tags.map((item) => {
                                        return (
                                            <div key={item} className="rounded-[10px] px-2 py-1 bg-[#E5E7EB]">
                                                <span className={`text-sm text-[#6A7282] ${archivo.className}`}>
                                                    {item}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-row flex-5 gap-3 overflow-clip items-center pr-0">
                                <Image
                                    className="h-75 w-110 object-cover"
                                    src={currentItem.mainImage}
                                    alt={`${currentItem.title}-1`}
                                />
                                <Image
                                    className="h-75 w-110 object-cover"
                                    src={currentItem.sideImage}
                                    alt={`${currentItem.title}-2`}
                                />
                            </div>
                        </div>
                    </motion.article>
                </AnimatePresence>

                <button
                    className="flex bg-[#FAFAFA] rounded-full p-3 justify-center items-center w-12.5 h-12.5"
                    onClick={() => navigate(1)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 5L21.25 15L11.25 25L8.75 22.5L16.25 15L8.75 7.5L11.25 5Z" fill="#101920" />
                    </svg>
                </button>
            </div>
        </section>
    );
}