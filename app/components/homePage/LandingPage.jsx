import React from 'react'
import Header from '../header/Header'
import Intro from '../introduction/Intro'
import WelcomTocat from '../welcomeToCat/WelcomTocat'
import Benefits from '../benefits/Benefits'
import ExploreCourses from '../exploreCourses/ExploreCourses'
import BenefitsSection from '../helpful/HelpFul'
import Footer from '../footer/Footer'

function LandingPage() {
  return (
    <div>
      <Header/>
      <Intro/>
      <WelcomTocat/>
      <BenefitsSection/>
      <ExploreCourses/>
      <Benefits/>
      <Footer/>
      
    </div>
  )
}

export default LandingPage