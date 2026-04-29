import { Story } from "./types/story";

interface StoryCardProps {
    story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
    return (
        <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group">
            {/* Image */}
            <div className="relative h-60.5 overflow-hidden">
                <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/55 flex flex-col justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm leading-snug line-clamp-4">{story.excerpt}</p>
                    <span className="text-white text-sm font-bold">Read more</span>
                </div>

                {/* Location badge */}
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 group-hover:bg-transparent rounded-full px-2 py-0.5">
                    <div className="group">
                        <svg className="block group-hover:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3332 6.66671C13.3332 11 7.99984 14.6667 7.99984 14.6667C7.99984 14.6667 2.6665 11 2.6665 6.66671C2.6665 5.25222 3.22841 3.89567 4.2286 2.89547C5.2288 1.89528 6.58535 1.33337 7.99984 1.33337C9.41433 1.33337 10.7709 1.89528 11.7711 2.89547C12.7713 3.89567 13.3332 5.25222 13.3332 6.66671Z" stroke="#1D293D" stroke-width="1.33333" />
                            <path d="M10 6.66675C10 7.19718 9.78929 7.70589 9.41421 8.08096C9.03914 8.45603 8.53043 8.66675 8 8.66675C7.46957 8.66675 6.96086 8.45603 6.58579 8.08096C6.21071 7.70589 6 7.19718 6 6.66675C6 6.13632 6.21071 5.62761 6.58579 5.25253C6.96086 4.87746 7.46957 4.66675 8 4.66675C8.53043 4.66675 9.03914 4.87746 9.41421 5.25253C9.78929 5.62761 10 6.13632 10 6.66675Z" stroke="#1D293D" stroke-width="1.33333" />
                        </svg>
                        <svg className="hidden group-hover:block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.74333 14.5406C7.14733 14.874 7.56867 15.1786 8 15.476C8.43226 15.1826 8.85155 14.8705 9.25667 14.5406C9.932 13.9861 10.5676 13.3848 11.1587 12.7413C12.5213 11.2513 14 9.09129 14 6.66663C14 5.8787 13.8448 5.09848 13.5433 4.37053C13.2417 3.64257 12.7998 2.98114 12.2426 2.42399C11.6855 1.86683 11.0241 1.42488 10.2961 1.12335C9.56815 0.821821 8.78793 0.666626 8 0.666626C7.21207 0.666626 6.43185 0.821821 5.7039 1.12335C4.97595 1.42488 4.31451 1.86683 3.75736 2.42399C3.20021 2.98114 2.75825 3.64257 2.45672 4.37053C2.15519 5.09848 2 5.8787 2 6.66663C2 9.09129 3.47867 11.2506 4.84133 12.7413C5.43241 13.3851 6.06798 13.9859 6.74333 14.5406ZM8 8.83329C7.42536 8.83329 6.87426 8.60502 6.46794 8.19869C6.06161 7.79236 5.83333 7.24126 5.83333 6.66663C5.83333 6.09199 6.06161 5.54089 6.46794 5.13456C6.87426 4.72823 7.42536 4.49996 8 4.49996C8.57464 4.49996 9.12574 4.72823 9.53206 5.13456C9.93839 5.54089 10.1667 6.09199 10.1667 6.66663C10.1667 7.24126 9.93839 7.79236 9.53206 8.19869C9.12574 8.60502 8.57464 8.83329 8 8.83329Z" fill="#FAFAFA" />
                        </svg>
                    </div>
                    <span className="text-sm text-slate-800 group-hover:text-[#FAFAFA] font-medium">{story.location}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col p-5 gap-3">
                <h3 className="font-semibold text-[#101920] text-[18px] leading-snug line-clamp-2">
                    {story.title}
                </h3>
                <p className="text-sm text-gray-500">
                    {story.event} | {story.date}
                </p>
                <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-sm px-2 py-1 rounded-md font-normal bg-gray-100 text-[#14744C]`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}