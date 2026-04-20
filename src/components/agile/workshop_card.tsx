import Image, { StaticImageData } from "next/image";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
});

export type WorkshopCardProps = {
  title: string;
  excerpt: string;
  venue: string;
  dateLabel: string;
  tags: string[];
  image: StaticImageData;
  featured?: boolean;
};

export default function WorkshopCard({
  title,
  excerpt,
  venue,
  dateLabel,
  tags,
  image,
  featured,
}: WorkshopCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-border-card bg-surface-soft shadow-sm">
      <div className="relative aspect-[263/172] w-full shrink-0 overflow-hidden rounded-t-[20px]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 280px" />
        {featured ? (
          <div className="absolute inset-0 bg-ink/80 p-4">
            <p className={`text-sm leading-snug text-on-ink ${archivo.className}`}>
              {excerpt}{" "}
              <span className="font-bold text-[#4dce99]">See more</span>
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className={`text-base font-medium leading-snug text-heading ${archivo.className}`}>{title}</h3>
        <div className="flex flex-col gap-3 text-sm text-subtle">
          <p className={`flex items-start gap-1 ${archivo.className}`}>
            <span className="mt-0.5 shrink-0 text-subtle" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {venue}
          </p>
          <p className={`flex items-center gap-1 ${archivo.className}`}>
            <span className="shrink-0" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {dateLabel}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {tags.map((t) => (
            <span
              key={t}
              className={`rounded-[10px] bg-surface-muted px-2 py-1 text-[11px] text-subtle ${archivo.className}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
