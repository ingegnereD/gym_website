import React from 'react'
import MainBody from '../../component/MainBody'
import Programs from '../../component/Programs'
import Values from '../../component/Values'
import FAQ from '../../component/FAQ'
import Testimonial from '../../component/Testimonial'
import Footer from '../../component/Footer'
import './homeStyle.css'

const Home = () => {
  return (
    <section className="main-footer">
      <main>
        <div className="main-container">
          <MainBody />
          <Programs />
          <Values />
          <FAQ />
          <Testimonial />
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default Home
