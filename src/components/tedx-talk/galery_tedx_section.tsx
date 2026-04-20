import { Archivo } from "next/font/google";
import galeryImg1 from "../../../public/images/tedx/image_1.png";
import galeryImg2 from "../../../public/images/tedx/image_2.png";
import galeryImg3 from "../../../public/images/tedx/image_3.png";
import Image from "next/image";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function GaleryTedxSection() {
    return (
        <section className="flex flex-col pt-13.75 pb-28.75 items-center bg-[#101920]">
            <h3 className={`text-[53px] text-[#FAFAFA] font-semibold ${archivo.className}`}>
                Gallery
            </h3>
            <div className="flex flex-row px-17 gap-7 items-center">
                <div className="rounded-full bg-[#6D7A8A] w-12.5 h-12.5 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 25L8.75 15L18.75 5L21.25 7.5L13.75 15L21.25 22.5L18.75 25Z" fill="#FAFAFA" />
                    </svg>
                </div>

                {/* card */}
                <div className="bg-[#1A252E] pt-14.25 pb-20 pl-18 rounded-[10px] flex flex-row gap-6 overflow-hidden">
                    <Image
                        className="object-cover object-center w-100 h-62.5 rounded-[10px]"
                        src={galeryImg1}
                        alt="galery-1"
                    />
                    <Image
                        className="object-cover object-center w-100 h-62.5 rounded-[10px]"
                        src={galeryImg2}
                        alt="galery-2"
                    />
                    <Image
                        className="object-cover object-center w-100 h-62.5 rounded-[10px]"
                        src={galeryImg3}
                        alt="galery-3"
                    />
                </div>

                <div className="rounded-full bg-[#6D7A8A] w-12.5 h-12.5 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 5L21.25 15L11.25 25L8.75 22.5L16.25 15L8.75 7.5L11.25 5Z" fill="#FAFAFA" />
                    </svg>
                </div>
            </div>
        </section>
    );
}