import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PopularFoods from '../components/PopularFoods'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <PopularFoods />
      <Testimonials />
      <div className='max-padd-container'>
        <Footer />
      </div>
    </>
  )
}

export default Home