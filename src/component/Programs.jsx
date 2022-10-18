import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { cards } from '../dataArray'
import {FaCrown} from 'react-icons/fa'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Programs = () => {
  return (
    <section className="programs container">
        <div className="cont">
            <article className="top">
                <span><FaCrown /></span>
                <h3>Our Programs</h3>
            </article>
            <section className="card-element">
                {cards.map((data)=>{
                    const {id, icon, title, info, path} = data
                    return(
                        <Card className="card" key={id} {...data}>
                            <span className="icon">{icon}</span>
                            <h4>{title}</h4>
                            <p>{info}</p>
                            <Link to="/plans" style={{textDecoration: "none"}}>
                                <button>
                                    Learn more <span><BsFillCaretRightFill /></span>
                                </button>
                            </Link>
                        </Card>
                    )
                })}
            </section>
        </div>
    </section>

  )
}

export default Programs
