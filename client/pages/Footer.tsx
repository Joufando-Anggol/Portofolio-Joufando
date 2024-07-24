import React from "react";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/Github";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";

export default function Footer() {
    return (
        <div className="pt-16 pb-8 bg-gray-900 text-white">
            <div className="border-b border-gray-700 pb-8 w-4/5 mx-auto">
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/joufando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
                    >
                        <LinkedinIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://github.com/Joufando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
                    >
                        <GithubIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://www.facebook.com/joufando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
                    >
                        <FacebookIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://www.instagram.com/joufando/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
                    >
                        <InstagramIcon width="24px" height="24px" />
                    </a>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>&copy; Portfolio Joufando Anggol 2024.</p>
            </div>
        </div>
    );
}
