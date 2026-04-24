'use client';

import { Archivo } from "next/font/google";
import speakingImg from "../../public/images/portfolio/speaking_event.png";
import tedxImg from "../../public/images/portfolio/tedx_talk.jpg";
import uniClassImg from "../../public/images/portfolio/university_class.png";
import rallyImg from "../../public/images/portfolio/rally_the_local.png";
import agileImg from "../../public/images/portfolio/agile_workshop.png";
import { useState } from "react";
import topDecoration from "../../public/images/Black Frame - Top.png";
import bottomDecoration from "../../public/images/Black Frame - Bottom.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

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
        "href": "/speaking-event",
        "image": speakingImg,
    },
    {
        "title": "My TEDx Talk",
        "href": "/tedx-talk",
        "image": tedxImg,
    },
    {
        "title": "University Classes",
        "href": "/university-class",
        "image": uniClassImg,
    },
    {
        "title": "Rally the Locals",
        "href": "/rally-the-local",
        "image": rallyImg,
    },
    {
        "title": "Agile Workshops",
        "href": "/agile-workshop",
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
            <Image
                className="w-full h-fit"
                src={topDecoration}
                alt="top decoration"
            />

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
                                <Link href={getItem(0).href} className="cursor-pointer">
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
                                </Link>

                                <Link href={getItem(1).href} className="cursor-pointer">
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
                                </Link>

                                <Link href={getItem(2).href} className="cursor-pointer">
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
                                </Link>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* decoration */}
            <Image
                className="w-full h-fit mt-10"
                src={bottomDecoration}
                alt="bottom decoration"
            />
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
                            <Link href={getItem(0).href} className="cursor-pointer">
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
                            </Link>

                            <Link href={getItem(1).href} className="cursor-pointer">
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
                            </Link>

                            <Link href={getItem(2).href} className="cursor-pointer">
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
                            </Link>

                            <Link href={getItem(3).href} className="cursor-pointer">
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
                            </Link>
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