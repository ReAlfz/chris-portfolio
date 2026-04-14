import { Archivo } from "next/font/google"
import CarouselVolenteer from "./widget/carousel_volunteer"

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function VolunteerSection() {
    return <section className="flex flex-col items-center justify-center bg-surface-muted py-31.25">
        <div className="flex flex-col items-center justify-center gap-2.5 pb-11.5">
            <h3 className={`text-display font-semibold text-ink ${archivo.className}`}>
                Volunteer Initiatives
            </h3>
            <span className="text-2xl font-normal text-caption">
                Active and past involvement with organizations I&apos;m very supportive of.
            </span>
        </div>
        <CarouselVolenteer />
        <div className="mt-15.5 flex h-15 w-fit items-center justify-center bg-brand px-12 py-4">
            <h6 className={`text-2xl font-semibold text-on-brand ${archivo.className}`}>
                See All Initiatives
            </h6>
        </div>
    </section>
}