import { Archivo } from "next/font/google";
import heroBg from "./../../../public/images/portfolio/hero_bg.jpg";
import Image from "next/image";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});


export default function IntroSpeakingSection() {
    return (
        <section className="flex flex-col">
            <div className="relative overflow-hidden">
                <div className="w-full h-125 bg-gray-800 absolute opacity-50 z-5" />
                <Image
                    className="w-full h-125 object-cover object-top z-1"
                    src={heroBg}
                    alt="background_hero"
                />
                <div className="absolute flex flex-col gap-9.5 inset-0 items-center justify-center z-5">
                    <h2 className={`text-white text-[69px] font-semibold ${archivo.className}`}>
                        My Portfolio
                    </h2>
                    <h6 className={`text-2xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                        My Portfolio{" "}
                        <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="#FAFAFA" />
                        </svg>
                        {" "}Speaking Events
                    </h6>
                </div>
            </div>
        </section>
    );
}