import Image, { StaticImageData } from "next/image";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

interface CardServiceProps {
    title: string;
    image: StaticImageData;
    listItem: Array<string>;
}

export default function CardService({ title, image, listItem }: CardServiceProps) {
    return (
        <div className="flex flex-col rounded-sm shadow-sm border border-[#E5E7EB]">
            <Image
                className="bg-center bg-cover bg-no-repeat w-full h-47.5"
                src={image}
                alt={title}
            />
            <div className="flex flex-col items-start justify-start px-5.5 pb-7 pt-3.25 ">
                <h6 className={`text-2xl text-[#1D293D] font-semibold ${archivo.className}`}>
                    {title}
                </h6>
                <div className="flex-row flex gap-2">
                    {listItem.map((item) => {
                        return (
                            <div className="bg-[#F3F4F6] rounded-[10px] justify-center items-center p-2">
                                <span className={`text-sm text-[#14744C] font-normal ${archivo.className}`}>
                                    {item}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}