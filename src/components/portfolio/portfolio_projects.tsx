import Image from "next/image";
import Link from "next/link";
import { Archivo, Archivo_Narrow } from "next/font/google";

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
    "https://www.figma.com/api/mcp/asset/f8b05767-c330-4e39-93b8-35a36f0b4431",
  catTedx:
    "https://www.figma.com/api/mcp/asset/a8a84c16-7301-4434-95b8-6d85bf8302e6",
  catUniversity:
    "https://www.figma.com/api/mcp/asset/1c3145c3-e49f-4644-b862-79fcb27a0675",
  catRally:
    "https://www.figma.com/api/mcp/asset/76085c27-7df6-4ed6-b1f1-9ad30bfdecb3",
  catAgile:
    "https://www.figma.com/api/mcp/asset/45b3c194-8f84-4f24-b3bb-3d2b38523643",
  cursorHand:
    "https://www.figma.com/api/mcp/asset/6ff65cc6-6c60-414a-94f0-3714356f42f4",
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

/** Figma: expanded footer overlaps image by 105px (image ends 741, footer starts 636). */
const SPEAKING_OVERLAP = 105;

/**
 * Category tile from the Figma grid. The “Speaking Events” variant is taller and shows
 * a short blurb under the title bar; everything else is a simple thumb + label.
 * Pass `href` when the card should navigate (e.g. Rally the Locals has its own page).
 */
function CategoryCard({
  title,
  imageSrc,
  imageHeight,
  alt,
  expanded,
  description,
  href,
}: {
  title: string;
  imageSrc: string;
  imageHeight: 463 | 458;
  alt: string;
  expanded?: boolean;
  description?: string;
  /** If set, the whole card becomes a link (used for Rally → `/rally-the-local`). */
  href?: string;
}) {
  const h = imageHeight;

  if (expanded && description) {
    return (
      <article className="relative w-full max-w-[320px] shrink-0 overflow-visible rounded-[20px] shadow-sm">
        <div
          className="relative w-full overflow-hidden rounded-t-[20px]"
          style={{ height: h }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="320px"
          />
          <Image
            src={ASSETS.cursorHand}
            alt=""
            width={36}
            height={36}
            className="pointer-events-none absolute left-71 top-92"
            aria-hidden
          />
        </div>
        <div
          className="relative z-10 flex min-h-43 w-full flex-col items-center rounded-b-[20px] bg-card-bar-active px-4 pb-5 pt-4 text-center text-on-brand"
          style={{ marginTop: -SPEAKING_OVERLAP }}
        >
          <h3 className={`text-2xl font-semibold leading-[1.2] ${archivo.className}`}>
            {title}
          </h3>
          <p
            className={`mt-3 max-w-61.5 text-sm font-normal leading-[1.2] text-border ${archivo.className}`}
          >
            {description}
          </p>
        </div>
      </article>
    );
  }

  const card = (
    <article className="w-full max-w-[320px] shrink-0 overflow-hidden rounded-[20px] bg-card-bar shadow-sm transition-opacity hover:opacity-95">
      <div className="relative w-full overflow-hidden rounded-t-[20px]" style={{ height: h }}>
        <Image src={imageSrc} alt={alt} fill className="object-cover" sizes="320px" />
      </div>
      <div
        className={`flex h-18 w-full flex-col items-center justify-center bg-card-bar px-4 text-center text-on-brand ${archivo.className}`}
      >
        <h3 className="text-2xl font-semibold leading-[1.2]">{title}</h3>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block w-full max-w-[320px] shrink-0 rounded-[20px] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {card}
      </Link>
    );
  }

  return card;
}

/** Dark “Get In Touch” band at the bottom of the portfolio frame (decorative form). */
function GetInTouchBlock() {
  const fieldClass = `h-10 w-full rounded-[2px] bg-card-bar px-3 text-sm font-medium leading-[1.2] text-on-brand placeholder:text-muted ${archivo.className}`;

  return (
    <section
      className="min-h-173.5 bg-ink px-8 py-16 md:py-24"
      data-name="Get In Touch"
      data-node-id="561:4487"
    >
      <div className="mx-auto flex max-w-360 flex-col gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-13">
        <div className="flex max-w-115.25 flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <p
            className={`text-[70px] font-medium leading-none text-canvas ${archivo.className}`}
          >
            Always here to
          </p>
          <div className="flex justify-center gap-0.5 lg:justify-start">
            {"chat!".split("").map((ch, i) => (
              <div
                key={`${ch}-${i}`}
                className={`flex size-18 items-center justify-center bg-brand text-canvas ${i === 0 ? "rounded-l-[10px]" : i === 4 ? "rounded-r-[10px]" : ""
                  }`}
              >
                <span
                  className={`text-[70px] font-normal leading-none ${archivo.className} ${ch === "!" ? "inline-block rotate-15" : ""
                    }`}
                >
                  {ch}
                </span>
              </div>
            ))}
          </div>
          <div
            className={`mt-2 text-[20px] font-medium leading-[1.4] text-canvas ${archivo.className}`}
          >
            <p>If there&apos;s anything you need,</p>
            <p>don&apos;t hesitate to reach out!</p>
          </div>
        </div>

        <div className="w-full max-w-110.5 space-y-4">
          <h2
            className={`text-display font-semibold leading-[1.2] text-on-brand ${archivo.className}`}
          >
            Get In Touch
          </h2>
          <form className="space-y-4" action="#" method="post">
            <div>
              <label htmlFor="portfolio-name" className="sr-only">
                Your Name
              </label>
              <input
                id="portfolio-name"
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="portfolio-email" className="sr-only">
                E-Mail Address
              </label>
              <input
                id="portfolio-email"
                type="email"
                name="email"
                placeholder="E-Mail Address"
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="portfolio-topic" className="sr-only">
                Select a Topic
              </label>
              <select
                id="portfolio-topic"
                name="topic"
                className={`${fieldClass} appearance-auto`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Topic
                </option>
                <option value="speaking">Speaking</option>
                <option value="services">Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="portfolio-subject" className="sr-only">
                Subject
              </label>
              <input
                id="portfolio-subject"
                type="text"
                name="subject"
                placeholder="Subject"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="portfolio-message" className="sr-only">
                Message
              </label>
              <textarea
                id="portfolio-message"
                name="message"
                placeholder="Message"
                rows={5}
                className={`${fieldClass} min-h-30 resize-y py-2.5`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/** Full portfolio page content: hero → narrative → categories → contact. */
export default function PortfolioProjects() {
  return (
    <div className="mx-auto w-full max-w-360">
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

      <GetInTouchBlock />
    </div>
  );
}
