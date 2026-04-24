import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";
import boxingImg from "../../../public/images/home/boxing_solace.png";
import runImg from "../../../public/images/home/run_solace.png";
import kartImg from "../../../public/images/home/karting_solace.png";

const archivo = Archivo({ subsets: ["latin"] });

const LINKS: {
  id: "boxing" | "10k" | "gokart";
  label: string;
  href: string;
  image: StaticImageData;
}[] = [
    { id: "boxing", label: "Boxing", href: "/solace/boxing", image: boxingImg },
    { id: "10k", label: "10k Runs", href: "/solace/10k-runs", image: runImg },
    { id: "gokart", label: "Go Karting", href: "/solace/go-karting", image: kartImg },
  ];

type Current = "boxing" | "10k" | "gokart";

export default function SolaceMoreNav({ current }: { current: Current }) {
  return (
    <section className="border-t border-[#cad5e2] bg-canvas px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className={`text-2xl font-semibold text-caption ${archivo.className}`}>My Solace</p>
        <h2 className={`mt-2 text-4xl font-semibold text-ink md:text-[40px] ${archivo.className}`}>Want to see more?</h2>
        <div className="mt-10 flex flex-col flex-wrap justify-center gap-6 md:flex-row md:justify-center">
          {LINKS.map((item) => {
            const isActive = item.id === current;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex w-full max-w-92 flex-col overflow-hidden rounded-sm border bg-surface transition md:w-[calc(33.333%-1rem)] 
                  ${isActive ? "border-border shadow-sm" : "border-border"}`}
              >
                <div className="relative aspect-368/428 w-full">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 368px" />
                </div>
                <div className="border-t border-border px-4 py-5 text-center">
                  <span className={`text-2xl font-semibold text-ink ${archivo.className}`}>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
