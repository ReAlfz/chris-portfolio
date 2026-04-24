import { Archivo } from "next/font/google";
import contactBg from "../../public/images/Always Here to Chat BG.png";
import Image from "next/image";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
});

export default function InTouch() {
    const fieldClass = `h-10 w-full rounded-[2px] bg-card-bar px-3 text-sm font-medium leading-[1.2] text-on-brand placeholder:text-muted ${archivo.className}`;

    return (
        <section
            className="min-h-173.5 bg-ink pt-16 md:pt-24"
            data-name="Get In Touch"
            data-node-id="561:4487"
        >
            <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-center lg:gap-42.5">
                {/* left section */}
                <div className="relative min-w-150 min-h-135 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-center z-2 absolute">
                        <p className={`text-[70px] font-medium leading-none text-canvas ${archivo.className}`}>
                            Always here to
                        </p>
                        <div className="flex justify-center gap-0.5 items-center">
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
                        <div className={`mt-2 text-[20px] font-medium leading-[1.4] text-canvas ${archivo.className}`}>
                            <p>If there&apos;s anything you need,</p>
                            <p>don&apos;t hesitate to reach out!</p>
                        </div>
                    </div>

                    {/* background image */}
                    <Image
                        className="absolute object-cover top-[55%] -translate-y-1/2"
                        src={contactBg}
                        alt="contact background"
                    />
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
            <div className="w-full pt-8 md:pt-12">
                <svg width="100%" height="217" viewBox="0 0 1440 217" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="216.5" width="72" height="72" transform="rotate(-90 0 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="216.5" width="72" height="72" transform="rotate(-90 72 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="144" y="216.5" width="72" height="72" transform="rotate(-90 144 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="216" y="216.5" width="72" height="72" transform="rotate(-90 216 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="288" y="216.5" width="72" height="72" transform="rotate(-90 288 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="360" y="216.5" width="72" height="72" transform="rotate(-90 360 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="432" y="216.5" width="72" height="72" transform="rotate(-90 432 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="504" y="216.5" width="72" height="72" transform="rotate(-90 504 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="576" y="216.5" width="72" height="72" transform="rotate(-90 576 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="648" y="216.5" width="72" height="72" transform="rotate(-90 648 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="720" y="216.5" width="72" height="72" transform="rotate(-90 720 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="792" y="216.5" width="72" height="72" transform="rotate(-90 792 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="864" y="216.5" width="72" height="72" transform="rotate(-90 864 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="936" y="216.5" width="72" height="72" transform="rotate(-90 936 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1008" y="216.5" width="72" height="72" transform="rotate(-90 1008 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1080" y="216.5" width="72" height="72" transform="rotate(-90 1080 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1152" y="216.5" width="72" height="72" transform="rotate(-90 1152 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1224" y="216.5" width="72" height="72" transform="rotate(-90 1224 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1296" y="216.5" width="72" height="72" transform="rotate(-90 1296 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="216.5" width="72" height="72" transform="rotate(-90 1368 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect y="144.5" width="72" height="72" transform="rotate(-90 0 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect y="72.5" width="72" height="72" transform="rotate(-90 0 72.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="144.5" width="72" height="72" transform="rotate(-90 72 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1296" y="144.5" width="72" height="72" transform="rotate(-90 1296 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="144.5" width="72" height="72" transform="rotate(-90 1368 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="72.5" width="72" height="72" transform="rotate(-90 1368 72.5)" fill="#101920" stroke="#1E2939" />
                </svg>
            </div>
        </section>
    );
}