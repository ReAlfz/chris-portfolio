import Link from "next/link";
import { Archivo } from "next/font/google";
import topLogo from "../../../public/images/agile/top_icon_logo.png";
import leftLogo from "../../../public/images/agile/left_icon_logo.png";
import rightLogo from "../../../public/images/agile/right_icon_logo.png";
import Image from "next/image";

const archivo = Archivo({
  subsets: ["latin"],
});

export default function AgileInstitutionsSection() {
  const image = [topLogo, leftLogo, rightLogo];
  return (
    <section className="bg-brand px-36 py-16 flex flex-row">
      <div className="flex flex-col gap-4 flex-5">
        <h2 className={`text-display font-semibold text-[#072719] ${archivo.className}`}>
          <span className={`text-display font-semibold text-white ${archivo.className}`}>
            {"Agile\n"}
          </span>
          isn&apos;t just for tech companies
        </h2>
        <p className={`text-2xl leading-relaxed text-on-brand/95 ${archivo.className}`}>
          It&apos;s a way to work smarter, adapt faster, and create better outcomes—no matter your industry.
        </p>
        <p className={`text-base leading-relaxed text-on-brand/90 ${archivo.className}`}>
          Let&apos;s bring Agile to your team. Reach out to learn more about customized workshops and training
          sessions.
        </p>
        <button className="py-2 px-16 bg-[#FAFAFA] w-fit">
          <h6 className={`text-2xl font-semibold text-[#1A9B66] ${archivo.className}`}>
            Get In Touch
          </h6>
        </button>
      </div>
      <div className="flex flex-4 justify-end pr-20 items-center">
        <div className="grid grid-cols-2 gap-5 h-fit">
          {image.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center items-center ${index === 0 ? "col-span-2" : ""}`}>
                <Image
                  className="rounded-lg object-cover w-24.5 h-24.5"
                  src={item}
                  alt={`image-${index}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
