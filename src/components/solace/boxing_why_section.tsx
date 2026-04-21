import { Archivo } from "next/font/google";
import SolaceAccent from "./solace_accent";

const archivo = Archivo({ subsets: ["latin"] });

export default function BoxingWhySection() {
  return (
    <section className="bg-surface-muted px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start gap-4">
          <SolaceAccent className="mt-2 shrink-0" />
          <h2 className={`max-w-4xl text-[clamp(2rem,4vw,4.3125rem)] font-semibold leading-[1.2] text-ink ${archivo.className}`}>
            Why <span className="text-brand">Boxing</span> Matters to Me?
          </h2>
        </div>
        <p className={`mt-8 max-w-5xl text-2xl font-semibold leading-snug text-ink ${archivo.className}`}>
          More than just a sport, boxing is a discipline that builds resilience, focus, and strength—both mentally and
          physically.
        </p>
      </div>
    </section>
  );
}
