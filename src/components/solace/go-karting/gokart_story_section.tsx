import Image from "next/image";
import { Archivo } from "next/font/google";
import story1 from "../../../../public/images/solace/karting_story_1.png";
import story2 from "../../../../public/images/solace/karting_story_2.png";

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
    <section className="bg-canvas flex flex-col px-36 py-25 gap-32">
      <div className="flex flex-row gap-16 justify-between">
        <div className="flex flex-col gap-7.5">
          <h3 className={`max-w-120 text-display font-semibold text-ink ${archivo.className}`}>
            How It Started
          </h3>
          <p className={`max-w-150 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            My first experience with go-karting was purely for fun—a simple weekend outing that quickly turned into an
            obsession. From that first race, I was hooked. The feeling of speed, the strategic overtakes, and the battle
            for the best racing line made me want to keep improving.
          </p>
        </div>
        <Image
          src={story1}
          alt=""
          className="object-cover w-128.75 h-75 rounded-[10px]"
        />
      </div>

      <div className="flex flex-row gap-10.5">
        <Image
          src={story2}
          alt=""
          className="object-cover w-135.5 h-99 rounded-[10px]"
        />
        <div className="flex flex-col gap-3 w-1/2">
          <h3 className={`pb-0.75 text-display font-semibold text-ink ${archivo.className}`}>
            Lessons from the Track
          </h3>
          <span className={`max-w-140 text-base leading-relaxed text-[#4a5565] ${archivo.className}`}>
            Beyond the adrenaline rush, go-karting has taught me valuable lessons.
          </span>
          <ul className="flex flex-col w-full items-start gap-5">
            {LESSONS.map((item, index) => {
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
