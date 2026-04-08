import Image from "next/image";
import heroImg from "../../../public/images/home/hero chris photo.png";
import { Geist_Mono } from "next/font/google";
import HomeText from "./widget/text_home";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomeSection() {
  const listSkills = [
    "Builder",
    "Founder",
    "TEDx Speaker",
    "All things pro-Agile",
    "University Instructor",
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col pr-10 pt-24">
          <h1 className="text-display font-semibold text-ink">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-brand">Chris Hoquis</span>, <br />
            pronounced like{" "}
            <br />
            <span className="underline decoration-brand underline-offset-2">Hocus Pocus</span>.
          </h1>
          <div className="flex flex-col gap-1.25 pt-18">
            {listSkills.map((item) => (
              <div key={item} className="flex flex-row items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect x="9" width="9" height="9" className="fill-ink" />
                  <rect x="9" y="9" width="9" height="9" className="fill-ink" />
                  <rect y="9" width="9" height="9" className="fill-brand" />
                </svg>
                <span
                  className={`${geistMono.className} pl-3.75 text-2xl font-semibold text-ink`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-200 w-157.5 overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover object-top"
            src={heroImg}
            alt="Hero"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8 bg-ink py-11.5">
        <HomeText title="20+" description={"years of\nprofessional IT/MIS\nexperience"} />
        <HomeText
          title="10+"
          description={
            "major industries worked across,\nincluding tech, aerospace, HR,\nand hospitality"
          }
        />
        <HomeText
          title="1500+"
          description={"students taught at\nthe University post\ngraduate level"}
        />
        <HomeText title="150+" description={"professional and\nacademia courses\ndelivered"} />
        <HomeText
          title="15+"
          description={"professional industry\ncertifications and/or\ndesignations attained"}
        />
      </div>
    </div>
  );
}
