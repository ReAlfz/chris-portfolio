/** Small 2×2 tile accent used before headings in Solace pages (matches Figma). */
export default function SolaceAccent({ className }: { className?: string }) {
  return (
    <div className={`inline-grid grid-cols-2 gap-0 ${className ?? ""}`} aria-hidden>
      <span className="size-[15px] bg-ink" />
      <span className="size-[15px] bg-ink" />
      <span className="size-[15px] bg-brand" />
      <span className="size-[15px] bg-ink" />
    </div>
  );
}
