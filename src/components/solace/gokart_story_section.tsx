import Image from "next/image";
import { Archivo } from "next/font/google";
import kartImg from "../../../public/images/home/karting_solace.png";

const archivo = Archivo({ subsets: ["latin"] });

const LESSONS: { title: string; body: string }[] = [
  {
    title: "Focus & Precision –",
    body: "Every turn requires full concentration and precise control, teaching the importance of staying sharp in high-pressure situations.",
  },
  {
    title: "Patience & Timing –",
    body: "Overtaking is not just about speed; it is about waiting for the right moment—a lesson that applies to racing and decision-making in life.",
  },
  {
    title: "Quick Decision-Making –",
    body: "Reacting in a split second to unexpected situations on the track builds the ability to think fast and stay composed under pressure.",
  },
];

export default function GokartStorySection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-start md:gap-16 md:px-12 md:py-24">
        <div>
          <h2 className={`text-display font-semibold text-ink ${archivo.className}`}>How It Started</h2>
          <p className={`mt-6 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            My first experience with go-karting was purely for fun—a simple weekend outing that quickly turned into an
            obsession. From that first race, I was hooked. The feeling of speed, the strategic overtakes, and the battle
            for the best racing line made me want to keep improving.
          </p>
        </div>
        <div className="relative aspect-[515/300] w-full overflow-hidden rounded-[10px]">
          <Image src={kartImg} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 515px" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-start md:gap-16 md:px-12 md:py-24">
        <div className="relative order-2 aspect-[541/344] w-full overflow-hidden rounded-[10px] md:order-1">
          <Image src={kartImg} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 541px" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className={`text-display font-semibold text-ink ${archivo.className}`}>Lessons from the Track</h2>
          <p className={`mt-6 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            Beyond the adrenaline rush, go-karting has taught me valuable lessons.
          </p>
          <ul className="mt-8 space-y-5">
            {LESSONS.map((item, idx) => (
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
