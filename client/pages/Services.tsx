// import { CodeBracketSquareIcon, CommandLineIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";

// export default function Services() {
//     return (
//         <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
//             <p className="heading">
//                 My <span className="text-cyan-500">Skills</span>
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-stretch gap-[3rem] mt-[4rem] text-white">
//                 {/* <div data-aos="fade-right" className="flex flex-col bg-sky-400 transform transition-transform duration-300 hover:scale-105 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
//                     <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
//                     <h1 className="text-[20px] md:text-[30px] mt-[1rem] mb-[1rem] text-[#d3fae8]">
//                         Frontend
//                     </h1>
//                     <p className="text-[15px] text-[#fafafb] flex-grow">
//                         CSS, HTML, React, React Native, Bootstrap, Tailwindcss.
//                     </p>
//                 </div> */}
//                 {/* <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col bg-teal-400 transform transition-transform duration-300 hover:scale-105 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
//                     <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
//                     <h1 className="text-[20px] md:text-[30px] mt-[1rem] mb-[1rem] text-[#d3fae8]">
//                         Backend
//                     </h1>
//                     <p className="text-[15px] text-[#fafafb] flex-grow">
//                         In backend development, I focus on building robust and scalable server-side applications. My expertise includes utilizing Node.js for efficient server-side processing and Express.js for creating RESTful APIs. I am proficient in database management with MongoDB and PostgreSQL, ensuring data integrity and performance. My backend skills ensure the development of secure, high-performance systems that effectively support and integrate with frontend solutions.
//                     </p>
//                 </div> */}
//                 <div data-aos="fade-left" data-aos-delay="500" className="flex flex-col bg-blue-400 transform transition-transform duration-300 hover:scale-105 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
//                     <ComputerDesktopIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
//                     <h1 className="text-[20px] md:text-[30px] mt-[1rem] mb-[1rem] text-[#d3fae8]">
//                         Fullstack
//                     </h1>
//                     <p className="text-[15px] text-[#fafafb] flex-grow">
//                         In full-stack development, I integrate both frontend and backend technologies to deliver complete and cohesive web solutions. My expertise includes building interactive user interfaces with React and React Native, and developing robust server-side applications using Node.js and Express.js. I effectively manage data with MongoDB and PostgreSQL, ensuring seamless connectivity between the client and server. This comprehensive skill set enables me to create end-to-end solutions that are both efficient and scalable, addressing all aspects of modern web development.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { CodeBracketSquareIcon, CommandLineIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import ReactIcon from "../icons/React"
import HtmlIcon from "../icons/Html"
import CssIcon from "../icons/Css"
import TypescriptIcon from "../icons/Typescript"

export default function Services() {
    return (
        <div >
            < p className="heading" >
                My < span className="text-cyan-500" > Skills</span >
            </p >

            <div data-aos="fade-left" data-aos-delay="100" className="flex flex-row transform transition-transform duration-300 hover:scale-105 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                <ReactIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />
                <HtmlIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2 bg-white" />
                <CssIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />
                <TypescriptIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />



            </div>
        </div >
    )
}

