import { Archivo } from "next/font/google";
import boxingSolace from "../../../public/images/home/boxing_solace.png";
import kartingSolace from "../../../public/images/home/karting_solace.png";
import runSolace from "../../../public/images/home/run_solace.png";
import Image from "next/image";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function MySolaceSection() {
    const listSolace = [
        {
            "title": "Boxing",
            "image": boxingSolace,
        },
        {
            "title": "10k Runs",
            "image": runSolace,
        },
        {
            "title": "Go Karting",
            "image": kartingSolace,
        },
    ];

    return (
        <section className="flex flex-col justify-center items-center pt-20 pb-32.5 px-35">
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
                        <div key={item.title} className="flex flex-col h-125 justify-center items-center w-92.5">
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover h-full"
                                />
                            </div>
                            <div className="py-5 flex items-center justify-center">
                                <h6 className="text-2xl text-[#101920] font-semibold">
                                    {item.title}
                                </h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}