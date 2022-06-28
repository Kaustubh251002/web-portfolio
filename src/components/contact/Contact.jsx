import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>kmishra2510@gmail.com</h5>
            <a href="mailto:kmishra2510@gmail.com">Send Message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>Kaustubh Mishra</h5>
            <a href="https://www.linkedin.com/in/kaustubh-mishra-500337205/">Send Message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram />
            <h4>Instagram</h4>
            <h5>kaustubhm25</h5>
            <a href="https://www.instagram.com/kaustubhm25/">Send Message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact