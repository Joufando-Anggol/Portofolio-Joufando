import { TypeAnimation } from "react-type-animation";

export default function TextEffect() {
    return (
        <TypeAnimation
            sequence={[
                'Frontend Developer',
                1500,
                'Backend Developer',
                1500,
                'Fullstack Developer',
                1500,
            ]}
            speed={50}
            className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
            repeat={Infinity}
        />
    )
}