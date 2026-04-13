import { Archivo } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
});


export default function CategoryCard({
    title,
    imageSrc,
    imageHeight,
    alt,
    expanded,
    description,
    href,
}: {
    title: string;
    imageSrc: StaticImageData;
    imageHeight: 463 | 458;
    alt: string;
    expanded?: boolean;
    description?: string;
    /** If set, the whole card becomes a link (used for Rally → `/rally-the-local`). */
    href?: string;
}) {
    const h = imageHeight;
    const SPEAKING_OVERLAP = 105;

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
                    <div className="pointer-events-none absolute left-71 top-92">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_382_2686)">
                                <path d="M28.6899 14.33V19.16L26.6899 18.73V13.24C25.9361 12.9002 25.1571 12.6193 24.3599 12.4V18.22L22.3599 17.79V12C21.2599 11.82 20.1799 11.7 19.2799 11.64V17.15L17.2799 16.72V4.33996C17.2538 3.67416 16.9662 3.04552 16.4794 2.59055C15.9926 2.13558 15.346 1.89101 14.6799 1.90996C14.0139 1.89101 13.3672 2.13558 12.8804 2.59055C12.3936 3.04552 12.106 3.67416 12.0799 4.33996V19.86L10.0799 20.86V15.6L7.74991 13.21C7.21927 12.6799 6.49993 12.3822 5.74991 12.3822C4.99989 12.3822 4.28055 12.6799 3.74991 13.21C3.21665 13.7571 2.91821 14.4909 2.91821 15.255C2.91821 16.019 3.21665 16.7528 3.74991 17.3L9.74991 24.4C9.91576 25.8878 10.3891 27.3248 11.1399 28.62C11.676 29.6755 12.4291 30.6059 13.3499 31.35V33.91H27.7899V30.62C29.8089 28.2564 30.878 25.2272 30.7899 22.12V16.12C30.176 15.4291 29.4693 14.8267 28.6899 14.33Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_382_2686">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
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