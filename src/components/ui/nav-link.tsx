'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base font-normal text-ink transition-colors hover:text-brand ${active ? 'font-bold text-brand' : ''} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
