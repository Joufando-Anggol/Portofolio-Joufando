import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { RefObject } from "react";

interface Props {
    nav: boolean;
    closeNav: () => void;
    scrollToRef: (ref: RefObject<HTMLDivElement>) => void;
    heroRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectRef: RefObject<HTMLDivElement>;
    projectDetailsRef: RefObject<HTMLDivElement>;
    footerRef: RefObject<HTMLDivElement>;
}

export default function MobileNav({ nav, closeNav, scrollToRef, heroRef, aboutRef, skillsRef, projectRef, projectDetailsRef, footerRef }: Props) {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div
            className={`fixed ${navAnimation} transform transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
        // style={{ pointerEvents: nav ? 'auto' : 'none' }} // Ensure pointer events are enabled
        >
            <div className="w-[-100vw] h-[100vh] flex flex-col items-center justify-center">
                <div onClick={() => scrollToRef(heroRef)} className="nav-link-mobile">HOME</div>
                <div onClick={() => scrollToRef(aboutRef)} className="nav-link-mobile">ABOUT</div>
                <div onClick={() => scrollToRef(skillsRef)} className="nav-link-mobile">SKILLS</div>
                <div onClick={() => scrollToRef(projectRef)} className="nav-link-mobile">PROJECT</div>
                <div onClick={() => scrollToRef(footerRef)} className="nav-link-mobile">CONTACT</div>
            </div>
            <div
                className="absolute z-[100000000] top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-cyan-500 cursor-pointer"
                onClick={closeNav}
            >
                <XMarkIcon />
            </div>
        </div>
    );
}
