import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function RecordTedxSection() {
    const videoId = 'ubJaIm21L44';
    return (
        <div className="bg-[#101920] flex flex-col px-38.75 pt-16.75 pb-12 gap-12.5 items-center">
            <h3 className={`text-[53px] text-[#FAFAFA] font-semibold ${archivo.className}`}>
                Record
            </h3>
            <div className="relative w-full h-168.75">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-[10px]"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}