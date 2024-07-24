import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { usePathname } from 'next/navigation'; // Use Next.js hook for current path

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);
    const pathname = usePathname(); // Hook to get the current path

    useEffect(() => {
        // Check if the current page is the homepage
        setIsHomePage(pathname === '/');

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show the button only on the homepage
    if (!isHomePage) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
            style={{ transition: 'opacity 0.3s ease' }}
        >
            <ArrowUpIcon className="w-6 h-6" />
        </div>
    );
}
