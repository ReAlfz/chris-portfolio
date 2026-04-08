interface HomeTextProps {
  title: string;
  description: string;
}

export default function HomeText({ title, description }: HomeTextProps) {
  return (
    <div className="flex flex-row">
      <span className="pr-3 text-stat font-semibold text-on-ink">{title}</span>
      <span className="text-base font-normal whitespace-pre-line text-on-ink">
        {description}
      </span>
    </div>
  );
}
