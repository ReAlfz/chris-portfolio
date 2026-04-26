import Image from "next/image";
import imageBg from "../../../public/images/portfolio/hero_bg.jpg";
import educationImg from "../../../public/images/university/education_img.png";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function IntroUniversitySection() {
    return (
        <section className="flex flex-col">
            <div className="relative overflow-hidden">
                <div className="w-full h-125 bg-gray-800 absolute opacity-50 z-5" />
                <Image
                    className="w-full h-125 object-cover object-top z-1"
                    src={imageBg}
                    alt="background_hero"
                />
                <div className="absolute flex flex-col inset-0 items-center justify-center z-5 gap-9.5">
                    <h2 className={`text-white text-[69px] font-semibold ${archivo.className}`}>
                        University Classes
                    </h2>
                    <h6 className={`flex flex-row text-2xl items-center text-[#FAFAFA] font-semibold ${archivo.className}`}>
                        {"My Portfolio "}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="#FAFAFA" />
                        </svg>
                        {" University Classes"}
                    </h6>
                </div>
            </div>
            <div className="flex flex-row gap-12.5 px-36 pt-37.5 pb-52.5">
                <div className="flex flex-col gap-6 flex-1">
                    <h3 className={`whitespace-pre-line text-[53px] text-black font-semibold ${archivo.className}`}>
                        {"Empowering Through\n"}
                        <span className={`whitespace-pre-line text-[53px] text-[#1A9B66] font-semibold ${archivo.className}`}>
                            Education
                        </span>
                    </h3>
                    <h6 className={`text-2xl font-semibold text-[#101920] ${archivo.className}`}>
                        Teaching isn't just about sharing knowledge—it’s about sparking curiosity,
                        fostering critical thinking, and preparing students for real-world challenges.
                    </h6>
                    <p className={`text-base font-normal text-[#6D7A8A] ${archivo.className}`}>
                        With a passion for lifelong learning, I teach postgraduate-level
                        courses at top institutions, blending theory with hands-on insights from
                        my industry experience. Explore the courses below and discover how we
                        bridge the gap between academia and practice.
                    </p>
                </div>
                <Image
                    className="flex-1 w-123.75 h-93.75 object-contain"
                    src={educationImg}
                    alt="education"
                />
            </div>
        </section>
    );
}