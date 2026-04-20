import Link from "next/link";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
});

const TOOL_LABELS = ["Jira", "Trello", "Miro"];

export default function AgileInstitutionsSection() {
  return (
    <section className="bg-brand px-6 py-16 md:px-12 md:py-20" data-name="Institutions">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-3xl text-on-brand">
          <h2 className={`text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.15] ${archivo.className}`}>
            Agile isn&apos;t just for tech companies
          </h2>
          <p className={`mt-6 text-lg leading-relaxed text-on-brand/95 ${archivo.className}`}>
            It&apos;s a way to work smarter, adapt faster, and create better outcomes—no matter your industry.
          </p>
          <p className={`mt-4 text-base leading-relaxed text-on-brand/90 ${archivo.className}`}>
            Let&apos;s bring Agile to your team. Reach out to learn more about customized workshops and training
            sessions.
          </p>
          <Link
            href="/#contact"
            className={`mt-8 inline-flex items-center justify-center rounded-sm bg-surface px-16 py-3 text-xl font-semibold text-ink transition hover:bg-surface-soft ${archivo.className}`}
          >
            Get In Touch
          </Link>
        </div>
        <div className="flex shrink-0 gap-4">
          {TOOL_LABELS.map((label) => (
            <div
              key={label}
              className="flex size-[98px] items-center justify-center rounded-2xl bg-surface text-sm font-semibold text-ink shadow-md"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
