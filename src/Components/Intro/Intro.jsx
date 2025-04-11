import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import glassesimoji from "../../img/glassesimoji.png";
 import thumbup from "../../img/thumbup.png";
 import crown from "../../img/crown.png";
 import { motion } from 'framer-motion'; 
const Intro=()=>{

  const transition ={duration :2,type: 'spring'}
  return (
    <div className="intro">
      <div className="i-left">
       <div className="i-name">
       <span>Hy! I Am</span>
           <span>Andrew Thomas</span>
           <span>
             Frontend Developer with high level of experience in web designing
             and development, producting the Quality work
           </span>
         </div>
         
         <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt=""/>
          <img src={LinkedIn} alt=""/>
          <img src={Instagram} alt=""/>
        </div>

      </div>
      <div className ="i-right">
      <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>
        <motion.img 
        initial ={{left :'-36%'}}
        whileInView={{left :'-24%'}}
        transition={transition}
        className='floating-div'
        src={glassesimoji} alt=""/>

        <motion.div
        initial ={{ top: '-4%',left: '74%'}}
        whileInView={{left : '68%'}}
        transition={transition}
        style={{top:'-4%',left:'68%'}}
        className='floating-div'
        >
          <FloatingDiv image ={crown} txt1='Web'txt2='Developer'/>
          </motion.div>
        </div>
        <div className='blur' style={{background:"rgb(238 210)"}}>
        </div>
        <div className="blur" style={{background: '#C1F5FF',top:'17rem',width:'21rem',height: '11 rem' , left: '-9rem'}}></div>
      </div>
   
 )
}

export default Intro