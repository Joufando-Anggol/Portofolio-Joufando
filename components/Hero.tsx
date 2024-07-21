import React from "react"
import Particle from "./Particle"
import TextEffect from "./TextEffect"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid 1g:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        HELLO, I'M <span className="text-cyan-500">JOUFANDO</span>
                    </h1>
                    <TextEffect />
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
                    <Image
                        src="/images/joufando.png"
                        alt="user"
                        layout="fill"
                        className="object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}