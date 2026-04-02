'use client';

import Image from "next/image";
import logoImg from "../../public/images/header_and_footer/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname == href;

    return (
        <header className="h-25 bg-white items-center px-11.25">
            <div className="flex flex-row justify-between items-center h-full">
                <Image
                    src={logoImg}
                    alt="logo"
                    width={200}
                    height={35}
                    loading="lazy"
                />

                <nav className="flex flex-row items-center gap-7.5">
                    <Link href="/"
                        className={`text-base ${isActive('/') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        Home
                    </Link>
                    <Link href="/portfolio"
                        className={`text-base ${isActive('/portfolio') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        My Portfolio
                    </Link>
                    <Link href="/service"
                        className={`text-base ${isActive('/service') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        My Services
                    </Link>
                    <Link href="/achievemnt"
                        className={`text-base ${isActive('/achievemnt') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        Achievements
                    </Link>
                    <Link href="/tedx-talk"
                        className={`text-base ${isActive('/tedx-talk') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        TEDx Talk
                    </Link>
                    <Link href="/rally-the-local"
                        className={`text-base ${isActive('/rally-the-local') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        Rally the Locals
                    </Link>
                    <Link href="/volunteer"
                        className={`text-base ${isActive('/volunteer') ? 'text-[#1A9B66] font-bold' : 'text-[#101920] font-normal '}`}>
                        Volunteer Initiatives
                    </Link>
                    <div className="flex bg-[#1A9B66] px-3 py-2 rounded">
                        <span className="text-sm font-extrabold text-white">
                            Contact Me
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
}