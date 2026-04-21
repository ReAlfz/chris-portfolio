import { Archivo } from "next/font/google";
import SolaceAccent from "./solace_accent";

const archivo = Archivo({ subsets: ["latin"] });

export default function TenKWhySection() {
  return (
    <section className="bg-surface-muted px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-start gap-4">
          <SolaceAccent className="mt-2 shrink-0" />
          <h2 className={`text-4xl font-semibold text-ink md:text-[40px] ${archivo.className}`}>
            Why I <span className="text-brand">Run</span>?
          </h2>
        </div>
        <p className={`mt-8 text-base leading-relaxed text-subtle md:text-lg ${archivo.className}`}>
          Running clears my head and reminds me what steady effort can build. It is not only about pace or medals—it is
          about{" "}
          <span className="font-semibold text-brand">discipline, perseverance, and community</span>
          {" "}when the course gets hard and the weather does not cooperate.
        </p>
        <p className={`mt-4 text-base leading-relaxed text-subtle ${archivo.className}`}>
          Every finish line is practice for showing up elsewhere in life: prepared, patient, and willing to go again.
        </p>
      </div>
    </section>
  );
}
