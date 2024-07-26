import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCarousel from './ProjectCarousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function ProjectSlider() {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
        >
            <ProjectCarousel
                image="/images/p1.jpg"
                name="Bunaken E-Commerce"
                role="Web Application"
                techStack='Tech Stack:  '
                serverSide='Server Side:  '
                detail='Next.js, TypeScript, Mongo DB, bcrypt, JWT, Jose, Zod.   '
                clientSide='Client Side:  '
                detail2='SweetAlert2, Tailwind CSS, DaisyUI. '

            />
            <ProjectCarousel
                image="/images/p2.jpg"
                name="M-Event"
                role="Mobile Application"
                techStack='Tech Stack:  '
                serverSide='Server Side:  '
                detail='React Native, Supabase, Express.js, PostgreSQL, Postgis, JWT, Node.js, Axios, Sequelize.  '
                clientSide='Client Side:  '
                detail2='Expo, SweetAlert2, Formik, Yup, Paper, Ionicons'
            />
        </Carousel>
    )
}

