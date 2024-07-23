import React from "react";
import SkillItems from "./SkillItems";
import SkillLanguage from "./SkillLanguage";

export default function Skills() {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">
                Education & <span className="text-cyan-500">Skills</span>
            </h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillItems title="React Developer" year="2024" />
                    <SkillItems title="MERN Stack Developer" year="2024" />
                    <SkillLanguage
                        skill1="HTML"
                        skill2="CSS"
                        skill3="Javascript"
                        level1="w-[91%]"
                        level2="w-[88%]"
                        level3="w-[80%]"
                    />
                </div>
                <div>
                    <SkillItems title="React Native Developer" year="2024" />
                    <SkillItems title="Next Js Developer" year="2024" />
                    <SkillLanguage
                        skill1="React Native"
                        skill2="Next Js"
                        skill3="Typescript"
                        level1="w-[81%]"
                        level2="w-[78%]"
                        level3="w-[70%]"
                    />
                </div>
            </div>
        </div>
    )
}