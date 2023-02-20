import React from 'react'
import TestimonialSlide from './TestimonialSlide';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";


function Testimonial() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'theClass',
        arrows: false
      };

    const TestimonialArr = [
        
        {
            auther:"Manish Singaniya",
            description:'"Perfect choice for your next SaaS application."',
            position:'SEO Developer',
            profile:'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',

        },
        {
            auther:"John Doe",
            description:'"InfoTech is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard."',
            position:'Web Developer',
            profile:'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',

        },
        {
            auther:"Micheal Gough",
            description:'"Twins is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
            position:'CEO at Google',
            profile:'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',

        },
    
    ]

  return (

    <div className="grid md:grid-cols-1 py-20 bg-white z-50" id='testimonial-section'>
        <div className="w-full max-w-6xl mx-auto px-2 py-16 sm:px-0">
        <div className='text-center sm:mb-30'>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Testimonial</h1>
        </div>
            <div className='px-6'>
                <Slider {...settings}>

                    {
                        TestimonialArr.map(
                            (data => (
                                <TestimonialSlide description={data.description} auther={data.auther} auther_position={data.position} profile={data.profile}/>
                            ))
                        )
                    }
                    
                </Slider>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial
