'use client';

import { Archivo } from "next/font/google";
import speakingImg from "../../public/images/portfolio/speaking_event.png";
import tedxImg from "../../public/images/portfolio/tedx_talk.jpg";
import uniClassImg from "../../public/images/portfolio/university_class.png";
import rallyImg from "../../public/images/portfolio/rally_the_local.png";
import agileImg from "../../public/images/portfolio/agile_workshop.png";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const listCategory = [
    {
        "title": "Speaking Events",
        "image": speakingImg,
    },
    {
        "title": "My TEDx Talk",
        "image": tedxImg,
    },
    {
        "title": "University Classes",
        "image": uniClassImg,
    },
    {
        "title": "Rally the Locals",
        "image": rallyImg,
    },
    {
        "title": "Agile Workshops",
        "image": agileImg,
    },
];

export default function MyPortfolio({ isCompact }: { isCompact: boolean }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const total = listCategory.length;

    const navigate = (dir: 1 | -1) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + total) % total);
    };

    const getItem = (offset: number) =>
        listCategory[(current + offset + total) % total];

    const expanded = (
        <div className="flex flex-col w-full bg-[#101920]">
            {/* decoration */}
            <div className="flex flex-row justify-between">
                <div className="">
                    <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="72" width="72" height="72" transform="rotate(-90 0 72)" fill="#101920" stroke="#1E2939" />
                        <rect x="72" y="72" width="72" height="72" transform="rotate(-90 72 72)" fill="#101920" stroke="#1E2939" />
                        <rect y="144" width="72" height="72" transform="rotate(-90 0 144)" fill="#101920" stroke="#1E2939" />
                    </svg>
                </div>
                <div className="">
                    <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="72" width="72" height="72" transform="rotate(-90 0.5 72)" fill="#101920" stroke="#1E2939" />
                        <rect x="72.5" y="72" width="72" height="72" transform="rotate(-90 72.5 72)" fill="#101920" stroke="#1E2939" />
                        <rect x="72.5" y="144" width="72" height="72" transform="rotate(-90 72.5 144)" fill="#101920" stroke="#1E2939" />
                    </svg>
                </div>
            </div>

            <div className="inset-0 flex items-center py-5 w-full">
                <div className="flex flex-row items-start pl-36 w-full">
                    <div className="flex flex-col flex-1 pr-17.5">
                        <h2 className={`text-7xl text-[#FAFAFA] font-semibold ${archivo.className}`}>
                            My Portfolio
                        </h2>
                        <div className="flex flex-row gap-6 mt-25">
                            <button
                                onClick={() => navigate(-1)}
                                className="w-12.5 h-12.5 rounded-full flex items-center justify-center bg-[#FAFAFA]">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 25L8.75 15L18.75 5L21.25 7.5L13.75 15L21.25 22.5L18.75 25Z" fill="#101920" />
                                </svg>
                            </button>
                            <button
                                onClick={() => navigate(1)}
                                className="w-12.5 h-12.5 rounded-full flex items-center justify-center bg-[#FAFAFA]">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 5L21.25 15L11.25 25L8.75 22.5L16.25 15L8.75 7.5L11.25 5Z" fill="#101920" />
                                </svg>
                            </button>
                        </div>
                        <button className="w-fit px-14.5 py-4 bg-brand rounded-sm mt-16">
                            <h6 className={`text-2xl text-[#FAFAFA] font-semibold ${archivo.className}`}>
                                See All Portfolios
                            </h6>
                        </button>
                    </div>
                    <div className="flex-3 flex overflow-hidden">
                        <div className="flex flex-row gap-6 items-end">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    className={`w-84 h-145 relative`}>
                                    <Image
                                        className={`absolute object-cover w-fit h-full z-2 right-1 bottom-1`}
                                        src={getItem(0).image}
                                        alt={getItem(0).title}
                                    />

                                    <div className={`z-3 bg-[#1C1C28B2] w-full absolute bottom-1 right-1 px-10.5 py-5 flex justify-center`}>
                                        <span className={`text-3xl text-center font-medium ${archivo.className} text-[#FAFAFA]`}>
                                            {getItem(0).title}
                                        </span>
                                    </div>

                                    <div className="absolute right-0 bottom-0 w-full h-full bg-brand z-1" />
                                </motion.div>

                                <div className="relative w-72.5 h-132.5">
                                    <Image
                                        className={`absolute object-cover w-fit h-full z-2`}
                                        src={getItem(1).image}
                                        alt={getItem(1).title}
                                    />

                                    <div className={`z-3 bg-[#1C1C28B2] absolute inset-0 items-center justify-center flex`}>
                                        <span className={`text-3xl font-medium ${archivo.className} text-[#FAFAFA]`}>
                                            {getItem(1).title}
                                        </span>
                                    </div>
                                </div>

                                <div className="relative w-72.5 h-132.5">
                                    <Image
                                        className={`absolute object-cover w-fit h-full z-2`}
                                        src={getItem(2).image}
                                        alt={getItem(2).title}
                                    />

                                    <div className={`z-3 bg-[#1C1C28B2] absolute inset-0 items-center justify-center flex`}>
                                        <span className={`text-3xl font-medium ${archivo.className} text-[#FAFAFA]`}>
                                            {getItem(2).title}
                                        </span>
                                    </div>
                                </div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* decoration */}
            <div className="flex pt-10">
                <svg width="100%" height="217" viewBox="0 0 1440 217" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="216.5" width="72" height="72" transform="rotate(-90 0 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="216.5" width="72" height="72" transform="rotate(-90 72 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="144" y="216.5" width="72" height="72" transform="rotate(-90 144 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="216" y="216.5" width="72" height="72" transform="rotate(-90 216 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="288" y="216.5" width="72" height="72" transform="rotate(-90 288 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="360" y="216.5" width="72" height="72" transform="rotate(-90 360 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="432" y="216.5" width="72" height="72" transform="rotate(-90 432 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="504" y="216.5" width="72" height="72" transform="rotate(-90 504 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="576" y="216.5" width="72" height="72" transform="rotate(-90 576 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="648" y="216.5" width="72" height="72" transform="rotate(-90 648 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="720" y="216.5" width="72" height="72" transform="rotate(-90 720 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="792" y="216.5" width="72" height="72" transform="rotate(-90 792 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="864" y="216.5" width="72" height="72" transform="rotate(-90 864 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="936" y="216.5" width="72" height="72" transform="rotate(-90 936 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1008" y="216.5" width="72" height="72" transform="rotate(-90 1008 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1080" y="216.5" width="72" height="72" transform="rotate(-90 1080 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1152" y="216.5" width="72" height="72" transform="rotate(-90 1152 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1224" y="216.5" width="72" height="72" transform="rotate(-90 1224 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1296" y="216.5" width="72" height="72" transform="rotate(-90 1296 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="216.5" width="72" height="72" transform="rotate(-90 1368 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect y="144.5" width="72" height="72" transform="rotate(-90 0 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect y="72.5" width="72" height="72" transform="rotate(-90 0 72.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="144.5" width="72" height="72" transform="rotate(-90 72 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1296" y="144.5" width="72" height="72" transform="rotate(-90 1296 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="144.5" width="72" height="72" transform="rotate(-90 1368 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="72.5" width="72" height="72" transform="rotate(-90 1368 72.5)" fill="#101920" stroke="#1E2939" />
                </svg>
            </div>
        </div>
    );

    const compact =
        (
            <div className="bg-[#101920] flex flex-col pt-27 pb-31 gap-8">
                <div className="flex flex-row justify-between px-36">
                    <h2 className={`text-7xl text-[#FAFAFA] font-semibold ${archivo.className}`}>
                        My Portfolio
                    </h2>
                    <div className="flex flex-row gap-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-12.5 h-12.5 rounded-full flex items-center justify-center bg-[#FAFAFA]">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 25L8.75 15L18.75 5L21.25 7.5L13.75 15L21.25 22.5L18.75 25Z" fill="#101920" />
                            </svg>
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="w-12.5 h-12.5 rounded-full flex items-center justify-center bg-[#FAFAFA]">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 5L21.25 15L11.25 25L8.75 22.5L16.25 15L8.75 7.5L11.25 5Z" fill="#101920" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex-3 flex justify-center overflow-hidden">
                    <div className="flex flex-row gap-6 items-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                className={`w-84 h-145 relative`}>
                                <Image
                                    className={`absolute object-cover w-fit h-full z-2 right-1 bottom-1`}
                                    src={getItem(0).image}
                                    alt={getItem(0).title}
                                />

                                <div className={`z-3 bg-[#1C1C28B2] w-full absolute bottom-1 right-1 px-10.5 py-5 flex justify-center`}>
                                    <span className={`text-3xl text-center font-medium ${archivo.className} text-[#FAFAFA]`}>
                                        {getItem(0).title}
                                    </span>
                                </div>

                                <div className="absolute right-0 bottom-0 w-full h-full bg-brand z-1" />
                            </motion.div>

                            <div className="relative w-72.5 h-132.5">
                                <Image
                                    className={`absolute object-cover w-fit h-full z-2`}
                                    src={getItem(1).image}
                                    alt={getItem(1).title}
                                />

                                <div className={`z-3 bg-[#1C1C28B2] absolute inset-0 items-center justify-center flex`}>
                                    <span className={`text-3xl font-medium ${archivo.className} text-[#FAFAFA]`}>
                                        {getItem(1).title}
                                    </span>
                                </div>
                            </div>

                            <div className="relative w-72.5 h-132.5">
                                <Image
                                    className={`absolute object-cover w-fit h-full z-2`}
                                    src={getItem(2).image}
                                    alt={getItem(2).title}
                                />

                                <div className={`z-3 bg-[#1C1C28B2] absolute inset-0 items-center justify-center flex`}>
                                    <span className={`text-3xl font-medium ${archivo.className} text-[#FAFAFA]`}>
                                        {getItem(2).title}
                                    </span>
                                </div>
                            </div>

                            <div className="relative w-72.5 h-132.5">
                                <Image
                                    className={`absolute object-cover w-fit h-full z-2`}
                                    src={getItem(3).image}
                                    alt={getItem(3).title}
                                />

                                <div className={`z-3 bg-[#1C1C28B2] absolute inset-0 items-center justify-center flex`}>
                                    <span className={`text-3xl font-medium ${archivo.className} text-[#FAFAFA]`}>
                                        {getItem(3).title}
                                    </span>
                                </div>
                            </div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        );


    return (
        <section className="flex flex-col">
            {isCompact ? compact : expanded}
        </section>
    );
}