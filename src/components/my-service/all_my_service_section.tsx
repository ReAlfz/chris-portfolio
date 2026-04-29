'use client'

import { useEffect, useRef, useState } from "react";
import keyNotes from "../../../public/images/home/keynote_speaking.jpg";
import mentalHealth from "../../../public/images/home/mental_health.jpg";
import caseCompetition from "../../../public/images/home/case_competition.jpg";
import studentGroup from "../../../public/images/home/student_group.jpg";
import agileBoot from "../../../public/images/home/agile_camps.jpg";
import Image from "next/image";

const services = [
    {
        id: 1,
        title: "Keynotes and Speaking Events",
        description:
            "From technology, business, and startup journeys to topics in general skill development, I'm passionate about storytelling that creates clarity, excitement and direction to achieve successes.",
        images: [
            keyNotes,
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
            "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&q=80",
        ],
    },
    {
        id: 2,
        title: "Mental Health Advocacy",
        description:
            "Notable events and volunteering initiatives that promote positive wellbeing and stories I've shared with my personal mental health struggles.",
        images: [
            mentalHealth,
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
            "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=80",
        ],
    },
    {
        id: 3,
        title: "Case Competition Preparation",
        description:
            "I love case competitions. From being a judge, a competitor, and course content developer, I'd love to develop your case analysis, implementation, and solution delivery skills!",
        images: [
            caseCompetition,
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        ],
    },
    {
        id: 4,
        title: "Student Group Support & Development",
        description:
            "As an advocate for students that put in more than the norm, I've collaborated, supported, and sponsored many student groups across Canada to help achieve their academia and career goals.",
        images: [
            studentGroup,
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
            "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        ],
    },
    {
        id: 5,
        title: "Agile Bootcamps",
        description:
            "Agile is a mindset that isn't grown overnight. As the only Certified Scrum Educator (via Scrum Alliance) in Manitoba, and one of 5 in Canada, let me transform your teams and Enterprise to intuitively adopt Agile to maximize value delivery.",
        images: [
            agileBoot,
            "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&q=80",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        ],
    },
];

function ServiceCard({
    service,
    isActive,
    onClick,
}: {
    service: (typeof services)[0];
    isActive: boolean;
    onClick: () => void;
}) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % service.images.length);
    };

    return (
        <div
            className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${isActive ? "shadow-md" : "shadow-sm"
                }`}
            onClick={onClick}
        >
            <div className="p-7 pb-4">
                <h4 className="text-[40px] font-bold text-[#101920] mb-2 leading-snug">
                    {service.title}
                </h4>
                <p className="text-[18px] text-[#4A5565] leading-relaxed">
                    {service.description}
                </p>
            </div>

            {/* Image carousel */}
            <div className="relative mx-6 mb-6 rounded-xl overflow-hidden h-94 group">
                <Image
                    src={service.images[currentImage]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Nav arrow */}
                <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {service.images.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImage(i);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === currentImage ? "bg-white scale-125" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function AllMyServiceSection() {
    const [activeId, setActiveId] = useState(1);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Sync sidebar highlight on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = Number(entry.target.getAttribute("data-id"));
                        setActiveId(id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToCard = (id: number) => {
        const el = cardRefs.current[id - 1];
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveId(id);
    };

    return (
        <section className="min-h-screen bg-[#f3f4f6] py-12 px-4 md:px-10">
            <div className="mx-36 flex gap-13.5 items-start">
                {/* Sticky sidebar */}
                <div className="hidden md:block sticky top-8 w-52 shrink-0 bg-white rounded-2xl shadow-sm p-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
                        All My Services
                    </p>
                    <nav className="flex flex-col gap-0.5">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => scrollToCard(s.id)}
                                className={`text-left text-xs px-3 py-2 rounded-lg transition-all duration-200 font-medium ${activeId === s.id
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    }`}
                            >
                                {s.title}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Cards list */}
                <div className="flex-1 flex flex-col gap-20">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            data-id={service.id}
                            ref={(el) => {
                                cardRefs.current[i] = el;
                            }}
                        >
                            <ServiceCard
                                service={service}
                                isActive={activeId === service.id}
                                onClick={() => setActiveId(service.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}