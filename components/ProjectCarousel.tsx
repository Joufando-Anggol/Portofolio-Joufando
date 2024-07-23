import Image from 'next/image';
import React from 'react';

interface Props {
    image: string,
    name: string,
    role: string,
    detail: string,
    techStack: string,
    serverSide: string,
    clientSide: string,
    detail2: string,
}

export default function ProjectCarousel({ name, role, image, techStack, serverSide, detail, clientSide, detail2 }: Props) {
    return (
        <div className='flex flex-col text-center justify-center'>
            <div className='mx-auto mb-[2rem] w-[150px] h-[150px] relative'>
                <Image
                    src={image}
                    alt={name}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                />
            </div>
            <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
            <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>
            <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
                {techStack}
                {serverSide}
                {detail}
                {clientSide}
                {detail2}
            </p>
        </div>
    )
}

