import React from 'react'
import Footer from '../../component/Footer'
import {GalleryHeader ,gallery } from '../../dataArray'
import Header from '../../Header'
import './gallery.css'

const Gallery = () => {
  return (
    <div className="main-footer">
      <main>
        <div className="main-container">
          {
            GalleryHeader.map((data, index)=>{
                const {img, info, title} = data

                return(
                    <Header key={index} img={img}>
                        <h1>{title}</h1>
                        <h3>{info}</h3>
                    </Header>
                )
            })
          }
          <div className="gallery-cont">
            {gallery.map((data, index)=>{
            const {img} = data
            return(
                  <div key={index} className="gallery-img">
                      <div className="image" style={{background: `url(${img})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}></div>
                  </div>
            )
          })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
