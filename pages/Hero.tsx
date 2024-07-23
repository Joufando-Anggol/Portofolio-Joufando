import React from "react";
import Particle from "../components/Particle";
import TextEffect from "../components/TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

export default function Hero() {
    // Link unduhan langsung
    const cvDownloadLink = "https://drive.google.com/uc?export=download&id=1IpUtnQRIhtntPYU_uyZGgEadU0Glu9Up";

    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center pt-[7rem]">
            <Particle />
            <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        HELLO, I'M <span className="text-cyan-500">JOUFANDO</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                        As a passionate Fullstack JavaScript Developer, I thrive on creating seamless digital experiences through both frontend and backend expertise. My journey began with a transformative bootcamp at Hacktiv8, where I honed my skills over four intensive months.
                        On the frontend, I craft engaging user interfaces using HTML, CSS, and JavaScript, complemented by modern frameworks such as React and Next.js. My goal is to deliver responsive, visually stunning applications that captivate users and enhance their interactions.
                        On the backend, I build robust server-side solutions using Node.js and Express.js. My experience with MongoDB and PostgreSQL ensures efficient data management and the development of scalable APIs that drive dynamic applications.
                        As a Fullstack Developer, I seamlessly integrate frontend and backend technologies, managing end-to-end development to create cohesive and efficient web solutions. My proficiency in both realms allows me to deliver comprehensive and high-performing applications.
                        In addition to my core technical skills, I am adept with version control systems like Git and have experience with deploying applications using cloud platforms and CI/CD pipelines. My collaborative spirit and dedication ensure that I excel both as an individual contributor and as part of a team.

                    </p>
                    <div className="mt-[2rem] flex flex-wrap gap-[1rem] sm:gap-[2rem] items-center">
                        <a
                            href={cvDownloadLink}
                            download="CV_Joufando" // Nama file yang akan diunduh
                            className="px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 hover:bg-cyan-500 transition-all duration-200"
                        >
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]" />
                        </a>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    className="w-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]">
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
