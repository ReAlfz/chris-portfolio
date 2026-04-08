interface HomeTextProps {
    title: string;
    description: string;
}

export default function HomeText({ title, description }: HomeTextProps) {
    return (
        <div className="flex flex-row">
            <span className="font-semibold text-[40px] pr-3">
                {title}
            </span>
            <span className="text-base font-normal whitespace-pre-line">
                {description}
            </span>
        </div>
    );
}