import Image from "next/image";
import { Archivo, Archivo_Narrow } from "next/font/google";
import InTouch from "../in_touch";
import CategoryCard from "./widget/category_card";
import speakEvent from "./../../../public/images/portfolio/speaking_event.png";
import tedTalk from "./../../../public/images/portfolio/tedx_talk.jpg";
import uniClass from "./../../../public/images/portfolio/university_class.png";
import rallyLocal from "./../../../public/images/portfolio/rally_the_local.png";
import agileWork from "./../../../public/images/portfolio/agile_workshop.png";

/**
 * Portfolio landing — built from the “My Portfolio” frame in Figma (node 266:816).
 *
 * What you’re looking at:
 * - A full-bleed hero, personal narrative with masked portrait, category cards, and a
 *   contact form block. Spacing and type sizes were matched to the 1440px desktop frame,
 *   then loosened slightly for smaller breakpoints so nothing collides.
 * - Remote images point at Figma MCP asset URLs; they expire about weekly unless you
 *   download them into `public/` and swap the paths in `ASSETS` below.
 */
const ASSETS = {
  heroBg:
    "https://www.figma.com/api/mcp/asset/d7b9f95e-c488-4e32-9eaf-496be4f75804",
  portrait:
    "https://www.figma.com/api/mcp/asset/345ba61b-9ba8-4b96-8c6b-0481e1a19654",
  portraitMask:
    "https://www.figma.com/api/mcp/asset/9945cbc3-d491-4ff5-b2c5-b21350cd0f7e",
  frameOutline:
    "https://www.figma.com/api/mcp/asset/2e0024f6-f6a4-440a-9e2a-009ef9fed4cc",
  zBlock:
    "https://www.figma.com/api/mcp/asset/e5d60d32-75b8-49ed-8a4d-f1ca88a8fa91",
  narrativeDeco1:
    "https://www.figma.com/api/mcp/asset/68ac7503-b379-4f51-9929-4fc2d4c6cbf8",
  narrativeDeco2:
    "https://www.figma.com/api/mcp/asset/51a6717c-39ad-49b2-99cf-3263a5ac4a2b",
  narrativeDeco3:
    "https://www.figma.com/api/mcp/asset/a7e2bd13-bcb6-4d58-8be3-5021c8b39172",
  narrativeLine:
    "https://www.figma.com/api/mcp/asset/bee19b63-589e-4c12-83b7-a2ca1b2597d7",
  catSpeaking:
    speakEvent,
  catTedx:
    tedTalk,
  catUniversity:
    uniClass,
  catRally:
    rallyLocal,
  catAgile:
    agileWork,
} as const;

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

