import Image from 'next/image';
import heroImg from '../../../public/images/home/hero chris photo.png';
import { Geist_Mono } from "next/font/google";
import HomeText from './text_home';

const geistMono = Geist_Mono({
    variable: '--font-geist-mono', // Optional: Use with Tailwind CSS
    subsets: ['latin'],
})

export default function HomeSection() {
    const listSkills = [
        'Builder',
        'Founder',
        'TEDx Speaker',
        'All things pro-Agile',
        'University Instructor'
    ];

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col pt-24 pr-10">
                    <h1 className="text-[53px] text-[#101920] font-semibold">
                        Hi, I'm{" "}
                        <span className="font-semibold text-[#1A9B66]">
                            Chris Hoquis
                        </span>
                        , <br />pronounced like{" "}
                        <br />
                        <span className="underline decoration-[#1A9B66] underline-offset-2">
                            Hocus Pocus
                        </span>
                        .
                    </h1>
                    <div className='gap-1.25 flex flex-col pt-18'>
                        {listSkills.map((item) => {
                            return (
                                <div className='flex flex-row items-center'>
                                    <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="9" width="9" height="9" fill="#101920" />
                                        <rect x="9" y="9" width="9" height="9" fill="#101920" />
                                        <rect y="9" width="9" height="9" fill="#1A9B66" />
                                    </svg>
                                    <span className={`${geistMono.className} font-semibold text-2xl text-[#101920] pl-3.75`}>
                                        {item}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-157.5 h-200 relative overflow-hidden'>
                    <Image
                        className='absolute inset-0 w-full h-full object-cover object-top'
                        src={heroImg}
                        alt='Hero'
                    />
                </div>
            </div>
            <div className='flex flex-row gap-8 bg-[#101920] py-11.5 justify-center'>
                <HomeText
                    title='20+'
                    description={'years of\nprofessional IT/MIS\nexperience'}
                />
                <HomeText
                    title='10+'
                    description={'major industries worked across,\nincluding tech, aerospace, HR,\nand hospitality'}
                />
                <HomeText
                    title='1500+'
                    description={'students taught at\nthe University post\ngraduate level'}
                />
                <HomeText
                    title='150+'
                    description={'professional and\nacademia courses\ndelivered'}
                />
                <HomeText
                    title='15+'
                    description={'professional industry\ncertifications and/or\ndesignations attained'}
                />
            </div>
        </div>
    );
}