import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function About() {
    const transcriptURL = "https://drive.google.com/file/d/12eACaHHRRLzg9NL6Uo3_DGLPHYG4QzIP/view?usp=sharing";
    const certificateURL = "https://drive.google.com/file/d/1xspvEnu-GCKXVUcUxLFQKm5v4sA3SGKX/view?usp=sharing";
    const cvDownloadLink = "https://drive.google.com/uc?export=download&id=1IpUtnQRIhtntPYU_uyZGgEadU0Glu9Up";

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-4/5 mx-auto gap-12 items-center">
                <div className="relative">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-normal font-bold text-white mb-12">
                        About <span className="text-cyan-500">Me</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#ffffff92] mb-6">
                        For more details about my qualifications and experienced, please refer to my CV, Transcript or Certificate by clicking the button below.
                    </p>
                    <div className="flex flex-col space-y-4">
                        <a
                            href={transcriptURL}
                            download
                            className="inline-flex justify-center items-center px-4 py-2 text-base font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>Transcript</p>
                            <ArrowDownTrayIcon className="w-4 h-4 ml-2" />
                        </a>
                        <a
                            href={certificateURL}
                            download
                            className="inline-flex items-center justify-center px-4 py-2 text-base font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>Certificate</p>
                            <ArrowDownTrayIcon className="w-4 h-4 ml-2" />
                        </a>
                        <a
                            href={cvDownloadLink}
                            download="CV_Joufando"
                            className="inline-flex items-center justify-center px-4 py-2 text-base font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" className="relative lg:w-[300px] mx-auto md:mx-0 mt-8 lg:mt-0 lg:h-[300px] w-[250px] h-[250px]">
                    <Image
                        src="/images/aboutme.jpg"
                        alt="user"
                        layout="fill"
                        objectFit="contain"
                        className="relative z-10 w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-[#55e6a5] z-0 transform -translate-x-4 -translate-y-4"></div>
                </div>
            </div>
        </div>
    );
}