/** Full portfolio page content: hero → narrative → categories → contact. */
export default function PortfolioProjects() {
  return (
    <div className="mx-auto w-full">
      {/* Cover — Figma 272:2246 */}
      <section
        className="relative h-125 w-full overflow-hidden bg-hero-mint"
        data-node-id="272:2246"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element -- Figma 1:1 crop uses % height/offset */}
          <img
            src={ASSETS.heroBg}
            alt=""
            className="absolute left-0 top-[-5.48%] h-[192.02%] w-full max-w-none object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[rgba(28,28,40,0.49)]" aria-hidden />
        </div>
        <div className="relative flex h-full items-center justify-center px-8">
          <h1
            className={`text-center text-[69px] font-semibold leading-[1.2] text-on-brand ${archivo.className}`}
          >
            My Portfolio
          </h1>
        </div>
      </section>

      {/* Narrative — Figma 269:1183, min-height 722 */}
      <section
        className="relative min-h-180.5 overflow-hidden bg-surface px-6 py-16 md:px-12 md:py-20"
        data-name="Narrative"
        data-node-id="269:1183"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 max-w-100 lg:block"
          aria-hidden
        >
          <div className="absolute right-8 top-3 h-50 w-30 opacity-90">
            <Image
              src={ASSETS.narrativeDeco1}
              alt=""
              width={120}
              height={200}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute right-32 top-64 h-30 w-34.75 -rotate-15 opacity-90">
            <Image
              src={ASSETS.narrativeDeco2}
              alt=""
              width={139}
              height={120}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute right-20 top-0 h-37.5 w-38.75 opacity-90">
            <Image
              src={ASSETS.narrativeDeco3}
              alt=""
              width={155}
              height={150}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="relative z-1 mx-auto flex max-w-300 flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="relative shrink-0 pl-4">
            <div className="relative h-74.25 w-52.75">
              <Image
                src={ASSETS.frameOutline}
                alt=""
                fill
                className="object-contain"
                sizes="211px"
              />
            </div>
            <div
              className="absolute left-1/2 top-8.5 z-1 h-74 w-53 -translate-x-1/2 overflow-hidden"
              style={{
                WebkitMaskImage: `url('${ASSETS.portraitMask}')`,
                maskImage: `url('${ASSETS.portraitMask}')`,
                WebkitMaskSize: "211px 296px",
                maskSize: "211px 296px",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={ASSETS.portrait}
                  alt="Chris Hoquis"
                  fill
                  className="object-cover"
                  sizes="212px"
                />
              </div>
            </div>
            <div className="absolute left-0 top-0 z-2 w-16.5">
              <Image
                src={ASSETS.zBlock}
                alt=""
                width={66}
                height={44}
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-169.75 flex-1 text-center lg:text-left">
            <div
              className={`text-[40px] font-semibold leading-normal text-narrative ${archivoNarrow.className}`}
            >
              <p>When I look back at my life,</p>
              <p>
                I don&apos;t want to give{" "}
                <span className="font-normal italic">&apos;anything is possible&apos;</span>
              </p>
              <p>cliché statements to try to motivate.</p>
            </div>
            <p
              className={`mx-auto mt-8 max-w-116.5 text-[20px] font-normal leading-normal text-narrative lg:mx-0 ${archivo.className}`}
            >
              I want others to see that I came from sincere belief that I did not deserve to be
              alive. To come from that, and accomplish what I&apos;ve done should remind others
              that they&apos;re{" "}
              <span className="font-semibold italic">worth more</span> than they think.
            </p>
            <div className="mx-auto mt-8 hidden h-px w-26 lg:mx-0 lg:block">
              <Image
                src={ASSETS.narrativeLine}
                alt=""
                width={104}
                height={4}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories — Figma 362:935 */}
      <section
        className="bg-ink px-6 py-16 md:px-12 md:pb-28 md:pt-35"
        data-name="Content"
        data-node-id="362:935"
      >
        <h2
          className={`mb-16 text-center text-display font-semibold leading-[1.2] text-on-brand ${archivo.className}`}
        >
          Categories
        </h2>

        <div className="mx-auto flex max-w-252 flex-col items-center gap-10">
          <div className="grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-10 md:grid-cols-3">
            <CategoryCard
              title="Speaking Events"
              imageSrc={ASSETS.catSpeaking}
              imageHeight={463}
              alt="Speaking events"
              expanded
              description={`I've had the opportunity to speak at conferences, panels, and workshops, sharing insights on business, technology, and career growth to help others navigate their own paths.`}
            />
            <CategoryCard
              title="My TEDx Talk"
              imageSrc={ASSETS.catTedx}
              imageHeight={463}
              alt="TEDx talk"
            />
            <CategoryCard
              title="University Classes"
              imageSrc={ASSETS.catUniversity}
              imageHeight={463}
              alt="University classes"
            />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-10">
            <CategoryCard
              title="Rally the Locals"
              imageSrc={ASSETS.catRally}
              imageHeight={458}
              alt="Rally the Locals"
              href="/rally-the-local"
            />
            <CategoryCard
              title="Agile Workshops"
              imageSrc={ASSETS.catAgile}
              imageHeight={458}
              alt="Agile workshops"
            />
          </div>
        </div>
      </section>

      <InTouch />
    </div>
  );
}
