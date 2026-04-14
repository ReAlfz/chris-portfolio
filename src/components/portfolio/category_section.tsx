import CategoryCard from "./widget/category_card";
import speakEvent from "./../../../public/images/portfolio/speaking_event.png";
import tedTalk from "./../../../public/images/portfolio/tedx_talk.jpg";
import uniClass from "./../../../public/images/portfolio/university_class.png";
import rallyLocal from "./../../../public/images/portfolio/rally_the_local.png";
import agileWork from "./../../../public/images/portfolio/agile_workshop.png";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function CategorySection() {
    return (
        <section
            className="bg-ink px-6 py-16 md:px-12 md:pb-28 md:pt-35"
            data-name="Content"
            data-node-id="362:935"
        >
            <h2
                className={`mb-16 text-center text-display font-semibold leading-[1.2] text-on-brand ${archivo.className}`}
            >
                Categories
            </h2>

            <div className="mx-auto flex max-w-252 flex-col items-center gap-10">
                <div className="grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-10 md:grid-cols-3">
                    <CategoryCard
                        title="Speaking Events"
                        imageSrc={speakEvent}
                        imageHeight={463}
                        alt="Speaking events"
                        expanded
                        description={`I've had the opportunity to speak at conferences, panels, and workshops, sharing insights on business, technology, and career growth to help others navigate their own paths.`}
                    />
                    <CategoryCard
                        title="My TEDx Talk"
                        imageSrc={tedTalk}
                        imageHeight={463}
                        alt="TEDx talk"
                    />
                    <CategoryCard
                        title="University Classes"
                        imageSrc={uniClass}
                        imageHeight={463}
                        alt="University classes"
                    />
                </div>
                <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-10">
                    <CategoryCard
                        title="Rally the Locals"
                        imageSrc={rallyLocal}
                        imageHeight={458}
                        alt="Rally the Locals"
                        href="/rally-the-local"
                    />
                    <CategoryCard
                        title="Agile Workshops"
                        imageSrc={agileWork}
                        imageHeight={458}
                        alt="Agile workshops"
                    />
                </div>
            </div>
        </section>
    );
}