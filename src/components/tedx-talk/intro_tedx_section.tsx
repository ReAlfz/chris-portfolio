import Image from "next/image";
import tedxImg from "../../../public/images/tedx/tedx_talk_bg.jpg";
import tedxLogo from "../../../public/images/tedx_logo.png";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function IntroTedxSection() {
    return (
        <section className="relative h-225">
            <div className="overflow-hidden h-full relative w-full">
                <Image
                    className="absolute object-cover z-1"
                    src={tedxImg}
                    alt="tedx-talk"
                />

                <div className="bg-linear-to-r from-black/70 via-30% via-[#FAFAFA]/20 to-[#FAFAFA]/10 z-2 w-full h-full absolute" />
            </div>
            <div className="absolute inset-y-0 left-36 flex flex-col z-3 justify-center">
                <div className="flex flex-col gap-6">
                    <h3
                        className={`flex flex-row items-center text-stat font-semibold text-on-ink ${archivo.className}`}
                    >
                        {"My "}
                        <Image
                            className="px-3.5"
                            src={tedxLogo}
                            alt="tedx"
                            height={35}
                            width={120}
                        />
                        {" Talk"}
                    </h3>
                    <h6 className={`text-2xl font-semibold flex flex-row items-center text-[#FAFAFA] ${archivo.className}`}>
                        {"My Portfolio "}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="#FAFAFA" />
                        </svg>
                        {" My TEDx Talk"}
                    </h6>
                </div>
                <div className="flex flex-col pt-16.5">
                    <h3 className={`text-[53px]/15 text-ted font-semibold  ${archivo.className}`}>
                        Unlock Resiliency
                    </h3>
                    <h3 className={`text-[53px]/15 font-semibold text-on-ink ${archivo.className} whitespace-pre-line`}>
                        {"with Relentless\nEmpathy"}
                    </h3>
                </div>
                <h6 className={`pt-8 text-2xl font-normal leading-relaxed whitespace-pre-line text-on-ink ${archivo.className}`}>
                    In one of the hardest moments of my life, I{"\n"}
                    share intimate details of my struggles finding {"\n"}
                    a sense of{" "}
                    <span className="font-bold italic">self-worth</span>, and
                    reminding others {"\n"} how{" "}
                    <span className="font-bold italic">resilient</span>
                    {" "}they truly are.
                </h6>
                <div className="mt-8.5 flex w-fit items-center justify-center bg-surface px-20 py-4">
                    <span className={`text-2xl font-semibold text-neutral-dark ${archivo.className}`}>
                        Read More
                    </span>
                </div>
            </div>
        </section>
    );
}