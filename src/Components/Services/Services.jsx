import React from 'react'
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { motion } from 'framer-motion';
const Services = () => {
  const transition = { duration: 1, type: 'spring' }
  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        <motion.div
          initial={{ left: '36rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          style={{  left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, XD"}
          />
        </motion.div>


        <motion.div
          initial={{ left: '-10rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
          style={{ position: "absolute", top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, JavaScript, React"}
          />
        </motion.div>

        <motion.div
          initial={{ left: '36rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
          style={{ position: "absolute", top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dummy text is used by many web-developers to test how their HTML templates will look with real data."}
          />
        </motion.div>
        <div className="blue s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services