import React from 'react'
import { FaCss3, FaDatabase, FaHtml5, FaJava, FaJs, FaPhp, FaReact } from 'react-icons/fa'

const Skills = () => {
  return <>
        <h1 className='Headings'>skills</h1>
      <div id='skillsdiv'>
        <div className='skills'>
            <FaJava/>
            <h1>Java</h1>
            <h3>advanced</h3>
        </div>
        <div className='skills'>
            <FaHtml5/>
            <h1>Html</h1>
            <h3>advanced</h3>
        </div>
        <div className='skills'>
            <FaCss3/>
            <h1>Css</h1>
            <h3>advanced</h3>
        </div>
        <div className='skills'>
            <FaJs/>
        <h1>JavaScript</h1>
        <h3>advanced</h3>
        </div>
        <div className='skills'>
            <FaReact/>
        <h1>React</h1>
        <h3>advanced</h3>
        </div>
        <div className='skills'>
            <FaDatabase/>
        <h1>sql</h1>
        <h3>advanced</h3>
        </div>
        <div className='skills'>
            <FaReact/>
        <h1>Python</h1>
        <h3>basics</h3>
        </div>
        <div className='skills'>
            <FaPhp/>
        <h1>Php</h1>
        <h3>basics</h3>
      </div>
    </div>
  </>
}

export default Skills
