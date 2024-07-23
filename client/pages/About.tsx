import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function About() {
    const transcriptURL = "https://drive.google.com/uc?export=download&id=15X2YLcifX9Iw7mTIZNeI49Ve26Nxp7KU";

    return (
        <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md:[1rem]">
                        ABOUT ME
                    </h1>
                    <h2
                        className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white"
                    >
                        Transforming <span className="text-cyan-500">Visions</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            With a strong foundation in Full Stack JavaScript Development, I have recently completed an intensive bootcamp at Hacktiv8, where I honed my skills over four months of rigorous training. Despite holding a high school diploma and having limited formal experience in the IT industry, the comprehensive nature of the bootcamp has equipped me with a robust foundation in modern web development practices.

                            During the course, I engaged in numerous hands-on projects that spanned the entire development lifecycle, from initial concept to deployment. This practical experience has not only refined my technical skills but also provided me with the ability to tackle real-world challenges effectively.

                            My training has included advanced proficiency in JavaScript, both on the client and server sides, as well as in various frameworks and technologies integral to full-stack development. I am adept at using tools and practices that ensure the delivery of high-quality, scalable, and maintainable code.

                            I am now seeking opportunities to leverage my skills in a professional environment where I can contribute to innovative projects and continue to grow as a developer. My commitment to excellence, combined with my hands-on project experience, positions me as a valuable asset for organizations seeking fresh perspectives and technical expertise.

                            I am highly flexible and ready to work in on-site, hybrid, or remote (WFH) settings. To learn more about my qualifications and experience, feel free to download my Transcript, which is readily available for your review.
                        </p>
                    </div>
                    <a
                        href={transcriptURL}
                        download
                        className="inline-flex items-center px-[1.5rem] py-[0.75rem] text-[16px] font-bold uppercase bg-[#55e6a5] text-black hover:bg-cyan-500 transition-all duration-200 rounded-md"
                    >
                        <p>Transcript</p>
                        <ArrowDownTrayIcon className="w-[1.4rem] h-[1.5rem] ml-2" />
                    </a>
                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <Image
                        src="/images/aboutme.jpg"
                        alt="user"
                        layout="fill"
                        objectFit="contain"
                        className="relative z-[11] w-[100%] object-contain"
                    />
                    <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
                </div>
            </div>
        </div>
    );
}
