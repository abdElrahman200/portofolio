import React from 'react'
import './hero.css'
import Lottie from 'lottie-react'
import deva from '../../../public/Animation2 - 1699122201206.json'
import { motion } from "framer-motion"



export default function hero() {
  return (
    <section className='hero flex'>
        <div className='rightSec animation'>
        <Lottie className='canimation' loop={true} style={{height:350,width:400}}  animationData={deva} />

        </div>
        <div className='lefttSec '>
        
        <div className='parent-avatar flex'>
          <motion.img
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:0.5}}
           src='personal.png' className='avatar'/>
          <div className='icon-verified'></div> 
          </div>
          <motion.h1
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:2}}
          
           className='title'>sowftware designer</motion.h1>
          <p className='subTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet eos maiores magnam sed, itaque accusantium ex libero aperiam odit tempora molestiae veritatis impedit consequatur consectetur! Sunt natus quidem perspiciatis.</p>

          <div className='icons flex'>
          <div className='icon icon-twitter-square'></div>
          <div className='icon icon-instagram'></div>
          <div className='icon icon-github'></div>
          <div className='icon icon-linkedin-square'></div>
          </div>

       

        </div>

    
   </section>

  )
}
