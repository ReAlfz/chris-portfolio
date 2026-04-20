import { Archivo } from "next/font/google";
import tedxBg from "../../../public/images/portfolio/tedx_talk.jpg";
import Image from "next/image";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function TakewayTedxSection() {
    const takeList = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis consequat id feugiat nam tortor sed faucibus leo. orci suspendisse tempus eget turpis.",
        "Elementum et, molestie mattis sit vitae nec ac at. Donec eu, pretium facilisis aliquam amet at cursus maecenas arcu. ",
        "Malesuada urna a ac ultrices integer egestas rhoncus, viverra. Habitant quis ut eget ut cursus ipsum tristique malesuada. Ornare lobortis sed aliquet tempus felis massa. ",
        "Ut id et fames sit lectus aliquam risus nunc laoreet. Neque amet senectus dolor tempor accumsan vitae sed. Ullamcorper nisi ",
    ];

    return (
        <section className="flex flex-row bg-[#82181A] px-36.75 pt-19.25 pb-40">
            <div className="flex flex-col gap-11.75 flex-1">
                <h3 className={`text-[53px] text-[#FFA2A2] font-semibold ${archivo.className}`}>
                    Key
                    <span className={`text-[53px] text-[#FAFAFA] font-semibold ${archivo.className}`}>
                        {" Takeaways"}
                    </span>
                </h3>
                <Image
                    className="object-cover object-center rounded-2xl w-105.75 h-95"
                    src={tedxBg}
                    alt="tedx-hero"
                />
            </div>
            <div className="flex flex-col gap-6 flex-2 pl-15 pt-16">
                {takeList.map((item, index) => {
                    return (
                        <div className="relative w-full h-25 group transform flex items-center duration-300">
                            <div className="z-2 absolute flex left-7 py-5 pl-13 pr-5 justify-center items-center bg-[#FFFFFF]/33 group-hover:bg-white w-full h-full rounded-[10px]">
                                <span className={`font-normal text-base ${archivo.className}`}>
                                    {item}
                                </span>
                            </div>
                            <div className="z-3 absolute left-0 rounded-full w-16 h-16 bg-[#FEF2F2] group-hover:bg-[#FFC9C9] flex items-center justify-center">
                                <span className={`text-ted text-[40px] font-semibold ${archivo.className}`}>
                                    {`0${index + 1}`}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}