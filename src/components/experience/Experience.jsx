import React from 'react'
import './experience.css'
import Marquee from 'react-fast-marquee';
import {skillsData} from '../../utils/skillsData';
import {skillsImage} from '../../utils/skillsImage';

const Experience = () => {
  return (
    <section id='experience'>
      <h4>The Tools and Technologies I Use</h4>
      <h1>Skills</h1>
      <div className="skills__scroll">
        <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="right">
          <div className="skills__boxes">
            {skillsData.map((skill,id) => (
              <div className="skills__box" key={id}>
                <img src={skillsImage(skill)} alt={skill} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Experience