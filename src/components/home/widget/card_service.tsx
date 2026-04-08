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
        <div className="flex flex-col rounded-sm border border-border-card shadow-sm">
            <Image
                className="bg-center bg-cover bg-no-repeat w-full h-47.5"
                src={image}
                alt={title}
            />
            <div className="flex flex-col items-start justify-start px-5.5 pb-7 pt-3.25 ">
                <h6 className={`text-2xl font-semibold text-heading ${archivo.className}`}>
                    {title}
                </h6>
                <div className="flex-row flex gap-2">
                    {listItem.map((item) => (
                            <div key={item} className="items-center justify-center rounded-[10px] bg-surface-muted p-2">
                                <span className={`text-sm font-normal text-brand-strong ${archivo.className}`}>
                                    {item}
                                </span>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}