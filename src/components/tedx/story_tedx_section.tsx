import Image from "next/image";
import tedxImg from "../../../public/images/tedx/tedx_talk_bg.jpg";

export default function StoryTedxSection() {
    return (
        <section className="flex flex-col px-36 pt-31 pb-27 gap-33.75">
            <div className="flex flex-row gap-22.5">
                <div className="flex flex-col">

                </div>

                <Image
                    className="object-cover w-123.75 h-82.5 rounded-[10px]"
                    src={tedxImg}
                    alt="tedx-talk"
                />
            </div>

            <div>

            </div>
        </section>
    );
}