import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function BoxingWhySection() {
  return (
    <section className="bg-[#F3F4F6] px-36 py-27.5 flex">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" width="15" height="15" fill="#101920" />
            <rect x="15" y="15" width="15" height="15" fill="#101920" />
            <rect y="15" width="15" height="15" fill="#1A9B66" />
          </svg>
          <h2 className={`text-[69px] font-semibold leading-[1.2] text-ink ${archivo.className}`}>
            {"Why "}
            <span className="text-brand">
              Boxing
            </span>
            {" Matters to Me?"}
          </h2>
        </div>
        <p className={`mt-8 max-w-7xl text-2xl font-semibold leading-snug text-ink ${archivo.className}`}>
          More than just a sport, boxing is a discipline that builds resilience, focus, and strength—both mentally and
          physically.
        </p>
      </div>
    </section>
  );
}
