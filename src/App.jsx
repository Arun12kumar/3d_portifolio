import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import Featurecards from './sections/Featurecards'
import ExperienceSection from './sections/ExperienceSection'

const Welcome = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <Featurecards/>
      <ExperienceSection/>
    </>
  )
}

export default Welcome