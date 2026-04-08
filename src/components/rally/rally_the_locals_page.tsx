/**
 * Rally The Locals — marketing / case-study style landing page.
 *
 * Source of truth: Figma file `Fjz0sKrNyk7IhKLvAxv0LV`, node `99:1876`
 * (“Rally The Locals”). The export is a 1440px-wide desktop frame; we center
 * content with `max-w-[1440px]` and let sections stack vertically. The design
 * file includes its own navbar + footer — those are omitted here because
 * `src/app/layout.tsx` already renders the real site chrome.
 *
 * Asset URLs come from Figma MCP and expire after ~7 days. When they break,
 * re-export from Figma or drop files into `public/` and point the ASSETS map
 * at local paths instead.
 */

import Image from "next/image";
import Link from "next/link";
import { Archivo, Poppins } from "next/font/google";
import RallyStoriesCarousel from "@/components/rally/rally_stories_carousel";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

/** Figma uses Poppins for the big hashtag stack in the closing collage; we match it. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

// --- Images exported from Figma (MCP). Names describe usage, not layer names. ---
const ASSETS = {
  heroBg:
    "https://www.figma.com/api/mcp/asset/8efae39b-b634-42fb-8c17-a8edf3d8104a",
  whatPhoto:
    "https://www.figma.com/api/mcp/asset/355f95f0-70ea-424a-9365-7973c54803c6",
  whyPhoto:
    "https://www.figma.com/api/mcp/asset/ab37afd2-79eb-405c-ba48-ac46bb02297c",
  rtl2: "https://www.figma.com/api/mcp/asset/8efae39b-b634-42fb-8c17-a8edf3d8104a",
  rtl31:
    "https://www.figma.com/api/mcp/asset/55295415-55be-40c2-973c-16d28b8ccc9b",
  rtl5: "https://www.figma.com/api/mcp/asset/ad4087c2-076f-4399-a74f-a79dc84d985c",
  rtl53:
    "https://www.figma.com/api/mcp/asset/32a1ae2b-0a00-49f7-94ef-7a6c5ecae0af",
  svcSocial:
    "https://www.figma.com/api/mcp/asset/59c6aa7e-a752-4430-b664-d04366f311e5",
  svcContent:
    "https://www.figma.com/api/mcp/asset/4422301f-7380-4f20-b2f1-c758f31a9b9c",
  svcBrand:
    "https://www.figma.com/api/mcp/asset/f42bcabb-7f68-47ac-8529-59f69c07cba7",
  svcWeb:
    "https://www.figma.com/api/mcp/asset/45d486b1-da27-4471-9f1c-5b10d5be094d",
  cursor:
    "https://www.figma.com/api/mcp/asset/195b0852-8211-434e-ae21-64f275086be0",
  heartMascot:
    "https://www.figma.com/api/mcp/asset/2dd63a46-f87f-4515-9647-8093713aee46",
  ico1: "https://www.figma.com/api/mcp/asset/43d0af8d-1608-4bce-b099-12bacf457cbf",
  ico2: "https://www.figma.com/api/mcp/asset/a5a23431-c963-49c7-b4fe-3cc11e091a40",
  ico3: "https://www.figma.com/api/mcp/asset/08a40c0f-adfd-46b6-8afb-c81ae2666138",
  ico4: "https://www.figma.com/api/mcp/asset/2eb95fb9-1244-4d03-82b1-535da509d3c6",
  ellipseLight:
    "https://www.figma.com/api/mcp/asset/a039b4c5-8370-4990-b990-40ec8f2d12a5",
  ellipseDark:
    "https://www.figma.com/api/mcp/asset/1cb6bb2f-e683-409a-aeaf-59867518d05f",
  cursorCore:
    "https://www.figma.com/api/mcp/asset/efced7d3-0ea6-486a-b3a4-bb1cff6b4728",
  vectorHand:
    "https://www.figma.com/api/mcp/asset/020139b7-0904-4a13-8902-f2dd867c8299",
  partnerA:
    "https://www.figma.com/api/mcp/asset/9484b5d1-90e8-40db-bc1d-3af265329d0f",
  partnerB:
    "https://www.figma.com/api/mcp/asset/55cb3de5-a76f-4006-8574-aa86e14e3c6e",
  partnerC:
    "https://www.figma.com/api/mcp/asset/9dee9b57-c940-40f9-b57c-9211534427eb",
  mascotFlip:
    "https://www.figma.com/api/mcp/asset/f647b8a8-11ca-46a6-8300-59da0d9ca246",
  arrowBreadcrumb:
    "https://www.figma.com/api/mcp/asset/9b52aae0-ef1d-4bd5-9304-335952406671",
  arrowLeft:
    "https://www.figma.com/api/mcp/asset/62bc00f8-987c-4951-889f-c4b9fbd929ff",
  arrowRight:
    "https://www.figma.com/api/mcp/asset/6fa76810-2a2a-4fcc-ba0a-4fce3efac4ba",
  instagramStory:
    "https://www.figma.com/api/mcp/asset/6c2b29b8-dcdc-4bf8-a703-fb1066cd9c1c",
  socialIn: "https://www.figma.com/api/mcp/asset/b494f6e2-00d0-4701-ac70-0faecda25c93",
  socialIg: "https://www.figma.com/api/mcp/asset/cc1da729-0e42-44e3-baa9-6f14eefe343c",
  socialFb: "https://www.figma.com/api/mcp/asset/c8e66fcf-2443-4d13-a4e5-9e01108b907e",
  socialYt: "https://www.figma.com/api/mcp/asset/11081811-c6b8-43db-a2db-a4f602d8e903",
} as const;

/** Photo tiles in the closing collage — positions are copied from Figma (1440×900 frame). */
const CLOSING_MOSAIC: { src: string; left: number; top: number; w: number; h: number }[] =
  [
    { src: ASSETS.rtl53, left: 577, top: 0, w: 288.936, h: 193 },
    { src: ASSETS.rtl53, left: 290, top: 193, w: 288.936, h: 193 },
    { src: ASSETS.rtl53, left: 2, top: 386, w: 288.936, h: 193 },
    { src: ASSETS.rtl53, left: 1154, top: 386, w: 288.936, h: 193 },
    { src: ASSETS.rtl53, left: 867, top: 579, w: 288.936, h: 193 },
    { src: ASSETS.rtl53, left: 579, top: 772, w: 288.936, h: 193 },
    { src: ASSETS.whyPhoto, left: 1152, top: 0, w: 288, h: 193 },
    { src: ASSETS.whyPhoto, left: 865, top: 193, w: 288, h: 193 },
    { src: ASSETS.whyPhoto, left: 577, top: 386, w: 288, h: 193 },
    { src: ASSETS.whyPhoto, left: 290, top: 579, w: 288, h: 193 },
    { src: ASSETS.whyPhoto, left: 2, top: 772, w: 288, h: 193 },
    { src: ASSETS.whyPhoto, left: 1155, top: 772, w: 288, h: 193 },
    { src: ASSETS.whyPhoto, left: 0, top: 0, w: 288, h: 193 },
    { src: ASSETS.rtl31, left: 864, top: 0, w: 288, h: 193 },
    { src: ASSETS.rtl31, left: 577, top: 193, w: 288, h: 193 },
    { src: ASSETS.rtl31, left: 289, top: 386, w: 288, h: 193 },
    { src: ASSETS.rtl31, left: 2, top: 579, w: 288, h: 193 },
    { src: ASSETS.rtl31, left: 1155, top: 579, w: 288, h: 193 },
    { src: ASSETS.rtl31, left: 867, top: 772, w: 288, h: 193 },
    { src: ASSETS.rtl2, left: 288, top: 0, w: 289, h: 193 },
    { src: ASSETS.rtl2, left: 1, top: 193, w: 289, h: 193 },
    { src: ASSETS.rtl2, left: 1153, top: 193, w: 289, h: 193 },
    { src: ASSETS.rtl2, left: 865, top: 386, w: 289, h: 193 },
    { src: ASSETS.rtl2, left: 578, top: 579, w: 289, h: 193 },
    { src: ASSETS.rtl2, left: 290, top: 772, w: 289, h: 193 },
  ];

