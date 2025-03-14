import React from 'react'
import Header from '../header/Header'
import Intro from '../introduction/Intro'
import WelcomTocat from '../welcomeToCat/WelcomTocat'
import Benefits from '../benefits/Benefits'
import ExploreCourses from '../exploreCourses/ExploreCourses'
import BenefitsSection from '../helpful/HelpFul'
import Footer from '../footer/Footer'
import Review from '../review/Review'
import Blogs from '../blogs/Blogs'
import { Query } from '../query/Query'

function LandingPage() {
  return (
    <div>
      <Header/>
      <Intro/>
      <WelcomTocat/>
      <BenefitsSection/>
      <ExploreCourses/>
      <Benefits/>
      <Blogs/>
      <Review/>
      <Query/>
      <Footer/>
      
    </div>
  )
}

export default LandingPage