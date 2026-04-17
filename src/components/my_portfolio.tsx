export default function MyPortfolio({ isCompact }: { isCompact: boolean }) {
    const expanded = (
        <div className="relative">
            {/* decoration */}
            <div className="absolute top-0 left-0">
                <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="72" width="72" height="72" transform="rotate(-90 0 72)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="72" width="72" height="72" transform="rotate(-90 72 72)" fill="#101920" stroke="#1E2939" />
                    <rect y="144" width="72" height="72" transform="rotate(-90 0 144)" fill="#101920" stroke="#1E2939" />
                </svg>
            </div>
            <div className="absolute top-0 right-0">
                <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="72" width="72" height="72" transform="rotate(-90 0.5 72)" fill="#101920" stroke="#1E2939" />
                    <rect x="72.5" y="72" width="72" height="72" transform="rotate(-90 72.5 72)" fill="#101920" stroke="#1E2939" />
                    <rect x="72.5" y="144" width="72" height="72" transform="rotate(-90 72.5 144)" fill="#101920" stroke="#1E2939" />
                </svg>
            </div>
            <div className="absolute bottom-0">
                <svg width="1440" height="217" viewBox="0 0 1440 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="216.5" width="72" height="72" transform="rotate(-90 0 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="216.5" width="72" height="72" transform="rotate(-90 72 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="144" y="216.5" width="72" height="72" transform="rotate(-90 144 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="216" y="216.5" width="72" height="72" transform="rotate(-90 216 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="288" y="216.5" width="72" height="72" transform="rotate(-90 288 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="360" y="216.5" width="72" height="72" transform="rotate(-90 360 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="432" y="216.5" width="72" height="72" transform="rotate(-90 432 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="504" y="216.5" width="72" height="72" transform="rotate(-90 504 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="576" y="216.5" width="72" height="72" transform="rotate(-90 576 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="648" y="216.5" width="72" height="72" transform="rotate(-90 648 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="720" y="216.5" width="72" height="72" transform="rotate(-90 720 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="792" y="216.5" width="72" height="72" transform="rotate(-90 792 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="864" y="216.5" width="72" height="72" transform="rotate(-90 864 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="936" y="216.5" width="72" height="72" transform="rotate(-90 936 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1008" y="216.5" width="72" height="72" transform="rotate(-90 1008 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1080" y="216.5" width="72" height="72" transform="rotate(-90 1080 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1152" y="216.5" width="72" height="72" transform="rotate(-90 1152 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1224" y="216.5" width="72" height="72" transform="rotate(-90 1224 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1296" y="216.5" width="72" height="72" transform="rotate(-90 1296 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="216.5" width="72" height="72" transform="rotate(-90 1368 216.5)" fill="#101920" stroke="#1E2939" />
                    <rect y="144.5" width="72" height="72" transform="rotate(-90 0 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect y="72.5" width="72" height="72" transform="rotate(-90 0 72.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="72" y="144.5" width="72" height="72" transform="rotate(-90 72 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1296" y="144.5" width="72" height="72" transform="rotate(-90 1296 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="144.5" width="72" height="72" transform="rotate(-90 1368 144.5)" fill="#101920" stroke="#1E2939" />
                    <rect x="1368" y="72.5" width="72" height="72" transform="rotate(-90 1368 72.5)" fill="#101920" stroke="#1E2939" />
                </svg>
            </div>
        </div>
    );

    const compact =
        (
            <div>
            </div>
        );


    return (
        <section className="flex flex-col">
            {isCompact ? compact : expanded}
        </section>
    );
}