/** One row of partner marks in the “Grateful…” grid (Figma repeats three bitmaps). */
function PartnerLogoRow({ topClass }: { topClass: string }) {
  const logos = [
    { src: ASSETS.partnerA, w: 69, h: 49 },
    { src: ASSETS.partnerB, w: 57, h: 38 },
    { src: ASSETS.partnerC, w: 45, h: 39 },
    { src: ASSETS.partnerA, w: 68, h: 49 },
    { src: ASSETS.partnerB, w: 56, h: 37 },
    { src: ASSETS.partnerC, w: 44, h: 39 },
    { src: ASSETS.partnerA, w: 69, h: 49 },
    { src: ASSETS.partnerB, w: 57, h: 38 },
    { src: ASSETS.partnerC, w: 45, h: 39 },
    { src: ASSETS.partnerA, w: 68, h: 49 },
    { src: ASSETS.partnerB, w: 56, h: 37 },
    { src: ASSETS.partnerC, w: 44, h: 39 },
    { src: ASSETS.partnerA, w: 69, h: 49 },
  ];
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 md:gap-[9px] ${topClass}`}
    >
      {logos.map((logo, i) => (
        <div
          key={`${logo.src}-${i}`}
          className="relative shrink-0 mix-blend-multiply"
          style={{ width: logo.w, height: logo.h }}
        >
          <Image
            src={logo.src}
            alt=""
            fill
            className="object-cover"
            sizes={`${logo.w}px`}
          />
        </div>
      ))}
    </div>
  );
}

function StatTile({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative size-[259px] shrink-0 overflow-hidden rounded-[10px]">
      <Image src={imageSrc} alt="" fill className="object-cover" sizes="259px" />
      <div
        className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.7)] via-[55.8%] to-[rgba(37,37,37,0.7)]"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-on-brand">
        <p className={`text-[53px] font-semibold leading-[1.2] ${archivo.className}`}>
          147
        </p>
        <p className={`mt-2 text-2xl font-semibold leading-[1.2] ${archivo.className}`}>
          Partnerships
        </p>
      </div>
    </div>
  );
}

export default function RallyTheLocalsPage() {
  return (
    <div className="w-full bg-surface">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* --- Hero / cover (Figma 99:1929) — same treatment as portfolio hero --- */}
        <section
          className="relative h-[500px] w-full overflow-hidden"
          data-node-id="99:1929"
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- large art-directed crop from Figma */}
            <img
              src={ASSETS.heroBg}
              alt=""
              className="absolute left-[-9.4%] top-[-58%] h-[164.8%] w-[118.8%] max-w-none object-cover"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 bg-[rgba(28,28,40,0.49)]"
              aria-hidden
            />
          </div>
          <div className="relative flex h-full flex-col items-center justify-center px-6 pt-8">
            <h1
              className={`text-center text-[48px] font-semibold leading-[1.2] text-on-brand md:text-[69px] ${archivo.className}`}
            >
              Rally The Locals
            </h1>
            <nav
              className={`mt-6 flex items-center gap-3 text-lg font-semibold text-on-brand md:text-2xl ${archivo.className}`}
              aria-label="Breadcrumb"
            >
              <Link href="/portfolio" className="hover:underline">
                My Portfolio
              </Link>
              <span className="inline-flex size-6 rotate-90 items-center justify-center opacity-90">
                <Image
                  src={ASSETS.arrowBreadcrumb}
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
              <span className="text-on-brand">Rally The Locals</span>
            </nav>
          </div>
        </section>

        {/* --- Long explainer band: “What is…” + “Why…” (Figma 99:1920) --- */}
        <section
          className="bg-canvas px-6 py-16 md:px-[144px] md:py-24"
          data-node-id="99:1920"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-12">
            <div className="order-1 space-y-6 lg:order-none">
              <h2
                className={`text-[40px] font-semibold leading-[1.2] text-ink md:text-[53px] ${archivo.className}`}
              >
                What is
                <br />
                Rally the Locals?
              </h2>
              <p
                className={`text-2xl font-semibold leading-[1.2] text-ink ${archivo.className}`}
              >
                Rally The Locals is a platform that showcases local businesses on a
                meaningful level.
              </p>
              <p
                className={`max-w-[569px] text-lg leading-[1.2] text-[#4a5565] ${archivo.className}`}
              >
                We share stories, highlight the impact they&apos;ve made in the
                community and allow customers to know the people behind the
                products and services they enjoy.
              </p>
              <a
                href="https://www.rallythelocals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-[2px] bg-brand px-10 py-4 text-2xl font-semibold text-on-brand ${archivo.className}`}
              >
                Learn More
              </a>
            </div>
            <div className="order-2 overflow-hidden rounded-[10px] lg:order-none">
              <div className="relative aspect-[495/331] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={ASSETS.whatPhoto}
                  alt="Rally The Locals team at an event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 495px"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:mt-28 lg:grid-cols-2 lg:items-start lg:gap-x-12">
            <div className="overflow-hidden rounded-[10px]">
              <div className="relative aspect-[496/331] w-full">
                <Image
                  src={ASSETS.whyPhoto}
                  alt="Community conversation"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 496px"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2
                className={`text-[40px] font-semibold leading-[1.2] text-ink ${archivo.className}`}
              >
                Why Rally The Locals?
              </h2>
              <p
                className={`text-2xl italic leading-[1.2] text-[#4a5565] ${archivo.className}`}
              >
                “Competition is great, but communities and working together are
                better.”
              </p>
              <p
                className={`text-lg leading-[1.2] text-[#4a5565] ${archivo.className}`}
              >
                Great businesses thrive on real connections. We help local
                businesses build trust, share stories, and grow through community
                support. When we work together, everyone wins.
              </p>
            </div>
          </div>
        </section>

        {/* --- Core values on brand green (Figma 253:471) --- */}
        <section
          className="bg-brand px-6 py-14 md:px-[144px] md:py-16"
          data-node-id="253:471"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">
            <div className="relative">
              <h2
                className={`text-[40px] font-semibold leading-[1.2] text-on-brand md:text-[53px] ${archivo.className}`}
              >
                Our Core Values
              </h2>
              <p
                className={`mt-2 text-[24px] font-semibold text-brand-tint md:text-[31px] ${archivo.className}`}
              >
                The Heart of Rally The Locals
              </p>
              <div className="relative mx-auto mt-10 h-[320px] w-[280px] md:mx-0 md:h-[414px] md:w-[368px]">
                <Image
                  src={ASSETS.heartMascot}
                  alt=""
                  fill
                  className="object-contain object-left-bottom"
                  sizes="368px"
                />
              </div>
              {/* Figma had a tiny callout next to the mascot; we keep it as normal text so it reflows on small screens. */}
              <div className="mt-4 flex items-start gap-2 text-on-brand md:max-w-xs">
                <p className={`text-base leading-[1.3] ${archivo.className}`}>
                  Meet our mascot,
                  <br />
                  (their name)
                </p>
                <Image
                  src={ASSETS.vectorHand}
                  alt=""
                  width={26}
                  height={28}
                  className="mt-1 shrink-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Card 1 — solid white (Figma 253:474) */}
              <article className="relative rounded-[10px] bg-surface-soft px-6 pb-8 pt-14 text-center shadow-sm">
                <div className="absolute left-1/2 top-3 size-[57px] -translate-x-1/2">
                  <Image
                    src={ASSETS.ellipseLight}
                    alt=""
                    width={57}
                    height={57}
                  />
                  <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2">
                    <Image src={ASSETS.ico1} alt="" width={40} height={40} />
                  </div>
                </div>
                <h3
                  className={`text-2xl font-semibold text-ink ${archivo.className}`}
                >
                  Resilience
                </h3>
                <p
                  className={`mt-4 text-base leading-[1.3] text-narrative ${archivo.className}`}
                >
                  Local businesses have faced challenges head-on, adapting and
                  evolving with unwavering strength. We stand with them, embracing
                  change and growth.
                </p>
              </article>

              {/* Card 2 — frosted; Innovation copy (Figma 253:481) */}
              <article className="relative rounded-[10px] bg-white/20 px-6 pb-8 pt-14 text-center text-on-brand shadow-sm backdrop-blur-[2px]">
                <div className="absolute left-1/2 top-3 size-[57px] -translate-x-1/2">
                  <Image
                    src={ASSETS.ellipseDark}
                    alt=""
                    width={57}
                    height={57}
                  />
                  <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2">
                    <Image src={ASSETS.ico2} alt="" width={40} height={40} />
                  </div>
                </div>
                <h3 className={`text-2xl font-semibold ${archivo.className}`}>
                  Innovation
                </h3>
                <p className={`mt-4 text-base leading-[1.3] ${archivo.className}`}>
                  We think outside the box to help businesses shine. From crafting
                  clear value propositions to driving visibility, we&apos;re always
                  pushing for creative solutions.
                </p>
              </article>

              <article className="relative rounded-[10px] bg-white/20 px-6 pb-8 pt-14 text-center text-on-brand shadow-sm backdrop-blur-[2px]">
                <div className="absolute left-1/2 top-3 size-[57px] -translate-x-1/2">
                  <Image
                    src={ASSETS.ellipseDark}
                    alt=""
                    width={57}
                    height={57}
                  />
                  <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2">
                    <Image src={ASSETS.ico3} alt="" width={40} height={40} />
                  </div>
                </div>
                <h3 className={`text-2xl font-semibold ${archivo.className}`}>
                  Selfless
                </h3>
                <p className={`mt-4 text-base leading-[1.3] ${archivo.className}`}>
                  People always come first. How we drive value to customers and
                  local businesses remains our utmost priority.
                </p>
              </article>

              <article className="relative rounded-[10px] bg-white/20 px-6 pb-8 pt-14 text-center text-on-brand shadow-sm backdrop-blur-[2px]">
                <div className="absolute left-1/2 top-3 size-[57px] -translate-x-1/2">
                  <Image
                    src={ASSETS.ellipseDark}
                    alt=""
                    width={57}
                    height={57}
                  />
                  <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2">
                    <Image src={ASSETS.ico4} alt="" width={40} height={40} />
                  </div>
                </div>
                <h3 className={`text-2xl font-semibold ${archivo.className}`}>
                  Sustainability
                </h3>
                <p className={`mt-4 text-base leading-[1.3] ${archivo.className}`}>
                  {/* Figma duplicates the Selfless blurb on this card — kept on purpose for parity. */}
                  People always come first. How we drive value to customers and
                  local businesses remains our utmost priority.
                </p>
              </article>
            </div>
          </div>
          <div className="relative mt-6 hidden justify-end pr-8 lg:flex">
            <Image src={ASSETS.cursorCore} alt="" width={24} height={24} />
          </div>
        </section>

        {/* --- “What Do We Do” — dark stack with mascot illustrations (Figma 237:1657) --- */}
        <section
          className="bg-ink px-6 py-16 text-on-brand md:px-[144px] md:py-24"
          data-node-id="237:1657"
        >
          <div className="text-center">
            <h2
              className={`text-[40px] font-semibold leading-[1.2] md:text-[53px] ${archivo.className}`}
            >
              What Do We Do
            </h2>
            <p
              className={`mt-2 text-[24px] font-semibold text-brand md:text-[31px] ${archivo.className}`}
            >
              Services
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-[1000px] flex-col gap-10">
            {/* Row 1 */}
            <div className="relative overflow-hidden rounded-[20px] bg-white/10 p-6 md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative mx-auto h-[220px] w-[280px] md:h-[276px] md:w-[360px]">
                  <Image
                    src={ASSETS.svcSocial}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="360px"
                  />
                </div>
                <div>
                  <h3
                    className={`text-[28px] font-semibold leading-[1.2] md:text-[31px] ${archivo.className}`}
                  >
                    Social Media Management
                  </h3>
                  <p
                    className={`mt-3 text-lg leading-[1.2] text-border-card ${archivo.className}`}
                  >
                    Building engagement, strategy, and consistency across platforms.
                  </p>
                </div>
              </div>
              <div className="absolute right-8 top-6 hidden md:block">
                <Image src={ASSETS.cursor} alt="" width={24} height={24} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden rounded-[20px] bg-white/5 p-6 md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="order-2 md:order-none">
                  <h3
                    className={`text-[28px] font-semibold leading-[1.2] text-border md:text-[31px] ${archivo.className}`}
                  >
                    Content Creation
                  </h3>
                  <p
                    className={`mt-3 text-lg leading-[1.2] text-border ${archivo.className}`}
                  >
                    Crafting compelling stories that connect with your audience.
                  </p>
                </div>
                <div className="relative order-1 mx-auto h-[260px] w-full max-w-[589px] md:order-none md:h-[342px]">
                  <Image
                    src={ASSETS.svcContent}
                    alt=""
                    fill
                    className="object-contain object-right"
                    sizes="589px"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="overflow-hidden rounded-[20px] bg-white/5 p-6 md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative mx-auto h-[200px] w-full max-w-[443px] md:h-[257px]">
                  <Image
                    src={ASSETS.svcBrand}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="443px"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3
                    className={`text-[28px] font-semibold leading-[1.2] text-border md:text-[31px] ${archivo.className}`}
                  >
                    Branding
                  </h3>
                  <p
                    className={`mt-3 text-lg leading-[1.2] text-border ${archivo.className}`}
                  >
                    Defining your identity and making a lasting impression.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="overflow-hidden rounded-[20px] bg-white/5 p-6 md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative mx-auto h-[220px] w-full max-w-[453px] md:h-[263px]">
                  <Image
                    src={ASSETS.svcWeb}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="453px"
                  />
                </div>
                <div>
                  <h3
                    className={`text-[28px] font-semibold leading-[1.2] text-border md:text-[31px] ${archivo.className}`}
                  >
                    Website Development
                  </h3>
                  <p
                    className={`mt-3 text-lg leading-[1.2] text-border ${archivo.className}`}
                  >
                    Turning ideas into functional, user-friendly digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RallyStoriesCarousel
          arrowLeft={ASSETS.arrowLeft}
          arrowRight={ASSETS.arrowRight}
          instagramIcon={ASSETS.instagramStory}
        />

        {/* --- Stats + partner logo wall (Figma 237:1676) --- */}
        <section
          className="bg-canvas px-6 py-16 md:px-[144px] md:py-24"
          data-node-id="237:1676"
        >
          <h2
            className={`text-center text-[32px] font-semibold leading-[1.2] md:text-[40px] ${archivo.className}`}
          >
            Strengthening <span className="text-brand">Local</span> Communities
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6">
            <StatTile imageSrc={ASSETS.rtl31} />
            <StatTile imageSrc={ASSETS.rtl2} />
            <StatTile imageSrc={ASSETS.rtl5} />
          </div>

          <h2
            className={`mt-20 text-center text-[32px] font-semibold leading-[1.2] md:text-[40px] ${archivo.className}`}
          >
            Grateful for Those Who <span className="text-brand">Rally</span> With Us
          </h2>

          <div className="relative mx-auto mt-10 max-w-[1152px] rounded-2xl bg-surface-muted px-4 py-8 md:px-8 md:py-10">
            <PartnerLogoRow topClass="" />
            <PartnerLogoRow topClass="mt-3 md:mt-4" />
            <PartnerLogoRow topClass="mt-3 md:mt-4" />
            <PartnerLogoRow topClass="mt-3 md:mt-4" />
            <PartnerLogoRow topClass="mt-3 md:mt-4" />
            <p
              className={`mt-8 text-center text-2xl font-semibold text-ink ${archivo.className}`}
            >
              and more!
            </p>
          </div>
        </section>

        {/* --- Closing collage + CTA (Figma 99:1900) --- */}
        <section
          className="relative w-full overflow-hidden bg-[#09090b]"
          data-node-id="99:1900"
        >
          <div className="relative mx-auto h-[560px] w-full max-w-[1440px] md:h-[900px]">
            <div className="hidden md:block">
              {CLOSING_MOSAIC.map((tile, i) => (
                <div
                  key={`${tile.left}-${tile.top}-${i}`}
                  className="absolute overflow-hidden"
                  style={{
                    left: tile.left,
                    top: tile.top,
                    width: tile.w,
                    height: tile.h,
                  }}
                >
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="290px"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 md:hidden">
              <Image
                src={ASSETS.rtl2}
                alt=""
                fill
                className="object-cover opacity-40"
                sizes="100vw"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#09090b] via-[rgba(31,31,38,0.79)] via-[37.2%] to-[rgba(92,92,113,0.2)]"
              aria-hidden
            />

            <div className="relative z-[1] px-6 py-16 md:px-[144px] md:py-24">
              <div className={`max-w-[720px] text-[#fafafa] ${poppins.className}`}>
                <p className="text-[40px] font-semibold leading-[1.2] md:text-[72px]">
                  <span>#</span>
                  <span className="text-[#21c27f]">Know</span>
                  <span>Local</span>
                </p>
                <p className="text-[40px] font-semibold leading-[1.2] md:text-[72px]">
                  <span>#</span>
                  <span className="text-[#21c27f]">Love</span>
                  <span>Local</span>
                </p>
                <p className="text-[40px] font-semibold leading-[1.2] md:text-[72px]">
                  <span>#</span>
                  <span className="text-[#21c27f]">Proud</span>
                  <span>Local</span>
                </p>
              </div>
              <div className={`mt-8 max-w-[665px] text-on-brand ${archivo.className}`}>
                <p className="text-[28px] font-normal leading-[1.2] md:text-[40px]">
                  We Support Local Businesses
                </p>
                <p className="text-[28px] font-normal leading-[1.2] md:text-[40px]">
                  Like No Other
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.rallythelocals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-w-[240px] items-center justify-center rounded-[2px] bg-brand px-5 py-4 text-center text-2xl font-semibold text-on-brand md:w-[285px] ${archivo.className}`}
                >
                  Join The Rally
                </a>
              </div>

              {/* Replace `href` values when real RTL social URLs are confirmed (Figma had icons only). */}
              <div className="mt-8 flex gap-3">
                <a href="#" aria-label="LinkedIn" className="size-7">
                  <Image src={ASSETS.socialIn} alt="" width={28} height={28} />
                </a>
                <a href="#" aria-label="Instagram" className="size-7">
                  <Image src={ASSETS.socialIg} alt="" width={28} height={28} />
                </a>
                <a href="#" aria-label="Facebook" className="size-7">
                  <Image src={ASSETS.socialFb} alt="" width={28} height={28} />
                </a>
                <a href="#" aria-label="YouTube" className="size-7">
                  <Image src={ASSETS.socialYt} alt="" width={28} height={28} />
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[min(40%,361px)] max-w-[361px] md:block">
              <div className="relative aspect-[361/636] w-full">
                <Image
                  src={ASSETS.mascotFlip}
                  alt=""
                  fill
                  className="object-contain object-bottom"
                  sizes="361px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
