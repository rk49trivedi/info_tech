import React from 'react';
import './About.css';
import CardNews from './CardNews';
import { motion } from 'framer-motion';

function About() {

  const transition = {duration:6,type:'spring'};

  return (
    <div className="container m-auto grid md:grid-cols-2 py-40">
        {/* Left Section  */}
        
      <motion.div 
      initial={{bottom:"-74%"}}
      whileInView={{bottom:"0%"}}
      transition={transition}
      style={{bottom:'0%'}}
      className="px-6 z-0 lg:mx-10 relative">
        <div className="hidden sm:mb-8 sm:flex sm:text-left">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-orange-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            About
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center text-left gap-x-6">
          
            <a
              href="#"
              className="rounded-md  px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              {" "}
              Get started
            </a>
            
            <a
              href="#"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </motion.div>
        {/* Left Section Over*/}

        {/* Right Section */}
        <motion.div initial={{bottom:"-74%"}}
          whileInView={{bottom:"0%"}}
          transition={transition}
          style={{bottom:'0%'}}
          className='px-6 z-0 lg:mx-10 relative'>
            <CardNews/>
        </motion.div>
        {/* Right Section Over */}

    </div>
  );
}

export default About