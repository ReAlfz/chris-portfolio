import Image from "next/image";
import workshopImg from "../../../public/images/portfolio/agile_workshop.png";
import { Archivo, Archivo_Narrow } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
});

const CERT_PLACEHOLDERS = [
  "CSM",
  "PSM I",
  "SAFe",
  "Kanban",
  "ICP-ATF",
  "ICAgile",
  "PMI-ACP",
  "LeSS",
  "SPC",
  "CAL I",
];

export default function AgileDescriptionSection() {
  return (
    <section className="bg-surface px-6 py-16 md:px-12 md:py-24" data-name="Description">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <h2
            className={`text-display font-semibold leading-[1.2] text-ink ${archivoNarrow.className}`}
          >
            Why <span className="text-brand">Agile?</span>
          </h2>
          <p className={`text-xl font-normal text-heading ${archivo.className}`}>
            Agility is more than a framework—it&apos;s a mindset.
          </p>
          <p className={`max-w-xl text-base leading-relaxed text-subtle ${archivo.className}`}>
            Through these workshops, I help teams embrace Agile principles, improve collaboration, and
            maximize value delivery. Whether you&apos;re new to Agile or looking to refine your approach,
            these sessions are designed to provide practical, hands-on strategies to help you adapt,
            innovate, and deliver with confidence.
          </p>
        </div>
        <div className="relative aspect-[492/314] w-full max-w-xl shrink-0 overflow-hidden rounded-2xl lg:max-w-[492px]">
          <Image src={workshopImg} alt="Workshop session" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 492px" />
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3 md:justify-start lg:mt-20">
        {CERT_PLACEHOLDERS.map((label) => (
          <div
            key={label}
            className={`flex h-[82px] min-w-[91px] items-center justify-center rounded-xl border border-border bg-surface-muted px-3 text-center text-xs font-medium text-subtle ${archivo.className}`}
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
