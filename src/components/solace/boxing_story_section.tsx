import Image from "next/image";
import { Archivo } from "next/font/google";
import boxingImg from "../../../public/images/home/boxing_solace.png";

const archivo = Archivo({ subsets: ["latin"] });

const IMPACT_POINTS: { title: string; body: string }[] = [
  {
    title: "Discipline & Commitment –",
    body: "Showing up consistently, even on tough days, has reinforced the power of routine and dedication in all aspects of life.",
  },
  {
    title: "Patience in Growth –",
    body: "Mastering techniques takes time, just like achieving any meaningful goal—it is about progress, not perfection.",
  },
  {
    title: "Resilience Under Pressure –",
    body: "Pushing through exhaustion in the ring has strengthened my ability to handle setbacks and challenges head-on.",
  },
  {
    title: "Strategic Thinking –",
    body: "Boxing is not just about strength; it is about strategy. Reading opponents and making quick decisions translates into everyday problem-solving.",
  },
  {
    title: "Perseverance & Mindset –",
    body: "Whether in boxing or life, success comes from persistence and the mindset to keep moving forward, even when the odds are against you.",
  },
];

export default function BoxingStorySection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-start md:gap-16 md:px-12 md:py-24">
        <div>
          <h2 className={`text-display font-semibold text-ink ${archivo.className}`}>My Journey Into Boxing</h2>
          <p className={`mt-6 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            My boxing journey started as a way to stay active, but it quickly became a passion. Whether it&apos;s hitting
            the heavy bag or stepping into the ring, the sport has taught me discipline, strategy, and perseverance.
          </p>
        </div>
        <div className="relative aspect-[515/300] w-full overflow-hidden rounded-[10px]">
          <Image src={boxingImg} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 515px" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-start md:gap-16 md:px-12 md:py-24">
        <div className="relative order-2 aspect-[541/396] w-full overflow-hidden rounded-[10px] md:order-1">
          <Image src={boxingImg} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 541px" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className={`text-display font-semibold text-ink ${archivo.className}`}>How It Impact My Life</h2>
          <p className={`mt-6 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            Boxing has taught me more than just how to throw a punch—it has shaped my mindset in ways I never expected.
          </p>
          <ul className="mt-8 space-y-5">
            {IMPACT_POINTS.map((item, idx) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-medium text-subtle ${archivo.className}`}
                  aria-hidden
                >
                  {idx + 1}.
                </span>
                <p className={`text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
                  <span className="font-bold text-heading">{item.title}</span> {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
