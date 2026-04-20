import { Archivo } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
});

interface categoryProps {
    title: string;
    imageSrc: StaticImageData;
    alt: string;
    description: string;
    link?: string;
}

export default function CategoryCard({ title, imageSrc, alt, description, link }: categoryProps) {
    const inner = (
        <>
            <Image
                className="absolute rounded-[20px] h-full w-full object-cover"
                src={imageSrc}
                alt={alt}
            />
            <div className="absolute bg-[#1E2939] group-hover:bg-[#364153] inset-x-0 bottom-0 flex flex-col gap-3 justify-center items-center rounded-b-[20px] px-8 py-4">
                <h6 className={`text-2xl font-semibold text-[#FAFAFA] ${archivo.className}`}>
                    {title}
                </h6>
                <div className="overflow-hidden max-h-0 group-hover:max-h-25 transition-all duration-300">
                    <span className={`block text-sm text-[#D1D5DC] text-center font-semibold ${archivo.className}`}>
                        {description}
                    </span>
                </div>
            </div>
        </>
    );

    if (link) {
        return (
            <Link href={link} className="group relative block h-132.5 rounded-[20px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand">
                {inner}
            </Link>
        );
    }

    return (
        <div className="group relative h-132.5 rounded-[20px]">
            {inner}
        </div>
    );
}