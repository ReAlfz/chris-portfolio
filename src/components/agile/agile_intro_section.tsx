import Image from "next/image";
import agileBg from "../../../public/images/agile/agile_background.png";
import workshopImg from "../../../public/images/agile/intro_agile_img.png";
import cerfImg from "../../../public/images/agile/cerf.png";
import { Archivo, Archivo_Narrow } from "next/font/google";

const archivo = Archivo({
    subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
    subsets: ["latin"],
});

export default function AgileIntroSection() {
    return (
        <section className="flex flex-col">
            <div className="relative flex h-125 overflow-hidden">
                <div className="absolute w-full h-125 z-2 bg-[#1C1C28E5]" />
                <Image
                    className="absolute w-full h-125 object-cover z-1"
                    style={{ objectPosition: "center 50%" }}
                    src={agileBg}
                    alt="agile background"
                    unoptimized
                />
                <div className="absolute flex flex-col inset-0 items-center justify-center gap-9.5 z-5">
                    <h2 className={`text-7xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                        Agile Workshops
                    </h2>
                    <div className="flex flex-row items-center justify-center">
                        <h6 className={`text-2xl font-semibold text-[#99A1AF] ${archivo.className}`}>
                            My Portfolio{" "}
                        </h6>
                        <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="#FAFAFA" />
                        </svg>
                        <h6 className={`text-2xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                            {" "}Agile Workshops
                        </h6>
                    </div>

                </div>
            </div>

            <div className="px-36 pt-34 flex flex-row gap-14">
                <div className="flex flex-3 flex-col gap-6">
                    <h3
                        className={`text-display font-semibold leading-[1.2] text-ink ${archivoNarrow.className}`}
                    >
                        Why <span className="text-brand">Agile?</span>
                    </h3>
                    <h6 className={`text-2xl font-normal text-heading ${archivo.className}`}>
                        Agility is more than a framework—it&apos;s a mindset.
                    </h6>
                    <p className={`text-[18px] leading-relaxed text-subtle ${archivo.className}`}>
                        Through these workshops, I help teams embrace Agile principles, improve collaboration, and
                        maximize value delivery. Whether you&apos;re new to Agile or looking to refine your approach,
                        these sessions are designed to provide practical, hands-on strategies to help you adapt,
                        innovate, and deliver with confidence.
                    </p>
                </div>
                <Image
                    className="flex-2 w-125 h-78.5 rounded-[20px]"
                    src={workshopImg}
                    alt="workshop"
                    unoptimized
                />
            </div>
            <div className="pt-44 pl-36 pb-50">
                <Image
                    className="w-114 h-41.25"
                    src={cerfImg}
                    alt="cerf-image"
                    unoptimized
                />
            </div>
        </section>
    );
}