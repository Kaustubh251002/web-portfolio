import arduino from '../assets/logos/arduino.svg'
import css from '../assets/logos/css.svg'
import firebase from '../assets/logos/firebase.svg'
import ganache from '../assets/logos/ganache.svg'
import git from '../assets/logos/git.svg'
import html from '../assets/logos/html.svg'
import java from '../assets/logos/java.svg'
import js from '../assets/logos/js.svg'
import linux from '../assets/logos/linux.svg'
import mysql from '../assets/logos/mysql.svg'
import nodejs from '../assets/logos/nodejs.svg'
import npm from '../assets/logos/npm.svg'
import php from '../assets/logos/php.svg'
import python from '../assets/logos/python.svg'
import react from '../assets/logos/react.svg'
import rust from '../assets/logos/rust.svg'
import solidity from '../assets/logos/solidity.svg'
import truffle from '../assets/logos/truffle.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'arduino':
            return arduino;
        case 'css':
            return css;
        case 'firebase':
            return firebase;
        case 'ganache':
            return ganache;
        case 'git':
            return git;
        case 'html':
            return html;
        case 'java':
            return java;
        case 'js':
            return js;
        case 'linux':
            return linux;
        case 'mysql':
            return mysql;
        case 'nodejs':
            return nodejs;
        case 'npm':
            return npm;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'react':
            return react;
        case 'rust':
            return rust;
        case 'solidity':
            return solidity;
        case 'truffle':
            return truffle;
    }
}