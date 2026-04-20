import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/images/portfolio/agile_workshop.png";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal"],
});

export default function AgileCoverSection() {
  return (
    <section
      className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden"
      data-name="Cover"
    >
      <Image
        src={heroImg}
        alt="Agile workshop session"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <h1
          className={`text-[clamp(2.5rem,6vw,4.3125rem)] font-semibold leading-[1.2] text-on-ink ${archivo.className}`}
        >
          Agile Workshops
        </h1>
        <nav
          className={`flex flex-wrap items-center justify-center gap-2 text-lg font-semibold text-on-ink ${archivo.className}`}
          aria-label="Breadcrumb"
        >
          <Link href="/portfolio" className="hover:underline">
            My Portfolio
          </Link>
          <span aria-hidden className="inline-block text-on-ink/80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-on-ink">Agile Workshops</span>
        </nav>
      </div>
    </section>
  );
}
