/**
 * Site-wide navigation. Links are plain Next routes; “Contact Me” jumps to the footer
 * `#contact` anchor. Tweak `NAV_ITEMS` when you add or rename pages.
 */
"use client";

import Image from "next/image";
import logoImg from "../../public/images/header_and_footer/Logo.png";
import NavLink from "@/components/ui/nav-link";
import Button from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "My Portfolio" },
  { href: "/service", label: "My Services" },
  { href: "/achievemnt", label: "Achievements" },
  { href: "/tedx-talk", label: "TEDx Talk" },
  { href: "/rally-the-local", label: "Rally the Locals" },
  { href: "/volunteer", label: "Volunteer Initiatives" },
] as const;

export default function Header() {
  return (
    <header className="flex h-25 items-center bg-surface px-11.25">
      <div className="flex h-full w-full flex-row items-center justify-between">
        <Image
          src={logoImg}
          alt="logo"
          width={200}
          height={35}
          loading="lazy"
        />

        <nav className="flex flex-row items-center gap-7.5">
          {NAV_ITEMS.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
          <Button href="#contact">Contact Me</Button>
        </nav>
      </div>
    </header>
  );
}
