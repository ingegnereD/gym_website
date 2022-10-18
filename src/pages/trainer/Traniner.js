import React from 'react'
import Footer from '../../component/Footer'
import { ourTrainer, trainerHeader } from '../../dataArray'
import Header from '../../Header'
import './trainer.css'
import {GrLinkedinOption} from 'react-icons/gr'
import {TiSocialTwitter} from 'react-icons/ti'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import TrainCard from '../../component/TrainCard'

const Traniner = () => {
  return (
    <div className="main-footer">
      <main>
        <div className="main-container">
            {
              trainerHeader.map((data, index)=>{
                const {img,info,title} = data;
                return(
                  <Header key={index} img={img}>
                    <h1>{title}</h1>
                    <h3>{info}</h3>
                  </Header>
                )
              })
            }
            <div className="trainers">
              {ourTrainer.map((data, index)=>{
                const {img,job,name} = data

                return(
                  <TrainCard key={index} img={img}>

                    <h2>{name}</h2>
                    <h5>{job}</h5>
                    
                    <section className="social">
                      <span><GrLinkedinOption /></span>
                      <span><TiSocialTwitter /></span>
                      <span><FaFacebookF /> </span>
                      <span><BsGithub /> </span>
                    </section>
                  </TrainCard>
                )
              })}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Traniner
