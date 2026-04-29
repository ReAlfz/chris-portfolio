"use client";

export default function InstagramIcon({ linkHref }: { linkHref: string }) {
    return (
        <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-200"
            aria-label="Instagram"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                </defs>

                {/* Dot */}
                <path
                    d="M14.166 7.0835C14.8564 7.0835 15.416 6.52385 15.416 5.8335C15.416 5.14314 14.8564 4.5835 14.166 4.5835C13.4757 4.5835 12.916 5.14314 12.916 5.8335C12.916 6.52385 13.4757 7.0835 14.166 7.0835Z"
                    className="transition-all duration-300 fill-[#6D7A8A] group-hover:fill-[url(#ig-gradient)]"
                />

                {/* Outer square */}
                <path
                    d="M13.3333 2.5C15.6333 2.5 17.5 4.36667 17.5 6.66667V13.3333C17.5 15.6333 15.6333 17.5 13.3333 17.5H6.66667C4.36667 17.5 2.5 15.6333 2.5 13.3333V6.66667C2.5 4.36667 4.36667 2.5 6.66667 2.5H10H13.3333Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 stroke-[#6D7A8A] group-hover:stroke-[url(#ig-gradient)]"
                />

                {/* Inner circle */}
                <path
                    d="M9.99935 6.6665C11.841 6.6665 13.3327 8.15817 13.3327 9.99984C13.3327 11.8415 11.841 13.3332 9.99935 13.3332C8.15768 13.3332 6.66602 11.8415 6.66602 9.99984C6.66602 8.15817 8.15768 6.6665 9.99935 6.6665Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 stroke-[#6D7A8A] group-hover:stroke-[url(#ig-gradient)]"
                />
            </svg>
        </a>
    );
}