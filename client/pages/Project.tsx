import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid'; // Mengimpor ikon dari Heroicons v2

const bunakenDemoLink = "https://drive.google.com/file/d/1DpBCxnv0So8pTMnfjM4FxFaoB80jFMaQ/view?usp=drive_link";
const mEventDemoLink = "https://drive.google.com/file/d/1sklOg4nM-M0fry8p1PtkiZ_z990uYhsw/view?usp=drive_link";

export default function Project() {
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>
                Pro<span className='text-cyan-500'>jects</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div data-aos="fade-up">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200%] md:h-[300px]'>
                        <Image src="/images/p1.jpg" alt='portofolio' layout='fill' className='object-contain' />
                    </div>
                    <div className='pt-[1rem] text-center'>
                        <a
                            href={bunakenDemoLink}
                            target="_blank" // Membuka link di tab baru
                            rel="noopener noreferrer" // Meningkatkan keamanan dengan mencegah serangan phishing
                            className="px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2 hover:bg-cyan-500 transition-all duration-200 inline-block"
                        >
                            <p>Bunaken Demo</p>
                            <PlayIcon className="w-[1.6rem] h-[1.7rem]" />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200%] md:h-[300px]'>
                        <Image src="/images/p2.jpg" alt='portofolio' layout='fill' className='object-contain' />
                    </div>
                    <div className='pt-[1rem] text-center'>
                        <a
                            href={mEventDemoLink}
                            target="_blank" // Membuka link di tab baru
                            rel="noopener noreferrer" // Meningkatkan keamanan dengan mencegah serangan phishing
                            className="px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2 hover:bg-cyan-500 transition-all duration-200 inline-block"
                        >
                            <p>M-Event Demo</p>
                            <PlayIcon className="w-[1.6rem] h-[1.7rem]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
