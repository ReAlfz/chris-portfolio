import Image from "next/image";
import mascotImg from "../../../public/images/rally/mascot.png";
import resilienceIcon from "../../../public/images/rally/resilence_icon.svg";
import selflessIcon from "../../../public/images/rally/selfless_icon.svg";
import innovationIcon from "../../../public/images/rally/innovation_icon.svg";
import sustainabilityIcon from "../../../public/images/rally/sustainability_icon.svg";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function CoreValueSection() {
    const listCore = [
        {
            "title": 'Resilience',
            "description": 'Local businesses have faced challenges head-on, adapting and evolving with unwavering strength. We stand with them, embracing change and growth.',
            "icon": resilienceIcon
        },
        {
            "title": 'Selfless',
            "description": 'People always come first. How we drive value to customers and local businesses remains our utmost priority.',
            "icon": selflessIcon

        },
        {
            "title": 'Innovation',
            "description": 'We think outside the box to help businesses shine. From crafting clear value propositions to driving visibility, we’re always pushing for creative solutions.',
            "icon": innovationIcon
        },
        {
            "title": 'Sustainability',
            "description": 'People always come first. How we drive value to customers and local businesses remains our utmost priority.',
            "icon": sustainabilityIcon
        },
    ];

    return (
        <section className="bg-brand flex flex-row px-36 justify-between min-h-162.5">
            <div className="relative w-110">
                <div className="absolute pt-14.5 top-0 left-0">
                    <h3 className={`text-[53px] text-[#FAFAFA] font-semibold ${archivo.className}`}>
                        Our Core Values
                    </h3>
                    <h5 className={`mt-3 text-3xl text-[#D3F3E5] font-semibold ${archivo.className}`}>
                        The Heart of Rally The Locals
                    </h5>
                </div>
                <div className="absolute top-70 right-0">
                    <span className={`text-base text-white ${archivo.className} whitespace-pre-line`}>
                        {"Meet our mascot,\n(their name)"}
                    </span>
                </div>
                <div className="absolute top-85 right-25">
                    <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7578 0.128906C24.4245 5.12891 17.4578 17.7289 0.257812 28.1289" stroke="white" />
                    </svg>
                </div>
                <Image
                    className="absolute bottom-0"
                    src={mascotImg}
                    alt="mascot"
                />
            </div>
            <div className="py-15.5 grid grid-cols-2 gap-4">
                {listCore.map((item) => (
                    <div key={item.title} className="flex flex-col items-center">
                        {/* Icon floats above card, overlapping it */}
                        <div className="z-10 -mb-8">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={57}
                                height={57}
                            />
                        </div>

                        {/* Card */}
                        <div className="group w-73.75 h-full pt-12 pb-8 px-8 rounded-[10px] bg-white/20 hover:bg-white/90 transition-colors duration-300 flex flex-col items-center gap-4 text-center">
                            <h6 className={`text-2xl text-white group-hover:text-[#101920] font-semibold ${archivo.className}`}>
                                {item.title}
                            </h6>
                            <span className={`text-white group-hover:text-[#6D7A8A] text-base ${archivo.className}`}>
                                {item.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}