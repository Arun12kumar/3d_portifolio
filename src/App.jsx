import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import Featurecards from './sections/Featurecards'
import ExperienceSection from './sections/ExperienceSection'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

const Welcome = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <Featurecards/>
      <ExperienceSection/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default Welcome