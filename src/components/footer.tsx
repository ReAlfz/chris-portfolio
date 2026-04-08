/**
 * Global footer: logo, RTL submark, socials, and link columns. `id="contact"` is
 * what the header “Contact Me” button scrolls to.
 */
import Image from "next/image";
import logoImg from "../../public/images/header_and_footer/Logo.png";
import rallyImg from "../../public/images/header_and_footer/rally_the_local.png";

export default function Footer() {
  return (
    <footer id="contact" className="flex h-100 flex-col bg-surface">
      <div className="flex h-[90%] flex-row justify-between px-36.25 py-16">
        <div className="flex flex-col gap-4">
          <Image
            src={logoImg}
            alt="logo"
            width={200}
            height={35}
            loading="lazy"
          />
          <Image
            src={rallyImg}
            alt="rally_the_local"
            width={70}
            height={40}
            loading="lazy"
          />
          <div className="flex flex-row gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-on-ink">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_610_1954)">
                  <path
                    d="M4.2501 2.5501C4.2501 3.4528 3.6466 4.2297 2.54925 4.2297C1.5165 4.2297 0.850098 3.497 0.850098 2.5943C0.850098 1.6678 1.4961 0.850098 2.5501 0.850098C3.6041 0.850098 4.2297 1.6236 4.2501 2.5501ZM0.850098 16.1501V5.1001H4.2501V16.1501H0.850098ZM5.9501 8.8775C5.9501 7.56425 5.90675 6.4669 5.8634 5.51915H8.9183L9.0696 6.9837H9.1342C9.5643 6.29435 10.6183 5.2837 12.3829 5.2837C14.5351 5.2837 16.1501 6.72445 16.1501 9.8244V16.1501H12.7501V10.3182C12.7501 8.96335 12.2341 7.92975 11.0501 7.92975C10.1474 7.92975 9.6952 8.66075 9.45805 9.2634C9.37135 9.4793 9.3501 9.7802 9.3501 10.0819V16.1501H5.9501V8.8775Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_610_1954">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-on-ink">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.875 7.4375C15.5999 7.4375 16.1875 6.84987 16.1875 6.125C16.1875 5.40013 15.5999 4.8125 14.875 4.8125C14.1501 4.8125 13.5625 5.40013 13.5625 6.125C13.5625 6.84987 14.1501 7.4375 14.875 7.4375Z"
                  fill="currentColor"
                />
                <path
                  d="M14 2.625C16.415 2.625 18.375 4.585 18.375 7V14C18.375 16.415 16.415 18.375 14 18.375H7C4.585 18.375 2.625 16.415 2.625 14V7C2.625 4.585 4.585 2.625 7 2.625H10.5H14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 7C12.4337 7 14 8.56625 14 10.5C14 12.4337 12.4337 14 10.5 14C8.56625 14 7 12.4337 7 10.5C7 8.56625 8.56625 7 10.5 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-on-ink">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.125 10.0625H8.3125L9.1875 6.5625H6.125V4.8125C6.125 3.91125 6.125 3.0625 7.875 3.0625H9.1875V0.1225C8.90225 0.0848751 7.82512 0 6.68762 0C4.312 0 2.625 1.44987 2.625 4.1125V6.5625H0V10.0625H2.625V17.5H6.125V10.0625Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-2.25">
            <span className="pb-0.75 text-base font-semibold text-ink">My Portfolio</span>
            <span className="text-base font-normal text-muted">Speaking Events</span>
            <span className="text-base font-normal text-muted">My TEDx Talk</span>
            <span className="text-base font-normal text-muted">Speaking Events</span>
            <span className="text-base font-normal text-muted">Rally the Locals</span>
            <span className="text-base font-normal text-muted">Agile Workshops</span>
          </div>
          <div className="flex flex-col gap-2.25">
            <span className="pb-0.75 text-base font-semibold text-ink">My Services</span>
            <span className="text-base font-normal text-muted">
              Keynotes and Speaking
              <br />
              Events
            </span>
            <span className="text-base font-normal text-muted">Mental Health</span>
            <span className="text-base font-normal text-muted">Case Competition Preparation</span>
            <span className="text-base font-normal text-muted">
              Student Group Support &
              <br />
              Development
            </span>
            <span className="text-base font-normal text-muted">Agile Workshops</span>
          </div>
          <div className="flex flex-col gap-2.25">
            <span className="pb-0.75 text-base font-semibold text-ink">Volunteer Initiatives</span>
            <span className="text-base font-normal text-muted">Junior Achievement</span>
            <span className="text-base font-normal text-muted">Coaching Basketball</span>
            <span className="text-base font-normal text-muted">
              Big Brothers Big Sisters of
              <br />
              Winnipeg
            </span>
          </div>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-border" />

      <div className="flex flex-row items-center justify-between px-36.25 pb-4">
        <span className="text-base font-normal text-subtle">@ 2026 Chris Hoquis. All Right Reserved.</span>
        <span className="text-base font-normal text-subtle underline">Privacy Policy</span>
      </div>
    </footer>
  );
}
