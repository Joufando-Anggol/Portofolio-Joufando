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

export default function MobileNav({
    nav,
    closeNav,
    scrollToRef,
    heroRef,
    aboutRef,
    skillsRef,
    projectRef,
    footerRef,
}: Props) {
    const navAnimation = nav ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0";

    return (
        <div
            className={`fixed ${navAnimation} transform transition-transform duration-300 ease-in-out top-0 right-0 z-[1000000] bg-gradient-to-b from-[#09101a] to-[#1a2b3c] opacity-95 w-[100vw] h-[100vh] lg:w-[50vw] lg:h-[50vh] rounded-bl-full`}
        >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20 lg:pt-32">
                <div onClick={() => scrollToRef(heroRef)} className="nav-link-mobile">
                    HOME
                </div>
                <div onClick={() => scrollToRef(aboutRef)} className="nav-link-mobile">
                    ABOUT
                </div>
                <div onClick={() => scrollToRef(skillsRef)} className="nav-link-mobile">
                    SKILLS
                </div>
                <div onClick={() => scrollToRef(projectRef)} className="nav-link-mobile">
                    PROJECT
                </div>
                <div onClick={() => scrollToRef(footerRef)} className="nav-link-mobile">
                    CONTACT
                </div>
            </div>
            <div
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
                onClick={closeNav}
            >
                <XMarkIcon className="text-white w-6 h-6" />
            </div>
        </div>
    );
}


