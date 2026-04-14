import Image from "next/image";
import achievementProfile from "../../../public/images/home/achievement_profile.png";
import { Archivo } from "next/font/google";

const archivo = Archivo({
    variable: '--font-archivo', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function AchievementSection() {
    return (
        <section className="flex flex-col pt-33.75 bg-surface-soft">
            <div className="flex flex-row pt-12.5 flex-1 pr-11.5 pl-35">
                <div className="flex-5 flex-col flex justify-start">
                    <h2 className={`text-7xl font-semibold text-ink ${archivo.className}`}>
                        Achievements
                    </h2>
                    <h5 className={`text-3xl pt-11.75 font-semibold italic text-brand ${archivo.className}`}>
                        “I&apos;ve done this before”
                    </h5>
                    <h6 className={`text-2xl pt-3.5 text-subtle ${archivo.className} whitespace-pre-line`}>
                        {"...is what I tell myself every time I feel\nlike quitting"}
                    </h6>

                    <div className="mt-11.75 flex w-fit items-center justify-center rounded bg-brand px-8 py-4">
                        <h6 className={`text-2xl font-semibold text-on-brand ${archivo.className}`}>
                            View Achievements
                        </h6>
                    </div>
                </div>

                <div className="flex-1">
                    <svg width="112" height="571" viewBox="0 0 112 571" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.333862" width="111" height="405" fill="url(#paint0_linear_498_4169)" />
                        <rect width="55.417" height="55.417" transform="matrix(-1 0 0 1 55.9169 405)" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect width="55.417" height="55.417" transform="matrix(-1 0 0 1 111.334 405)" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect width="55.417" height="55.417" transform="matrix(-1 0 0 1 111.334 515.064)" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect width="55.417" height="55.417" transform="matrix(-1 0 0 1 111.334 459.647)" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_4169" x1="57.6535" y1="392.885" x2="51.0703" y2="-5.09094" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--primitive-brand-tint)" />
                                <stop offset="1" stopColor="var(--primitive-white)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="flex-5 relative h-147.5">
                    <div className="absolute top-0 right-85">
                        <svg width="117" height="78" viewBox="0 0 117 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M77.5 67.5V48.5C77.5 42.9772 81.9771 38.5 87.5 38.5H106.5C112.023 38.5 116.5 34.0228 116.5 28.5V10.5C116.5 4.97715 112.023 0.5 106.5 0.5H48.5C42.9772 0.5 38.5 4.97715 38.5 10.5V28.5C38.5 34.0228 34.0228 38.5 28.5 38.5H10.5C4.97715 38.5 0.5 42.9772 0.5 48.5V67.5C0.5 73.0229 4.97715 77.5 10.5 77.5H67.5C73.0229 77.5 77.5 73.0229 77.5 67.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <path d="M38.5 77.5L38.5 38.5" stroke="var(--primitive-muted)" />
                            <path d="M84.5 39L25.5 38.5M77.5 47V0.5" stroke="var(--primitive-muted)" />
                        </svg>
                    </div>

                    {/* bg image */}
                    <div className="absolute top-14 right-20 z-0">
                        <svg width="372" height="520" viewBox="0 0 372 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M350.5 0.5C361.822 0.5 371 9.67816 371 21V454C371 465.322 361.822 474.5 350.5 474.5H342.5C331.73 474.5 323 483.23 323 494V498.5C323 509.822 313.822 519 302.5 519H21C9.67816 519 0.5 509.822 0.5 498.5V69C0.5 57.6782 9.67816 48.5 21 48.5H90.5C101.27 48.5 110 39.7696 110 29V21C110 9.67816 119.178 0.5 130.5 0.5H350.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                        </svg>
                    </div>

                    <Image
                        className="object-cover z-2 absolute top-12 right-23"
                        src={achievementProfile}
                        alt="achivement profile"
                    />

                    <div className="absolute right-0 top-5">
                        <svg width="43" height="169" viewBox="0 0 43 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5H32.5C38.0228 0.5 42.5 4.97715 42.5 10.5V42.5H0.5V10.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <path d="M0.5 126.5H42.5V158.5C42.5 164.023 38.0228 168.5 32.5 168.5H10.5C4.97715 168.5 0.5 164.023 0.5 158.5V126.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <rect x="0.5" y="84.5" width="42" height="42" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <rect x="0.5" y="42.5" width="42" height="42" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                        </svg>
                    </div>

                    <div className="absolute right-15 bottom-0">
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 16.5C0.5 7.66344 7.66344 0.5 16.5 0.5H25.5V25.5H0.5V16.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <path d="M0.5 25.5H25.5V50.5H16.5C7.66344 50.5 0.5 43.3366 0.5 34.5V25.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <path d="M25.5 25.5H50.5V34.5C50.5 43.3366 43.3366 50.5 34.5 50.5H25.5V25.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                            <path d="M25.5 0.5H34.5C43.3366 0.5 50.5 7.66344 50.5 16.5V25.5H25.5V0.5Z" fill="var(--primitive-canvas)" stroke="var(--primitive-muted)" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className="mt-28 w-full flex flex-row justify-between h-41.25">
                <div>
                    <svg width="721" height="166" viewBox="0 0 721 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="55.417" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="110.834" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="166.251" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="221.668" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="277.085" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="332.502" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="387.919" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="443.336" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="498.753" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="554.17" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="609.587" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="665.004" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="55.417" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="110.834" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="166.251" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="221.668" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="277.085" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="332.502" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="387.919" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="443.336" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="498.753" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="554.17" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="609.587" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="665.004" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="55.417" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="110.834" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="166.251" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="221.668" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="277.085" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="332.502" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="387.919" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="443.336" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="498.753" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="554.17" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="609.587" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                    </svg>
                </div>
                <div>
                    <svg width="666" height="166" viewBox="0 0 666 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="55.917" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="111.334" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="166.751" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="222.168" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="277.585" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="333.002" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="388.419" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="443.836" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="499.253" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="554.67" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="610.087" y="110.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="0.5" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="55.917" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="111.334" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="166.751" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="222.168" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="277.585" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="333.002" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="388.419" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="443.836" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="499.253" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="554.67" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="610.087" y="55.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="0.5" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="55.917" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="111.334" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="166.751" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="222.168" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="277.585" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="333.002" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="388.419" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="443.836" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="499.253" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="554.67" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                        <rect x="610.087" y="0.5" width="55.417" height="55.417" fill="var(--primitive-canvas)" stroke="var(--primitive-border)" />
                    </svg>
                </div>
            </div>
        </section>
    );
}