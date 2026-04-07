import Image from "next/image";
import tedxLogo from "../../../public/images/tedx_logo.png";
import { Inter } from "next/font/google";

const inter = Inter({
    variable: '--font-inter', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function TedxSection() {
    return (
        <div className="flex flex-row py-27.5 px-35 h-230 bg-cover bg-[#101920] bg-no-repeat bg-center" style={{ backgroundImage: "url('/images/home/tedx_background.png')" }}>
            <div className="flex flex-col">
                <span className={`flex text-white flex-row items-center text-[40px] font-semibold ${inter.className}`}>
                    {"My "}
                    <Image
                        className="px-3.5"
                        src={tedxLogo}
                        alt="tedx"
                        height={35}
                        width={120}
                    />
                    {" Talk"}
                </span>
                <div className="pt-22 pb-12.5 flex flex-col">
                    <span className={`text-[#EE2921] text-[40px] font-semibold ${inter.className}`}>
                        Unlock Resiliency
                    </span>
                    <span className={`text-white text-[40px] font-semibold ${inter.className}`}>
                        with Relentless Empathy
                    </span>
                </div>
                <p className={`text-white font-normal whitespace-pre-line text-2xl leading-relaxed ${inter.className}`}>
                    In one of the hardest moments of my life, {"\n"}
                    I share intimate details of my struggles {"\n"}
                    finding a sense of{" "}
                    <span className="font-bold italic">self-worth</span>,
                    {" "}and {"\n"}
                    reminding others how{" "}
                    <span className="font-bold italic">resilient</span>
                    {" "}they truly {"\n"}
                    are.
                </p>
                <div className="mt-8.5 px-20 py-4 w-fit bg-white flex justify-center items-center">
                    <span className={`text-2xl font-semibold text-[#1A1A20] ${inter.className}`}>
                        Read More
                    </span>
                </div>
            </div>

        </div>
    );
}