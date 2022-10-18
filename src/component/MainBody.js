import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FaCrown} from 'react-icons/fa'
import {SiOpenaigym} from 'react-icons/si'
import welcome from './images/welcomeBG.jpg'
import welcome2 from './images/welcomeBG3.jpg'

const MainBody = () => {
  return (
    <section className="welcome-page" style={{background: `url(${welcome2})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}>
        <section className="welcome-page-element">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join The Lengends Of The Fitness World</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id deserunt aspernatur debitis dolore facere? Lorem ipsum dolor sit amet.</p> */}
            <Link to="/plans">
                <button className="btn">
                    Get Started
                </button>
            </Link>
        </section>
    </section>
  )
}

export default MainBody
