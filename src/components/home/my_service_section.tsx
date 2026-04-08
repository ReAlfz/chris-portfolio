import keyNoteImg from "../../../public/images/home/keynote_speaking.jpg";
import agileCampImg from "../../../public/images/home/agile_camps.jpg";
import mentalHealthImg from "../../../public/images/home/mental_health.jpg";
import studentGroupImg from "../../../public/images/home/student_group.jpg";
import caseCompetitionImg from "../../../public/images/home/case_competition.jpg";
import CardService from "./widget/card_service";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function MyServiceSection() {
    const listItem = [
        {
            title: "Keynotes & Speaking Events",
            image: keyNoteImg,
            list: ["Well-being", "Advocacy", "Volunteering"],
        },
        {
            title: "Agile Bootcamps",
            image: agileCampImg,
            list: ["Enterprise Training", "Scrum", "Value Delivery"],
        },
        {
            title: "Mental Health Advocacy",
            image: mentalHealthImg,
            list: ["Well-being", "Advocacy", "Volunteering"],
        },
        {
            title: "Student Group Support & Development",
            image: studentGroupImg,
            list: ["Advocacy", "Sponsorship", "Career & Academia Growth"],
        },
        {
            title: "Case Competition Preparation",
            image: caseCompetitionImg,
            list: ["Case Analysis", "Judging", "Competitions"],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-surface-tint py-21.5">
            <div className="flex flex-col items-center justify-center pb-13.75">
                <h3 className="text-display font-semibold text-ink">
                    My Services
                </h3>
                <span className="pt-2.5 text-2xl font-normal text-caption">
                    Service offerings that I&apos;m extremely passionate about.
                </span>
            </div>
            <div className="grid grid-cols-2 gap-8 justify-center items-center pb-16.75">
                {listItem.map((item) => (
                    <CardService
                        key={item.title}
                        title={item.title}
                        image={item.image}
                        listItem={item.list}
                    />
                ))}
            </div>
            <div className="w-fit rounded bg-brand">
                <h6 className={`px-12 py-4 text-2xl font-semibold text-on-brand ${archivo.className}`}>
                    View All Services
                </h6>
            </div>
        </div>
    );
}