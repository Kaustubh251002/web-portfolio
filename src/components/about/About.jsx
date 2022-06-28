import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { AiFillBook, AiFillStar } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h4>Get To Know</h4>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <p>
          I am an aspiring Blockchain Developer with experience in the fields of Blockchain, Hardware, IoT, and Web-Development. Apart
          from working on several projects in different development domains, I am constantly working on my core coding skills through
          Competitive Coding, and methodically studying DSA. I am pursuing my Bachelor's Degree in Computer Science and Engineering
          with a specialization in Business Systems from Vellore Institute of Technology-Vellore. My current interests are in the fields of
          Blockchain, core SWE, Core Java Programming, and Cloud Computing.
          <br /><br />
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </p>
        
        
      </div>
      <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Achievements</h5>
              <small>Winner of multiple hackathons hosted within VIT. A 2 (soon to be 3) star coder on codechef, with over 100 problems solved on leetcode.</small>
            </article>

            <article className='about__card'>
              <AiFillBook className='about__icon' />
              <h5>Experience</h5>
              <small>Started my journey in blockchain over a year ago. Also an intermediate level coder in DSA and Competitive Coding</small>
            </article>

            <article className='about__card'>
              <AiFillStar className='about__icon' />
              <h5>Extra Curriculars</h5>
              <small>Technical Head of IET-VIT, leading and mentoring Team Fourth Dimension, the technical team of IET-VIT.</small>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About