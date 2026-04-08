import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const baseClass =
  'inline-flex items-center justify-center rounded-sm bg-brand px-3 py-2 text-sm font-extrabold text-on-brand';

export default function Button({ children, className = '', href }: ButtonProps) {
  const merged = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={merged}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={merged}>
      {children}
    </button>
  );
}
