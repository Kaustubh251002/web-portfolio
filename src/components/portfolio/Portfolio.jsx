import React from 'react'
import './portfolio.css'
import chare from '../../assets/chare1.png'
import drip from '../../assets/drip1.jpg'
import leetcode from '../../assets/leetcode.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Works</h4>
      <h1>Projects</h1>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={chare} alt="Chare" />
          </div>
          <h3>Chare</h3>
          <a href="https://github.com/Kaustubh251002/Chare" className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={drip} alt="Drip Monitor" />
          </div>
          <h3>Drip Monitor</h3>
          <a href="https://github.com/Kaustubh251002/Drip-Monitor" className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={leetcode} alt="Chare" />
          </div>
          <h3>Leetcode</h3>
          <a href="https://github.com/Kaustubh251002/DSA-and-General-Coding-Problems" className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio