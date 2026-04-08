import Image from "next/image";
import tedxLogo from "../../../../public/images/tedx_logo.png";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function TedxSection() {
  return (
    <div
      className="flex h-230 flex-row bg-ink bg-cover bg-center bg-no-repeat py-27.5 px-35"
      style={{ backgroundImage: "url('/images/home/tedx_background.png')" }}
    >
      <div className="flex flex-col">
        <span
          className={`flex flex-row items-center text-stat font-semibold text-on-ink ${inter.className}`}
        >
          {"My "}
          <Image
            className="px-3.5"
            src={tedxLogo}
            alt="tedx"
            height={35}
            width={120}
          />
          {" Talk"}
        </span>
        <div className="flex flex-col pb-12.5 pt-22">
          <span className={`text-stat font-semibold text-ted ${inter.className}`}>
            Unlock Resiliency
          </span>
          <span className={`text-stat font-semibold text-on-ink ${inter.className}`}>
            with Relentless Empathy
          </span>
        </div>
        <p
          className={`text-2xl font-normal leading-relaxed whitespace-pre-line text-on-ink ${inter.className}`}
        >
          In one of the hardest moments of my life, {"\n"}
          I share intimate details of my struggles {"\n"}
          finding a sense of{" "}
          <span className="font-bold italic">self-worth</span>, and {"\n"}
          reminding others how{" "}
          <span className="font-bold italic">resilient</span>
          {" "}they truly {"\n"}
          are.
        </p>
        <div className="mt-8.5 flex w-fit items-center justify-center bg-surface px-20 py-4">
          <span className={`text-2xl font-semibold text-neutral-dark ${inter.className}`}>
            Read More
          </span>
        </div>
      </div>
    </div>
  );
}
