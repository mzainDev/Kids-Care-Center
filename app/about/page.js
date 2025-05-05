import React from 'react'
import AboutPage from './aboutheader/page'
import AboutTeamSection from './aboutteamsec/page'
import EnrollSection from './enrollsection/page'
import FunFactSection from './funfactsec/page'
import TestimonialSection from './abouttestimonial/page'
import OurTeacher from '../components/OurTeacher'

const About = () => {
  return (
    <div>
      <AboutPage/>
      <AboutTeamSection/> 
      <EnrollSection/>
      <FunFactSection/>
      <TestimonialSection/>
      <OurTeacher/>
    </div>
  )
}

export default About