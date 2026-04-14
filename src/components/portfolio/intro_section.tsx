import Image from "next/image";
import heroBg from "./../../../public/images/portfolio/hero_bg.jpg";
import profileHero from "./../../../public/images/portfolio/hero_profile.png";
import { Archivo, Archivo_Narrow } from "next/font/google";

const archivoNarrow = Archivo_Narrow({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export default function IntroSection() {
    return (
        <section className="flex flex-col">
            <div className="relative overflow-hidden">
                <div className="w-full h-125 bg-gray-800 absolute opacity-50 z-5" />
                <Image
                    className="w-full h-125 object-cover object-top z-1"
                    src={heroBg}
                    alt="background_hero"
                />
                <div className="absolute flex inset-0 items-center justify-center z-5">
                    <h2 className={`text-white text-[69px] font-semibold ${archivo.className}`}>
                        My Portfolio
                    </h2>
                </div>
            </div>
            {/* intro page */}

            <div className="py-46 bg-white relative overflow-hidden">
                {/* decoration */}
                <div className="absolute -top-2.5 right-60">
                    <svg width="165" height="134" viewBox="0 0 165 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_269_1444)">
                            <path d="M24.4661 24.4326L44.274 -21L89.7065 -1.19211L69.8987 44.2405L24.4661 24.4326Z" fill="#F9FAFB" />
                            <path d="M4.6582 69.8651L24.4661 24.4326L69.8987 44.2405L50.0908 89.673L4.6582 69.8651Z" fill="#F9FAFB" />
                            <path d="M94.8923 109.206L114.7 63.7732L160.133 83.5811L140.325 129.014L94.8923 109.206Z" fill="#F9FAFB" />
                            <path d="M49.4598 89.3979L69.2676 43.9653L114.7 63.7732L94.8923 109.206L49.4598 89.3979Z" fill="#F9FAFB" />
                            <path d="M24.4661 24.4326L44.274 -21L89.7065 -1.19211L69.8987 44.2405M24.4661 24.4326L69.8987 44.2405M24.4661 24.4326L4.6582 69.8651L50.0908 89.673L69.8987 44.2405M94.8923 109.206L114.7 63.7732M94.8923 109.206L140.325 129.014L160.133 83.5811L114.7 63.7732M94.8923 109.206L49.4598 89.3979L69.2676 43.9653L114.7 63.7732" stroke="#D1D5DC" />
                        </g>
                        <defs>
                            <filter id="filter0_f_269_1444" x="0" y="-25.6581" width="164.791" height="159.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_269_1444" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="absolute top-10 right-10">
                    <svg width="130" height="210" viewBox="0 0 130 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_269_1432)">
                            <path d="M44.7764 44.7765L84.8458 4.70709L124.915 44.7765L84.8458 84.8459L44.7764 44.7765Z" fill="#F9FAFB" />
                            <path d="M4.70703 84.8459L44.7764 44.7765L84.8458 84.8459L44.7764 124.915L4.70703 84.8459Z" fill="#F9FAFB" />
                            <path d="M44.7764 124.915L84.8458 84.8459L124.915 124.915L84.8458 164.985L44.7764 124.915Z" fill="#F9FAFB" />
                            <path d="M4.70703 164.985L44.7764 124.915L84.8458 164.985L44.7764 205.054L4.70703 164.985Z" fill="#F9FAFB" />
                            <path d="M44.7764 44.7765L84.8458 4.70709L124.915 44.7765L84.8458 84.8459M44.7764 44.7765L84.8458 84.8459M44.7764 44.7765L4.70703 84.8459L44.7764 124.915M84.8458 84.8459L44.7764 124.915M84.8458 84.8459L124.915 124.915L84.8458 164.985M44.7764 124.915L84.8458 164.985M44.7764 124.915L4.70703 164.985L44.7764 205.054L84.8458 164.985" stroke="#D1D5DC" />
                        </g>
                        <defs>
                            <filter id="filter0_f_269_1432" x="0" y="0" width="129.622" height="209.761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_269_1432" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="absolute right-40 top-80">
                    <svg width="126" height="113" viewBox="0 0 126 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_269_1438)">
                            <path d="M121.324 51.0691L88.7187 69.8939L69.8939 37.2884L102.499 18.4637L121.324 51.0691Z" fill="#F9FAFB" />
                            <path d="M88.7187 69.8939L56.1132 88.7187L37.2885 56.1132L69.8939 37.2884L88.7187 69.8939Z" fill="#F9FAFB" />
                            <path d="M56.1132 88.7187L23.5078 107.543L4.68303 74.938L37.2885 56.1132L56.1132 88.7187Z" fill="#F9FAFB" />
                            <path d="M69.8939 37.2884L37.2885 56.1132L18.4637 23.5078L51.0692 4.68299L69.8939 37.2884Z" fill="#F9FAFB" />
                            <path d="M88.7187 69.8939L121.324 51.0691L102.499 18.4637L69.8939 37.2884M88.7187 69.8939L69.8939 37.2884M88.7187 69.8939L56.1132 88.7187M69.8939 37.2884L37.2885 56.1132M69.8939 37.2884L51.0692 4.68299L18.4637 23.5078L37.2885 56.1132M56.1132 88.7187L37.2885 56.1132M56.1132 88.7187L23.5078 107.543L4.68303 74.938L37.2885 56.1132" stroke="#D1D5DC" />
                        </g>
                        <defs>
                            <filter id="filter0_f_269_1438" x="0" y="0" width="126.007" height="112.226" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_269_1438" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                {/* intro */}
                <div className="flex flex-row pl-37">
                    <div className="relative min-h-85.5 min-w-65 overflow-hidden">
                        <Image
                            className="absolute top-7 left-0 object-cover z-2"
                            src={profileHero}
                            alt={"profile"}
                        />

                        {/* decoration */}
                        <div className="absolute top-8 left-2 z-1">
                            <svg width="214" height="299" viewBox="0 0 214 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M192.416 0.5C203.738 0.5 212.916 9.67817 212.916 21V258.606C212.916 266.467 206.544 272.839 198.684 272.839H197.716C190.943 272.839 185.452 278.33 185.452 285.103C185.452 292.428 179.514 298.366 172.188 298.366H21C9.67816 298.366 0.5 289.188 0.5 277.866V48.5352C0.500159 37.2135 9.67827 28.0352 21 28.0352H49.8848C57.2123 28.0351 63.1523 22.0951 63.1523 14.7676C63.1524 6.88786 69.5402 0.500107 77.4199 0.5H192.416Z" fill="#F9FAFB" stroke="#99A1AF" />
                            </svg>
                        </div>

                        <div className="absolute top-0 left-0 z-1 ">
                            <svg width="68" height="46" viewBox="0 0 68 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.574 34.5741V32.2508C44.574 26.728 49.0512 22.2508 54.574 22.2508H56.8973C62.4201 22.2508 66.8973 17.7737 66.8973 12.2508V10.5C66.8973 4.97715 62.4201 0.5 56.8973 0.5H32.2508C26.728 0.5 22.2508 4.97715 22.2508 10.5V12.2508C22.2508 17.7737 17.7737 22.2508 12.2508 22.2508H10.5C4.97715 22.2508 0.5 26.728 0.5 32.2508V34.5741C0.5 40.0969 4.97714 44.5741 10.5 44.5741H34.574C40.0969 44.5741 44.574 40.0969 44.574 34.5741Z" fill="#F9FAFB" stroke="#99A1AF" />
                                <path d="M22.251 44.5741L22.251 22.2509" stroke="#99A1AF" />
                                <path d="M48.5816 22.537L14.8105 22.2508M44.5748 27.1162V0.5" stroke="#99A1AF" />
                            </svg>
                        </div>

                        <div className="absolute right-0 top-5">
                            <svg width="26" height="98" viewBox="0 0 26 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5H14.5404C20.0632 0.5 24.5404 4.97715 24.5404 10.5V24.5404H0.5V10.5Z" fill="#F9FAFB" stroke="#99A1AF" />
                                <path d="M0.5 72.6213H24.5404V86.6617C24.5404 92.1846 20.0632 96.6617 14.5404 96.6617H10.5C4.97715 96.6617 0.5 92.1846 0.5 86.6617V72.6213Z" fill="#F9FAFB" stroke="#99A1AF" />
                                <rect x="0.5" y="48.5808" width="24.0404" height="24.0404" fill="#F9FAFB" stroke="#99A1AF" />
                                <rect x="0.5" y="24.5405" width="24.0404" height="24.0404" fill="#F9FAFB" stroke="#99A1AF" />
                            </svg>
                        </div>

                        <div className="absolute bottom-0 right-7.5">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 14.8098C0.5 6.9067 6.9067 0.5 14.8098 0.5V14.8098H0.5Z" fill="#F9FAFB" stroke="#99A1AF" />
                                <path d="M0.5 14.8099H14.8098V29.1197C6.9067 29.1197 0.5 22.713 0.5 14.8099Z" fill="#F9FAFB" stroke="#99A1AF" />
                                <path d="M14.8091 14.8099H29.1188C29.1188 22.713 22.7121 29.1197 14.8091 29.1197V14.8099Z" fill="#F9FAFB" stroke="#99A1AF" />
                                <path d="M14.8091 0.5C22.7121 0.5 29.1188 6.9067 29.1188 14.8098H14.8091V0.5Z" fill="#F9FAFB" stroke="#99A1AF" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col pl-24 gap-12">
                        <h2 className={`font-semibold text-[40px] text-[#6D7A8A] text-center ${archivoNarrow.className}`}>
                            When I look back at my life,<br />
                            I don't want to give {" "}
                            <span className={`font-normal italic text-[40px] text-[#6D7A8A] ${archivoNarrow.className}`}>‘anything is possible’</span>
                            <br />cliché statements to try to motivate.
                        </h2>
                        <span className={`text-center text-[20px] text-[#6D7A8A] font-normal ${archivo.className}`}>
                            I want others to see that I came from sincere belief <br />
                            that I did not deserve to be alive. To come from that, <br />
                            and accomplish what I've done should remind others <br />
                            that they're{" "}
                            <span className="font-semibold italic underline text-[20px]">worth more</span>
                            {" "}than they think.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}