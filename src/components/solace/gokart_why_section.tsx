import { Archivo } from "next/font/google";
import SolaceAccent from "./solace_accent";

const archivo = Archivo({ subsets: ["latin"] });

export default function GokartWhySection() {
  return (
    <section className="bg-surface-muted px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start gap-4">
          <SolaceAccent className="mt-2 shrink-0" />
          <h2 className={`max-w-5xl text-[clamp(2rem,4vw,4.3125rem)] font-semibold leading-[1.2] text-ink ${archivo.className}`}>
            <span className="text-brand">Go-Karting</span>
            <span>: The Need for Speed</span>
          </h2>
        </div>
        <p className={`mt-8 max-w-5xl text-2xl font-semibold leading-snug text-ink ${archivo.className}`}>
          Whether it&apos;s a casual weekend race or trying to beat my personal best, every lap is an opportunity to learn
          and improve.
        </p>
      </div>
    </section>
  );
}
