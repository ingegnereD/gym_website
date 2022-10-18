import React from 'react'
import { ContactHeader } from '../../dataArray'
import Header from '../../Header'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {IoMdMail} from 'react-icons/io'

import './contact.css'
import Footer from '../../component/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [email, setEmail] = useState(false)
  const [facebook, setFacebook] = useState(false)
  const [whatsapp, setWhatsapp] = useState(false)

  function handleEnter() {
    setEmail(true)
    setFacebook(false)
    setWhatsapp(false)
  }
  function handleLeave() {
    setEmail(false)
    setFacebook(false)
    setWhatsapp(false)
  }
  function handleFaceEnter(){
        setEmail(false)
    setFacebook(true)
    setWhatsapp(false)
  }
  function handleFaceLeave(){
        setEmail(false)
    setFacebook(false)
    setWhatsapp(false)
  }
  function handleWhatEnter() {
        setEmail(false)
    setFacebook(false)
    setWhatsapp(true)
  }
  function handleWhatLeave() {
        setEmail(false)
    setFacebook(false)
    setWhatsapp(false)
  }
  return (
    <div className="main-footer">
      <main>
        <div className="main-container">
          {ContactHeader.map((data, index)=>{
            const {img,info,title} = data
            return(
              <Header key={index} img={img}>
                <h1>{title}</h1>
                <h3>{info}</h3>
              </Header>
            )
          })}

          <section className="contact-icon">
            
            <span id='mail' onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={()=> window.location ='mailto: iroegbu.dg@gmail.com'}><IoMdMail /> {email && <p>Email</p>}</span>
            <span id='whatsapp' onMouseEnter={handleWhatEnter} onMouseLeave={handleWhatLeave} ><IoLogoWhatsapp /> {whatsapp && <p>Whatsapp</p> } </span>
            <span id='facebook' onMouseEnter={handleFaceEnter} onMouseLeave={handleFaceLeave}><FaFacebookMessenger /> {facebook &&  <p>Facebook</p>} </span>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
