import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { RefObject } from "react";

interface Props {
    openNav: () => void;
    scrollToRef: (ref: RefObject<HTMLDivElement>) => void;
    heroRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    servicesRef: RefObject<HTMLDivElement>;
    projectRef: RefObject<HTMLDivElement>;
    projectDetailsRef: RefObject<HTMLDivElement>;
    footerRef: RefObject<HTMLDivElement>;
}

export default function Nav({ openNav, scrollToRef, heroRef, aboutRef, servicesRef, projectRef, projectDetailsRef, footerRef }: Props) {
    return (
        <div className="w-full fixed z-50 top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-full">
                <h1 className="flex-1 cursor-pointer text-[25px] text-white font-bold">
                    JOU
                    <span className="text-cyan-500">FANDO</span>
                </h1>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <div className="nav-link" onClick={() => scrollToRef(heroRef)}>HOME</div>
                    <div className="nav-link" onClick={() => scrollToRef(aboutRef)}>ABOUT</div>
                    <div className="nav-link" onClick={() => scrollToRef(servicesRef)}>SERVICES</div>
                    <div className="nav-link" onClick={() => scrollToRef(projectRef)}>PROJECT</div>
                    <div className="nav-link" onClick={() => scrollToRef(footerRef)}>CONTACT</div>
                </div>
                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <Bars3Icon
                        className="w-[2rem] text-cyan-500 cursor-pointer"
                        onClick={openNav}
                    />
                </div>
            </div>
        </div>
    );
}
