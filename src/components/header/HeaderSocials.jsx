import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kaustubh-mishra-500337205/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Kaustubh251002" target="_blank"><FaGithub /></a>
        <a href="https://www.codechef.com/users/kaustubh2510" target="_blank"><SiCodechef/></a>
        <a href="https://leetcode.com/kmishra2510/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.instagram.com/kaustubhm25/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials