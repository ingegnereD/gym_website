import React from 'react'
import valuesBg from './images/valuesBg.jpg'
import { valueCard } from '../dataArray'
import { GiCutDiamond } from 'react-icons/gi'
import Card from './Card'

const Values = () => {
  return (
    <section className="values container">
        <div className="cont">
            <section className="left" style={{background: `url(${valuesBg})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} ></section>
            <section className="right">
                <div className="cont">
                    <div className="top">
                        <article>
                            <span> <GiCutDiamond  /></span> <h3>Our Values</h3>
                        </article>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident fugiat facere tempora nobis illum voluptatibus a vero necessitatibus. Quo corrupti aspernatur, similique repellendus beatae necessitatibus?
                        </p>
                    </div>
                    <div className="body">
                        {
                            valueCard.map((data, index)=>{
                                const {icon, title, info} = data
                                return(
                                    <Card className="vCard" key={index} {...data}>
                                        <span className="icon">{icon}</span>
                                        <h4>{title}</h4>
                                        <p>{info}</p>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Values
