import rallyBg from "../../../public/images/rally/rally_bg.jpg";
import intro1 from "../../../public/images/rally/intro_1.jpg";
import intro2 from "../../../public/images/rally/intro_2.jpg";
import Image from "next/image";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function IntroRallySection() {
    return (
        <section className="flex flex-col">
            <div className="relative overflow-hidden">
                <div className="absolute w-full h-125 bg-black opacity-50 z-2" />
                <Image
                    className="w-full h-125 object-cover z-1"
                    style={{ objectPosition: "center 70%" }}
                    src={rallyBg}
                    alt="rally_bg"
                />

                <div className="flex absolute inset-0 flex-col justify-center items-center gap-9.5 z-5">
                    <h2 className={`text-7xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                        Rally The Locals
                    </h2>
                    <h6 className={`text-2xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                        My Portfolio{" "}
                        <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="#FAFAFA" />
                        </svg>
                        {" "}Rally The Locals
                    </h6>
                </div>
            </div>

            {/* introduction page */}
            <div className="px-36 py-32.5">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-12">
                    <div className="order-1 space-y-6 lg:order-0">
                        <h2
                            className={`text-[40px] font-semibold leading-[1.2] text-ink md:text-[53px] ${archivo.className}`}
                        >
                            What is
                            <br />
                            Rally the Locals?
                        </h2>
                        <p
                            className={`text-2xl font-semibold leading-[1.2] text-ink ${archivo.className}`}
                        >
                            Rally The Locals is a platform that showcases local businesses on a
                            meaningful level.
                        </p>
                        <p
                            className={`max-w-142.25 text-lg leading-[1.2] text-[#4a5565] ${archivo.className}`}
                        >
                            We share stories, highlight the impact they&apos;ve made in the
                            community and allow customers to know the people behind the
                            products and services they enjoy.
                        </p>
                        <a
                            href="https://www.rallythelocals.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center rounded-xs bg-brand px-10 py-4 text-2xl font-semibold text-on-brand ${archivo.className}`}
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="order-2 overflow-hidden rounded-[10px] lg:order-0">
                        <div className="relative aspect-495/331 w-full overflow-hidden rounded-[10px]">
                            <Image
                                src={intro1}
                                alt="Rally The Locals team at an event"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width:1024px) 100vw, 495px"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-12 lg:mt-28 lg:grid-cols-2 lg:items-start lg:gap-x-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <div className="relative aspect-496/331 w-full">
                            <Image
                                src={intro2}
                                alt="Community conversation"
                                fill
                                className="object-cover"
                                sizes="(max-width:1024px) 100vw, 496px"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2
                            className={`text-[40px] font-semibold leading-[1.2] text-ink ${archivo.className}`}
                        >
                            Why Rally The Locals?
                        </h2>
                        <p
                            className={`text-2xl italic leading-[1.2] text-[#4a5565] ${archivo.className}`}
                        >
                            “Competition is great, but communities and working together are
                            better.”
                        </p>
                        <p
                            className={`text-lg leading-[1.2] text-[#4a5565] ${archivo.className}`}
                        >
                            Great businesses thrive on real connections. We help local
                            businesses build trust, share stories, and grow through community
                            support. When we work together, everyone wins.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}