import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { RefObject } from "react";

interface Props {
    nav: boolean;
    closeNav: () => void;
    scrollToRef: (ref: RefObject<HTMLDivElement>) => void;
    heroRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    servicesRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectRef: RefObject<HTMLDivElement>;
    footerRef: RefObject<HTMLDivElement>;
}

export default function MobileNav({ nav, closeNav, scrollToRef, heroRef, aboutRef, servicesRef, skillsRef, projectRef, footerRef }: Props) {
    const navAnimation = nav ? "translate-x-0" : "-translate-x-full"; // Use consistent transform value

    return (
        <div
            className={`fixed ${navAnimation} transform transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
            style={{ pointerEvents: nav ? 'auto' : 'none' }} // Ensure pointer events are enabled
        >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div onClick={() => scrollToRef(heroRef)} className="nav-link-mobile">HOME</div>
                <div onClick={() => scrollToRef(aboutRef)} className="nav-link-mobile">ABOUT</div>
                <div onClick={() => scrollToRef(servicesRef)} className="nav-link-mobile">SERVICES</div>
                <div onClick={() => scrollToRef(skillsRef)} className="nav-link-mobile">SKILLS</div>
                <div onClick={() => scrollToRef(projectRef)} className="nav-link-mobile">PROJECT</div>
                <div onClick={() => scrollToRef(footerRef)} className="nav-link-mobile">CONTACT</div>
            </div>
            <div
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-cyan-500 cursor-pointer"
                onClick={closeNav}
            >
                <XMarkIcon />
            </div>
        </div>
    );
}
