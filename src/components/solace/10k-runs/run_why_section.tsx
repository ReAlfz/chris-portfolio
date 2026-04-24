import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function RunWhySection() {
  return (
    <section className="bg-surface-muted px-36 pt-21 pb-25 flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" width="15" height="15" fill="#101920" />
          <rect x="15" y="15" width="15" height="15" fill="#101920" />
          <rect y="15" width="15" height="15" fill="#1A9B66" />
        </svg>

        <h2 className={`text-[69px] text-black font-semibold ${archivo.className}`}>
          {"Why i "}
          <span className="text-brand">
            Run
          </span>
          {"?"}
        </h2>
      </div>

      <span className={`text-2xl text-black font-semibold ${archivo.className}`}>
        {"Running isn’t just about crossing the finish line—it’s about "}
        <span className="text-brand">
          {"discipline"}
        </span>
        {", "}
        <span className="text-brand">
          {"perseverance"}
        </span>
        {", and "}
        <span className="text-brand">
          {"community"}
        </span>
        .
      </span>

      <span className={`max-w-275 text-2xl text-black font-semibold ${archivo.className}`}>
        Whether for fitness, charity, or personal growth, I’ve taken part in multiple 10K runs, each with its own story and impact.
      </span>
      {/* <div className="mx-auto max-w-4xl">
        <div className="flex items-start gap-4">
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
      </div> */}
    </section>
  );
}
