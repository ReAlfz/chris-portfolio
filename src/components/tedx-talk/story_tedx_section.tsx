import Image from "next/image";
import tedxLogo from "../../../public/images/tedx_logo.png";
import universityLogo from "../../../public/images/university_logo.png";
import tedxImg from "../../../public/images/tedx/story_bg.jpg";
import moreImg from "../../../public/images/tedx/more_story_bg.png";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function StoryTedxSection() {
    return (
        <section className="flex flex-col px-36 pt-31 pb-27 gap-33.75">
            <div className="flex flex-row gap-22.5 justify-between">
                <div className="flex flex-col w-1/2 gap-5">
                    <h3 className={`text-[53px] font-semibold text-black ${archivo.className}`}>
                        The Story Behind
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className={`font-normal text-base ${archivo.className}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
                            consequat id feugiat nam tortor sed faucibus leo. Elementum et,
                            molestie mattis sit vitae nec ac at. Donec eu, pretium facilisis
                            aliquam amet at cursus maecenas arcu. Malesuada urna a ac ultrices
                            integer egestas rhoncus, viverra.
                        </p>
                        <p className={`font-normal text-base ${archivo.className}`}>
                            Habitant quis ut eget ut cursus ipsum tristique malesuada. Ornare
                            lobortis sed aliquet tempus felis massa. Ut id et fames sit lectus
                            aliquam risus nunc laoreet. Neque amet senectus dolor tempor accumsan
                            vitae sed. Ullamcorper nisi orci suspendisse tempus eget turpis.
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-5">
                        <Image
                            className="object-cover w-30 h-8.75"
                            src={tedxLogo}
                            alt="tedx-logo"
                        />
                        <Image
                            className="object-cover w-22 h-11"
                            src={universityLogo}
                            alt="university-logo"
                        />
                    </div>
                </div>

                <div className="w-1/2 flex justify-end">
                    <Image
                        className="object-cover w-123.75 h-82.5 rounded-[10px]"
                        src={tedxImg}
                        alt="tedx-talk"
                    />
                </div>
            </div>

            <div className="flex flex-row gap-22.5 justify-between">
                <div className="w-1/2 flex justify-start">
                    <Image
                        className="object-cover w-123.75 h-82.5 rounded-[10px]"
                        src={moreImg}
                        alt="more-story"
                    />
                </div>

                <div className="flex flex-col w-1/2 gap-5">
                    <h3 className={`text-[53px] font-semibold text-black ${archivo.className}`}>
                        More into the story...
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className={`font-normal text-base ${archivo.className}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sagittis consequat id feugiat nam tortor sed faucibus leo.
                            Elementum et, molestie mattis sit vitae nec ac at. Donec eu,
                            pretium facilisis aliquam amet at cursus maecenas arcu. Malesuada
                            urna a ac ultrices integer egestas rhoncus, viverra.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}