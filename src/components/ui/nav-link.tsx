'use client';

import { Archivo } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const archivo = Archivo({
  variable: '--font-archivo', // Optional: Use with Tailwind CSS
  subsets: ['latin'],
})

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base ${active ? 'text-brand font-bold' : 'text-[#101920] font-normal'} ${archivo.className}`}
    >
      {children}
    </Link>
  );
}
