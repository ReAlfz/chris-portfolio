'use client'

import { AnimatePresence, easeIn, motion } from "framer-motion";
import { Archivo } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import universityImg from "../../../public/images/university/university_img.png";
import universityLogo from "../../../public/images/university/university_logo.png";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

const fadeVariant = {
    enter: {
        opacity: 0,
        transition: { duration: 0.3 }
    },
    center: {
        opacity: 1,
        transition: { duration: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.1 }
    }
}

export default function InstitutionUniversitySection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const listUniversity = [
        {
            "title": "University of Manitoba",
            "occupation": "Lead Instructor",
            "duration": "January 2018 - present (7 years)",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            "image": universityImg,
            "logo": universityLogo,
        },
        {
            "title": "The University of Winnipeg",
            "occupation": "Lead Instructor",
            "duration": "January 2018 - present (7 years)",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            "image": universityImg,
            "logo": universityLogo,
        },
        {
            "title": "McMaster University",
            "occupation": "Lead Instructor",
            "duration": "January 2018 - present (7 years)",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            "image": universityImg,
            "logo": universityLogo,
        },
    ];

    const currentItem = listUniversity[activeIndex];


    return (
        <section className="flex flex-col px-36 py-25 gap-6 bg-[#101920] w-full h-full">
            <div className="flex flex-row justify-between items-center">
                <h3 className={`text-[53px] font-semibold text-[#FAFAFA] ${archivo.className}`}>
                    Institutions
                </h3>
                <div className="flex flex-row gap-3">
                    {listUniversity.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex h-10 items-center justify-center py-2 px-3 rounded-full ${activeIndex === index ? 'bg-white/30' : 'bg-white/10'}`}>
                                <span className={`text-base font-normal ${activeIndex === index ? 'text-white' : 'text-[#99A1AF]'} ${archivo.className}`}>
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentItem.title}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={fadeVariant}
                    transition={{ ease: "easeIn" }}
                    className="flex flex-row gap-3">
                    <motion.div
                        className="flex-2">
                        <Image
                            className="rounded-[20px] object-cover object-center w-full h-full"
                            src={currentItem.image}
                            alt={currentItem.title}
                        />
                    </motion.div>
                    <motion.div
                        className="rounded-[20px] px-8.5 py-10 flex flex-col gap-8 bg-white/10 flex-1">
                        <div className="flex flex-row gap-2">
                            <Image
                                className="w-7 h-7"
                                src={currentItem.logo}
                                alt={currentItem.title}
                            />
                            <h6 className={`text-2xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                                {currentItem.title}
                            </h6>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className={`text-base font-bold text-[#FAFAFA] ${archivo.className}`}>
                                {currentItem.occupation}
                            </span>
                            <span className={`text-base font-normal text-[#D1D5DC] ${archivo.className}`}>
                                {currentItem.duration}
                            </span>
                        </div>
                        <p className={`text-base font-normal text-[#99A1AF] ${archivo.className}`}>
                            {currentItem.description}
                        </p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}