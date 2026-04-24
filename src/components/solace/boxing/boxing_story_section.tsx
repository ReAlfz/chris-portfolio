import Image from "next/image";
import { Archivo } from "next/font/google";
import boxing1 from "../../../../public/images/solace/boxing_story_1.png";
import boxing2 from "../../../../public/images/solace/boxing_story_2.png";

const archivo = Archivo({ subsets: ["latin"] });

const IMPACT_POINTS: { title: string; body: string }[] = [
  {
    title: "Discipline & Commitment – ",
    body: "Showing up consistently, even on tough days, has reinforced the power of routine and dedication in all aspects of life.",
  },
  {
    title: "Patience in Growth – ",
    body: "Mastering techniques takes time, just like achieving any meaningful goal—it is about progress, not perfection.",
  },
  {
    title: "Resilience Under Pressure – ",
    body: "Pushing through exhaustion in the ring has strengthened my ability to handle setbacks and challenges head-on.",
  },
  {
    title: "Strategic Thinking – ",
    body: "Boxing is not just about strength; it is about strategy. Reading opponents and making quick decisions translates into everyday problem-solving.",
  },
  {
    title: "Perseverance & Mindset – ",
    body: "Whether in boxing or life, success comes from persistence and the mindset to keep moving forward, even when the odds are against you.",
  },
];

export default function BoxingStorySection() {
  return (
    <section className="bg-canvas flex flex-col px-36 py-25 gap-32">
      <div className="flex flex-row gap-16 justify-between">
        <div className="flex flex-col gap-7.5">
          <h3 className={`max-w-120 text-display font-semibold text-ink ${archivo.className}`}>
            My Journey Into Boxing
          </h3>
          <p className={`max-w-150 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            My boxing journey started as a way to stay active, but it quickly became a passion. Whether it&apos;s hitting
            the heavy bag or stepping into the ring, the sport has taught me discipline, strategy, and perseverance.
          </p>
        </div>
        <Image
          src={boxing1}
          alt=""
          className="object-cover w-128.75 h-75 rounded-[10px]"
        />
      </div>

      <div className="flex flex-row gap-10.5">
        <Image
          src={boxing2}
          alt=""
          className="object-cover w-135.5 h-99 rounded-[10px]"
        />
        <div className="flex flex-col gap-3 w-1/2">
          <h3 className={`pb-0.75 text-display font-semibold text-ink ${archivo.className}`}>
            How It Impact My Life
          </h3>
          <span className={`max-w-140 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            Boxing has taught me more than just how to throw a punch—it has shaped my mindset in ways I never expected.
          </span>
          <ul className="flex flex-col w-full items-start gap-5">
            {IMPACT_POINTS.map((item, index) => {
              return (
                <li key={item.title} className="flex flex-row gap-4 justify-start">
                  <div className="relative flex items-center justify-center border-2 border-[#6A7282] rounded-full w-7 h-7 p-2">
                    <span className={`inset-0 text-base text-[#4A5565] ${archivo.className}`}>
                      {index + 1}.
                    </span>
                  </div>
                  <span className={`text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
                    <span className="font-bold text-heading">
                      {item.title}
                    </span>
                    {item.body}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
