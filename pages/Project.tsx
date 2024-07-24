import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid'; // Mengimpor ikon dari Heroicons v2

const bunakenDemoLink = "https://drive.google.com/file/d/1DpBCxnv0So8pTMnfjM4FxFaoB80jFMaQ/view?usp=sharing";
const mEventDemoLink = "https://drive.google.com/file/d/1sklOg4nM-M0fry8p1PtkiZ_z990uYhsw/view?usp=sharing";

export default function Project() {
    return (
        <div className='bg-[#02050a] pt-16 md:pt-32 pb-12'>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8'>
                Pro<span className='text-cyan-500'>jects</span>
            </h1>
            <div className='w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                <div data-aos="fade-up" className='relative group'>
                    <div className='relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <div className='w-full h-60 md:h-72 relative'>
                            <Image
                                src="/images/p1.jpg"
                                alt='portofolio'
                                layout='fill'
                                className='object-cover'
                            />
                        </div>
                        <a
                            href={bunakenDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <PlayIcon className="w-10 h-10 text-white" />
                        </a>
                    </div>
                    <div className='pt-4 text-center'>
                        <a
                            href={bunakenDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-lg font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>Bunaken Demo</p>
                            <PlayIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='relative group'>
                    <div className='relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <div className='w-full h-60 md:h-72 relative'>
                            <Image
                                src="/images/p2.jpg"
                                alt='portofolio'
                                layout='fill'
                                className='object-cover'
                            />
                        </div>
                        <a
                            href={mEventDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <PlayIcon className="w-10 h-10 text-white" />
                        </a>
                    </div>
                    <div className='pt-4 text-center'>
                        <a
                            href={mEventDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-lg font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>M-Event Demo</p>
                            <PlayIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
