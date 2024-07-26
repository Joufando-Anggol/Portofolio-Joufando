import React from "react";
import Particle from "../components/Particle";
import TextEffect from "../components/TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";


export default function Hero() {
    const cvDownloadLink = "https://drive.google.com/uc?export=download&id=1IpUtnQRIhtntPYU_uyZGgEadU0Glu9Up";

    return (
        <div className="pt-[10rem] pb-[3rem] md:pb-[10rem]">
            <Particle />
            <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        HELLO, I&apos;M <span className="text-cyan-500">JOUFANDO</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                        As a dedicated Fullstack JavaScript Developer, I transitioned my career by completing an intensive bootcamp at Hacktiv8. I excel in crafting engaging user interfaces with HTML, CSS, JavaScript, and modern frameworks like React and Next.js, ensuring responsive and visually stunning applications. On the backend, I build robust solutions with Node.js and Express.js, using MongoDB and PostgreSQL for efficient data management.
                        My fullstack expertise allows me to manage end-to-end development, delivering cohesive and high-performing web solutions. I am proficient with Git, cloud deployments, and CI/CD pipelines. This portfolio website is built using Next.js and TypeScript, showcasing my skills and dedication to creating seamless digital experiences.
                    </p>
                    <div className="mt-[2rem] flex flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <a
                            href={cvDownloadLink}
                            download="CV_Joufando"
                            className="px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 hover:bg-cyan-500 transition-all duration-200"
                        >
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]" />
                        </a>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    className="w-[300px] hidden relative lg:flex items-center  h-[400px]">
                    <Image
                        src="/images/joufando.jpg"
                        alt="user"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                </div>
            </div>
        </div>
    )
}
