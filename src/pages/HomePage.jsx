import React from 'react'
import NavBar from '../components/NavBar'
import ConstantContact from '../components/ConstantContact'
import BusinessFeatures from '../components/BusinessFeatures'
import ProvenProcess from '../components/ProvenProcess'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import HeroSection from '../components/HeroSection'
import About from '../components/About'



const HomePage = () => {
  return (
    <div className='scroll-smooth'>
    <NavBar />
    <HeroSection/>
    <About/>
    <ConstantContact />
    <BusinessFeatures />
    <ProvenProcess />
    <ContactUs />    
    <Footer />

    
    </div>
  )
}

export default HomePage