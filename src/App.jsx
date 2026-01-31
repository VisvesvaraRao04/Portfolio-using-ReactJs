import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Loader from './sections/Loader'

const App = () => {
  let [loading,setLoading]=useState(true);
  useEffect(()=>{
    const timer=setTimeout(() => {
      setLoading(false);
    }, 2000);
    return ()=> clearTimeout(timer);
  },[])
  if(loading)
  {
    return <Loader/>
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
