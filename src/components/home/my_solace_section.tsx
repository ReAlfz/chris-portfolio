import { Archivo } from "next/font/google";
import boxingSolace from "../../../public/images/home/boxing_solace.png";
import kartingSolace from "../../../public/images/home/karting_solace.png";
import runSolace from "../../../public/images/home/run_solace.png";
import Image from "next/image";
import Link from "next/link";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function MySolaceSection() {
    const listSolace = [
        {
            "title": "Boxing",
            "image": boxingSolace,
            "href": "/solace/boxing",
        },
        {
            "title": "10k Runs",
            "image": runSolace,
            "href": "/solace/10k-runs",
        },
        {
            "title": "Go Karting",
            "image": kartingSolace,
            "href": "/solace/go-karting",
        },
    ] as const;

    return (
        <section id="my-solace" className="flex flex-col justify-center items-center scroll-mt-28 pt-20 pb-32.5 px-35">
            <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className={`text-black font-semibold text-[53px] ${archivo.className}`}>
                    My Solace
                </h3>
                <span className={`text-[#62748E] text-2xl font-normal ${archivo.className}`}>
                    The lighter side of my life.
                </span>
            </div>
            <div className="px-36.25 pt-23 flex flex-row gap-6">
                {listSolace.map((item) => {
                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group flex flex-col h-125 w-92.5 items-center justify-center outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand"
                        >
                            <div className="relative h-full w-full overflow-hidden transition group-hover:opacity-95">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center py-5">
                                <h6 className="text-2xl font-semibold text-[#101920] group-hover:underline">
                                    {item.title}
                                </h6>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}