import { Archivo } from "next/font/google";
import Image from "next/image";
import gratefullBg from "../../../public/images/rally/gratefull_icon.jpg";
import rallyImg1 from "../../../public/images/rally/rally-1.jpg";
import rallyImg2 from "../../../public/images/rally/rally_bg.jpg";
import rallyImg3 from "../../../public/images/rally/rally-2.jpg";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});


export default function LocalComunitySection() {
    const listLocal = [
        {
            "number": "147",
            "section": "Partnership",
            "image": rallyImg1
        },
        {
            "number": "147",
            "section": "Partnership",
            "image": rallyImg2
        },
        {
            "number": "147",
            "section": "Partnership",
            "image": rallyImg3
        },
    ];

    return (
        <section className="flex flex-col px-36 py-20 bg-[#F9FAFB]">
            <div className="flex flex-col gap-11.5 items-center justify-center">
                <h4 className={`text-[40px] font-semibold text-[#101920] ${archivo.className}`}>
                    Strengthening
                    <span className={`text-[40px] font-semibold text-brand ${archivo.className}`}>
                        {" Local "}
                    </span>
                    Communities
                </h4>
                <div className="flex flex-row justify-center items-center gap-6">
                    {listLocal.map((item, index) => {
                        return (
                            <div key={`${item.section}-${index}`} className="relative ">
                                <div className="relative z-2">
                                    <div className="bg-black/60 rounded-[10px] h-65 w-65 absolute z-2" />
                                    <Image
                                        className="h-65 w-65 object-cover rounded-[10px] z-1"
                                        src={item.image}
                                        alt="rally_1"
                                    />
                                </div>
                                <div className="absolute flex flex-col justify-center items-center gap-3 inset-0 z-3">
                                    <h3 className={`text-[53px] text-[#FAFAFA] font-semibold ${archivo.className}`}>
                                        {item.number}
                                    </h3>
                                    <h6 className={`text-2xl text-[#FAFAFA] font-semibold ${archivo.className}`}>
                                        {item.section}
                                    </h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-27.5 flex flex-col items-center gap-8">
                    <h4 className={`text-[40px] text-black font-semibold ${archivo.className}`}>
                        {"Grateful for Those Who "}
                        <span className="text-brand">
                            Rally
                        </span>
                        {" With Us"}
                    </h4>
                    <div className="bg-white rounded-2xl flex flex-col gap-2.5 px-10.5 py-16">
                        {[1, 2, 3, 4, 5].map((item) => {
                            return (
                                <Image
                                    className=""
                                    src={gratefullBg}
                                    alt={`image-${item}`}
                                />
                            );
                        })}
                    </div>
                    <h6 className={`text-2xl font-semibold text-black ${archivo.className}`}>
                        and more!
                    </h6>
                </div>
            </div>
        </section>
    );
}