import ReactIcon from "../icons/React"
import HtmlIcon from "../icons/Html"
import CssIcon from "../icons/Css"
import TypescriptIcon from "../icons/Typescript"
import NextJsIcon from "../icons/NextJs"
import JavascriptIcon from "../icons/Javascript"

export default function Services() {
    return (
        <div >
            < p className="heading pt-10" >
                My < span className="text-cyan-500" > Skills</span >
            </p >

            <div data-aos="fade-left" data-aos-delay="100" className="flex flex-row transform transition-transform duration-300 hover:scale-105 hover:rotate-6 uppercase font-semibold text-center p-[2rem] pb-10">
                <ReactIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />
                <HtmlIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2 bg-white" />
                <CssIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />
                <TypescriptIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />
                <NextJsIcon className="w-[6rem] h-[6rem] mx-auto bg-slate-700 mt-2 mb-2" />
                <JavascriptIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mt-2 mb-2" />

            </div>
        </div >
    )
}

