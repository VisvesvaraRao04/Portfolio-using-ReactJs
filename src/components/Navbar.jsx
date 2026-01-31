import React from 'react'
import { FaUser,FaMailBulk, FaHome, FaPen, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='divContainer'>
      <a className='divContents' href="#mainnamediv"><FaHome/> <span>Home</span></a>
      <a className='divContents' href="#contactContainer"><FaMailBulk/> <span>Contact</span></a>
      <a className='divContents' href="#abouth1andp"><FaUser/> <span>About</span></a>
      <a className='divContents' href="#skillsdiv"><FaPen/><span>Skills</span></a>
      <a className='divContents' href="#projectsDiv"><FaProjectDiagram/><span>Projects</span></a>
    </div>
  )
}

export default Navbar
