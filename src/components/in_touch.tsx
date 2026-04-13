import { Archivo } from "next/font/google";

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

                    <div className="absolute top-15 right-16.5">
                        <svg width="59" height="57" viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8052 45.6416L2.04902 36.5447L12.9653 17.6372L28.7215 26.7341L17.8052 45.6416Z" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <path d="M28.6265 26.9023L12.8703 17.8055L21.9672 2.04923L37.7234 11.1461L28.6265 26.9023Z" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <path d="M47.7238 37.9272L28.8163 27.011L37.9132 11.2548L56.8206 22.171L47.7238 37.9272Z" fill="#101920" stroke="#1E2939" stroke-width="3" />
                        </svg>
                    </div>

                    <div className="absolute top-25 right-0">
                        <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="25.0028" y="9.2666" width="14.4354" height="14.4354" transform="rotate(-30 25.0028 9.2666)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="12.5015" y="16.4844" width="14.4354" height="14.4354" transform="rotate(-30 12.5015 16.4844)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="19.7191" y="28.9858" width="14.4354" height="14.4354" transform="rotate(-30 19.7191 28.9858)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="7.21759" y="36.2036" width="14.4354" height="14.4354" transform="rotate(-30 7.21759 36.2036)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                        </svg>
                    </div>

                    <div className="absolute bottom-0 left-25">
                        <svg width="106" height="80" viewBox="0 0 106 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.9838 38.0728L7.0862 32.6347L12.5242 1.73715L43.4218 7.17515L37.9838 38.0728Z" fill="#101920" stroke="#4A5565" stroke-width="3" />
                            <path d="M32.6349 68.4639L1.73729 63.0259L7.1753 32.1283L38.0729 37.5663L32.6349 68.4639Z" fill="#101920" stroke="#4A5565" stroke-width="3" />
                            <path d="M68.3741 43.4214L37.4765 37.9834L42.9145 7.08578L73.8121 12.5238L68.3741 43.4214Z" fill="#101920" stroke="#4A5565" stroke-width="3" />
                            <path d="M98.7679 48.771L67.8703 43.333L73.3084 12.4354L104.206 17.8734L98.7679 48.771Z" fill="#101920" stroke="#4A5565" stroke-width="3" />
                        </svg>
                    </div>

                    <div className="absolute -bottom-5 left-70">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="35.6375" y="11.0488" width="18" height="18" transform="rotate(30 35.6375 11.0488)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="20.049" y="2.04883" width="18" height="18" transform="rotate(30 20.049 2.04883)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="26.6375" y="26.6372" width="18" height="18" transform="rotate(30 26.6375 26.6372)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="11.049" y="17.6372" width="18" height="18" transform="rotate(30 11.049 17.6372)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                        </svg>
                    </div>

                    <div className="absolute right-30 bottom-10">
                        <svg width="68" height="70" viewBox="0 0 68 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="65.3922" y="24.4323" width="18.8623" height="18.8623" transform="rotate(130.364 65.3922 24.4323)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="53.1759" y="38.8043" width="18.8623" height="18.8623" transform="rotate(130.364 53.1759 38.8043)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="40.9598" y="53.1759" width="18.8623" height="18.8623" transform="rotate(130.364 40.9598 53.1759)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                            <rect x="38.8041" y="26.588" width="18.8623" height="18.8623" transform="rotate(130.364 38.8041 26.588)" fill="#101920" stroke="#1E2939" stroke-width="3" />
                        </svg>
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