import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function About() {
    const transcriptURL = "https://drive.google.com/file/d/12eACaHHRRLzg9NL6Uo3_DGLPHYG4QzIP/view?usp=sharing";
    const certificateURL = "https://drive.google.com/file/d/1xspvEnu-GCKXVUcUxLFQKm5v4sA3SGKX/view?usp=sharing";

    return (
        <div className="bg-[#121121] pb-12 pt-16 md:pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-4/5 mx-auto gap-12 items-center">
                <div>
                    <h1 className="text-xl font-bold uppercase text-[#55e6a5] mb-4">
                        About Me
                    </h1>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-normal font-bold text-white mb-12">
                        Transforming <span className="text-cyan-500">Visions</span>
                    </h2>
                    <div className="mb-12 flex items-center md:space-x-10">
                        <span className="w-24 hidden md:block h-1 bg-slate-400 rounded-sm"></span>
                        <p className="text-base md:text-lg text-slate-300">
                            With a strong foundation in Full Stack JavaScript Development, I have recently completed an intensive bootcamp at Hacktiv8, where I honed my skills over four months of rigorous training. Despite holding a high school diploma and having limited formal experience in the IT industry, the comprehensive nature of the bootcamp has equipped me with a robust foundation in modern web development practices.

                            During the course, I engaged in numerous hands-on projects that spanned the entire development lifecycle, from initial concept to deployment. This practical experience has not only refined my technical skills but also provided me with the ability to tackle real-world challenges effectively.

                            My training has included advanced proficiency in JavaScript, both on the client and server sides, as well as in various frameworks and technologies integral to full-stack development. I am adept at using tools and practices that ensure the delivery of high-quality, scalable, and maintainable code.

                            I am now seeking opportunities to leverage my skills in a professional environment where I can contribute to innovative projects and continue to grow as a developer. My commitment to excellence, combined with my hands-on project experience, positions me as a valuable asset for organizations seeking fresh perspectives and technical expertise.

                            I am highly flexible and ready to work in on-site, hybrid, or remote (WFH) settings. To learn more about my qualifications and experience, feel free to download my Transcript, which is readily available for your review.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href={transcriptURL}
                            download
                            className="inline-flex items-center px-6 py-3 text-base font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>Transcript</p>
                            <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
                        </a>
                        <a
                            href={certificateURL}
                            download
                            className="inline-flex items-center px-6 py-3 text-base font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                        >
                            <p>Certificate</p>
                            <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-8 lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <Image
                        src="/images/aboutme.jpg"
                        alt="user"
                        layout="fill"
                        objectFit="contain"
                        className="relative z-[11] w-[100%] h-[100%] object-contain"
                    />
                    <div className="absolute w-full h-full z-0 bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
                </div>
            </div>
        </div>
    );
};