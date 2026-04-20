import { Archivo } from "next/font/google";
import socialMediaImg from "../../../public/images/rally/social_media_rally.png"
import contentCreationImg from "../../../public/images/rally/content_creation_rally.png"
import brandingImg from "../../../public/images/rally/branding_rally.png"
import websiteDevImg from "../../../public/images/rally/website_rally.png"
import Image from "next/image";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function ServiceSection() {
    const listService = [
        {
            "title": 'Social Media Management',
            "description": 'Building engagement, strategy, and consistency across platforms.',
            "image": socialMediaImg,
        },
        {
            "title": 'Content Creation',
            "description": 'Crafting compelling stories that connect with your audience.',
            "image": contentCreationImg,
        },
        {
            "title": 'Branding',
            "description": 'Defining your identity and making a lasting impression.',
            "image": brandingImg,
        },
        {
            "title": 'Website Development',
            "description": 'Turning ideas into functional, user-friendly digital experiences.',
            "image": websiteDevImg,
        },
    ];

    return (
        <section className="flex flex-col bg-[#101920] justify-center items-center pt-21.75 pb-30.5 px-55">
            <div className="flex flex-col justify-center items-center gap-3">
                <h3 className={`text-[53px] text-[#FAFAFA] font-semibold ${archivo.className}`}>
                    What Do We Do
                </h3>
                <h5 className={`text-3xl text-brand font-semibold ${archivo.className}`}>
                    Services
                </h5>
            </div>
            <div className="grid grid-rows-1 w-full gap-24 pt-32.5">
                {/* service list */}
                <div className="bg-[#FAFAFA]/5 hover:bg-[#FAFAFA]/20 duration-300 transform flex flex-row w-full items-center rounded-[20px] h-50">
                    <div className="relative h-full w-140">
                        <Image
                            className="absolute bottom-0 -left-10"
                            src={listService[0].image}
                            alt={listService[0].title}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3 py-12.5 px-11.25">
                        <h5 className={`text-3xl text-[#FAFAFA] ${archivo.className}`}>
                            {listService[0].title}
                        </h5>
                        <span className={`text-[18px] text-[#E5E7EB] ${archivo.className}`}>
                            {listService[0].description}
                        </span>
                    </div>
                </div>

                <div className="bg-[#FAFAFA]/5 hover:bg-[#FAFAFA]/20 duration-300 transform flex flex-row w-full items-center rounded-[20px] h-50">
                    <div className="flex flex-col justify-start items-start gap-3 py-12.5 px-11.25">
                        <h5 className={`text-3xl text-[#FAFAFA] ${archivo.className}`}>
                            {listService[1].title}
                        </h5>
                        <span className={`text-[18px] text-[#E5E7EB] ${archivo.className}`}>
                            {listService[1].description}
                        </span>
                    </div>
                    <div className="relative h-full w-140">
                        <Image
                            className="absolute -bottom-7.5 -right-35 w-145 h-85"
                            src={listService[1].image}
                            alt={listService[1].title}
                        />
                    </div>
                </div>

                <div className="bg-[#FAFAFA]/5 hover:bg-[#FAFAFA]/20 duration-300 transform flex flex-row w-full items-center rounded-[20px] h-50">
                    <div className="relative h-full w-118.75">
                        <Image
                            className="absolute bottom-0 left-10"
                            src={listService[2].image}
                            alt={listService[2].title}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3 py-12.5 px-11.25">
                        <h5 className={`text-3xl text-[#FAFAFA] ${archivo.className}`}>
                            {listService[2].title}
                        </h5>
                        <span className={`text-[18px] text-[#E5E7EB] ${archivo.className}`}>
                            {listService[2].description}
                        </span>
                    </div>
                </div>

                <div className="bg-[#FAFAFA]/5 hover:bg-[#FAFAFA]/20 duration-300 transform flex flex-row w-full items-center rounded-[20px] h-50">
                    <div className="flex flex-col justify-start items-start gap-3 py-12.5 px-11.25">
                        <h5 className={`text-3xl text-[#FAFAFA] ${archivo.className}`}>
                            {listService[3].title}
                        </h5>
                        <span className={`text-[18px] text-[#E5E7EB] ${archivo.className}`}>
                            {listService[3].description}
                        </span>
                    </div>
                    <div className="relative h-full w-118.75">
                        <Image
                            className="absolute bottom-0 -right-30 w-110 h-64.25"
                            src={listService[3].image}
                            alt={listService[3].title}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}