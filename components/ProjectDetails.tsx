import React from 'react'
import ProjectSlider from './ProjectSlider'

export default function ProjectDetails() {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem]">
            <h1 className="heading">
                <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
                    <ProjectSlider />
                </div>
            </h1>
        </div>
    )
}