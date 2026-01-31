import React from 'react'
import { FaEnvelope, FaGithub} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
  return <>
    <h1 className='Headings'>Contact</h1>
    <div id='contactContainer'>
        <a className='contactdivs' href="mailto:viswa@email.com"><FaEnvelope/>   <span>&nbsp; Email Me</span></a>
        <a className='contactdivs' href="https://www.linkedin.com/in/visvesvararao-vemparala-567b5622b"><FaLinkedin/> <span>&nbsp; Linked In</span></a>
        <a className='contactdivs' href="https://github.com/VisvesvaraRao04"><FaGithub/> <span>&nbsp; Github</span></a>
    </div>
  </>
}

export default Contact
