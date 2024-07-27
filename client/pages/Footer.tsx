import React from "react";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/Github";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import XIcon from "../icons/Twitter";

export default function Footer() {
    return (
        <div className="pt-4 pb-4 bg-gray-900 text-white">
            <div className="border-b border-gray-500 w-4/5 mx-auto">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://www.linkedin.com/in/joufando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-500 transition"
                    >
                        <LinkedinIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://github.com/Joufando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-500 transition"
                    >
                        <GithubIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://www.facebook.com/joufando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-500 transition"
                    >
                        <FacebookIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://www.instagram.com/joufando/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-500 transition"
                    >
                        <InstagramIcon width="24px" height="24px" />
                    </a>
                    <a
                        href="https://www.x.com/joufando/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-500 transition"
                    >
                        <XIcon width="24px" height="24px" />
                    </a>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Get to Know Me</h2>
                    <p className="mb-4">Connect with me on social media or drop a message!</p>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; Portfolio Joufando Anggol 2024.</p>
            </div>
        </div>
    );
}
