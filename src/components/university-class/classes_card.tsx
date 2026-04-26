import { Archivo } from "next/font/google";
import Image, { StaticImageData } from "next/image";

interface ClassesCardProps {
    title: string,
    excerpt?: string;
    venue: string,
    tags: string[],
    categories: string[],
    image?: StaticImageData;
    level?: "beginner" | "intermediate" | "advanced";
    sortKey: {
        name: string;
        date?: number;  // Date.parse(...)
    };
};

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function ClassesCard({ title, excerpt, venue, tags, categories, image, sortKey }: ClassesCardProps) {
    return (
        <article className="border border-[#E5E7EB] bg-[#FAFAFA] w-full h-full rounded-[20px] flex flex-col">
            {image != null ? (
                <div className="relative w-full h-42">
                    <Image
                        className="rounded-t-[20px] object-cover"
                        src={image}
                        alt={title}
                        fill
                    />
                </div>
            ) : (
                <div className="w-full h-42 bg-gray-200 rounded-t-[20px]" />
            )}
            <div className="flex-2 flex flex-col gap-3 px-3 pb-4.5 pt-3.5">
                <span className={`text-base font-normal text-[#1D293D] ${archivo.className}`}>
                    {title}
                </span>
                <div className="flex flex-row gap-1.5">
                    <div className="rounded-full w-5 h-5 bg-slate-800" />
                    <span className={`text-sm font-normal text-[#6A7282] ${archivo.className}`}>
                        {venue}
                    </span>
                </div>
                <div className="flex flex-row gap-1.5">
                    {tags.map((item) => {
                        return (
                            <div className="rounded-full bg-[#F3F4F6] px-2 py-1 overflow-hidden">
                                <span className={`text-[12px] text-[#6A7282] ${archivo.className}`}>
                                    {item}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}