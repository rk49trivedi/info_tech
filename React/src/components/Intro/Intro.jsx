import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import glassesimoji from "../../img/glassesimoji.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Shopify from "../../img/Shopify.png"
import Upwork from "../../img/Upwork.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion';


function Intro() {

  const transition = {duration:6,type:'spring'};


  return (
    <div className="Intro py-40 bg-gray-300" id="Intro">
      <div className="m-auto grid md:grid-cols-2 w-full">
      <div className="i-left px-6 lg:mx-10">
            <div className="i-name">
                <h1 className='text-4xl font-bold tracking-tight text-slate-900 lg:py-2 sm:text-6xl'>Smart Ideas for your </h1>
                <span className='text-4xl font-bold tracking-tight text-slate-900 lg:py-2 sm:text-6xl'>Brands Are Here</span>
                <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work </span>
            </div>
            <div className='lg:mt-10 flex items-center text-left gap-x-6'>
            <a
              href="#"
              className="rounded-md  px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              {" "}
              Contact Us
            </a>
            </div>
            <div className="i-icons">
                <img src={Github} alt=""/>
                <img src={LinkedIn} alt=""/>
                <img src={Instagram} alt=""/>
            </div>
        </div>
        <div className="hidden lg:block px-6 lg:mx-10 i-right">
            <motion.img 
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"  src={Vector1} alt=""/>
            <motion.img 
            initial={{ rotate: 180 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle -z-1" src={Vector2} alt=""/>
            <img src={boy} alt=""/>
            
            <motion.div 
            initial={{left:"-36%"}}
            whileInView={{left:"-17%"}}
            transition={transition}>
            <FloatingDiv image={Upwork} txt1='Upwork' txt2='Freelancing' />
            </motion.div>
            
            <motion.div
            initial={{top:"-4%",left:"74%"}}
            whileInView={{left:"52%"}}
            transition={transition}
            style={{top:'-4%',left:'52%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>

            <motion.div
            initial={{top:"18em",left:"74%"}}
            whileInView={{left:"58%"}}
            transition={transition}
            style={{top:'18em',left:'52%'}}>
            <FloatingDiv image={Shopify} txt1='Shopify' txt2='Developer' />
            </motion.div>

            <motion.div
            initial={{left:"-36%"}}
            whileInView={{left:"-19%"}}
            transition={transition}
            style={{top:'18em'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>

            
        </div>
      </div>
        
    </div>
  )
}

export default Intro