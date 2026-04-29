import Image from "next/image";
import heroBg from "./../../../public/images/portfolio/hero_bg.jpg";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function IntroMyServiceSection() {
    return (
        <section className="flex flex-col">
            <div className="relative overflow-hidden">
                <div className="w-full h-125 bg-gray-800 absolute opacity-50 z-5" />
                <Image
                    className="w-full h-125 object-cover object-top z-1"
                    src={heroBg}
                    alt="background_hero"
                />
                <div className="absolute flex flex-col inset-0 gap-9.5 items-center justify-center z-5">
                    <h2 className={`text-white text-[69px] font-semibold ${archivo.className}`}>
                        My Services
                    </h2>
                    <h6 className={`text-2xl text-center font-normal max-w-160 text-[#FAFAFA] ${archivo.className}`}>
                        If there's anything that you need that falls in, around, or close to the categories below, don't hesitate to reach out!
                    </h6>
                </div>
            </div>
        </section>
    );
}