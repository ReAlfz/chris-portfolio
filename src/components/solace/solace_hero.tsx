import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

type Props = {
  title: string;
  image: StaticImageData;
};

export default function SolaceHero({ title, image }: Props) {
  return (
    <section className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(28,28,40,0.88)] z-2" aria-hidden />
      <Image
        src={image}
        alt=""
        className="object-cover absolute z-1 w-full h-full"
        style={{ objectPosition: "center 70%" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <h1 className={`text-[clamp(2.25rem,5vw,4.3125rem)] font-semibold leading-[1.2] text-on-ink ${archivo.className}`}>
          {title}
        </h1>
        <nav
          className={`flex flex-wrap items-center justify-center gap-3 text-2xl font-semibold ${archivo.className}`}
          aria-label="Breadcrumb"
        >
          <Link href="/#my-solace" className="text-muted hover:text-on-ink">
            My Solace
          </Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-on-ink" aria-hidden>
            <path fillRule="evenodd" clipRule="evenodd" d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z" fill="currentColor" />
          </svg>
          <span className="text-on-ink">{title}</span>
        </nav>
      </div>
    </section>
  );
}
