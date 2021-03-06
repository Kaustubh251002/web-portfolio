import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png' 
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      
      <div className="container header__container">
        <h4>Hey There! I'm</h4>
        <h1>Kaustubh Mishra</h1>
        <h4 className="text-light">Blockchain Developer</h4>
        <CTA />

        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>▼</a>
      </div>
    </header>
  )
}

export default Header