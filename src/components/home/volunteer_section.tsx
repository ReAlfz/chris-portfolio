import { Archivo } from "next/font/google"
import CarouselVolenteer from "./widget/carousel_volunteer"

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function VolunteerSection() {
    return <div className="flex flex-col py-31.25 bg-[#F3F4F6] justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2.5 pb-11.5">
            <h3 className={`text-[53px] text-[#101920] font-semibold ${archivo.className}`}>
                Volunteer Initiatives
            </h3>
            <span className="text-2xl font-normal text-[#62748E]">
                Active and past involvement with organizations I&apos;m very supportive of.
            </span>
        </div>
        <CarouselVolenteer />
        <div className="mt-15.5 bg-[#1A9B66] w-fit h-15 py-4 px-12 justify-center items-center flex">
            <h6 className={`text-2xl font-semibold ${archivo.className}`}>
                See All Initiatives
            </h6>
        </div>
    </div>
}