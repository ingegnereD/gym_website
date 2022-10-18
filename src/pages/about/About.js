import React from 'react'
import './about.css'
import Header from '../../Header'
import Footer from '../../component/Footer'
import { AboutHeader, ourMission, ourStory, ourVison, } from '../../dataArray'
import Aim from '../../Aim'

const About = () => {
    return ( 
    <section className="main-footer">
      <main>
        <div className="main-container">
            {
                AboutHeader.map((data, index)=>{
                    const {img, info, title} = data

                    return(
                        <Header key={index} img={img}>
                            <h1>{title}</h1>
                            <h3>{info}</h3>
                        </Header>
                    )
                })
            }

            { ourStory.map((data)=>{
                const {img, info1,info2,info3,title} =data

                return(
                    <Aim className="ourStory">
                        <section className="left">
                            <h1>{title}</h1>
                            <div>
                                <p>{info1}</p>
                                <p>{info2}</p>
                                <p>{info3}</p>
                            </div>
                        </section>
                        <section className="right image" style={{background: `url(${img})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} >
                        </section>
                    </Aim>
                )
            })}
            { ourVison.map((data)=>{
                const {img, info1,info2,info3,title} =data

                return(
                    <Aim className="ourVision">
                        <section className="left">
                            <h1>{title}</h1>
                            <div>
                                <p>{info1}</p>
                                <p>{info2}</p>
                                <p>{info3}</p>
                            </div>
                        </section>
                        <section className="right image" style={{background: `url(${img})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}>
                        </section>
                    </Aim>
                )
            })}
            { ourMission.map((data)=>{
                const {img, info1,info2,info3,title} =data

                return(
                    <Aim className="ourMission">
                        <section className="left">
                            <h1>{title}</h1>
                            <div>
                                <p>{info1}</p>
                                <p>{info2}</p>
                                <p>{info3}</p>
                            </div>
                        </section>
                        <section className="right image" style={{background: `url(${img})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} >
            
                        </section>
                    </Aim>
                )
            })}
        </div>
      </main>
      <Footer />
    </section>
    )
}

export default About