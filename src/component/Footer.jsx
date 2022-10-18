import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr'
import {TiSocialTwitter} from 'react-icons/ti'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {Link, NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="cont">
            <section className="top">
                <div className="note">
                    <h2>IRG-<span>CNS</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae sequi hic maxime nesciunt aspernatur, placeat totam dicta. Vel repellendus labore debitis recusandae vero, praesentium voluptas quibusdam nulla modi totam.</p>
                    <div className="socials">
                        <Link style={{textDecoration:"none"}} to="/">
                            <span><GrLinkedinOption /></span>
                        </Link>
                        <Link style={{textDecoration:"none"}} to="/">
                            <span><TiSocialTwitter /></span>
                        </Link>
                        <Link style={{textDecoration:"none"}} to="/">
                            <span><FaFacebookF /> </span>
                        </Link>
                        <Link style={{textDecoration:"none"}} to="/">
                            <span><BsGithub /> </span>
                        </Link>
                    </div>
                </div>
                <section className="permalinks foot-link">
                    <span><b>Permalinks</b></span>
                    <Link style={{textDecoration:"none"}} to="/about"><h4>About</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/plas"><h4>Plans</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/trainer"><h4>Trainer</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/"><h4>Blog</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/contact"><h4>Contact</h4></Link>
                </section>
                <section className="insights foot-link">
                    <span><b>Insights</b></span>
                    <Link style={{textDecoration:"none"}} to="/"><h4>Blog</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/"><h4>Case Studies</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/"><h4>Events</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/gallery"><h4>Communities</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/faq"><h4>FAQs</h4></Link>
                </section>
                <section className="contact foot-link">
                    <span><b>Get In Touch</b></span>
                    <Link style={{textDecoration:"none"}} to="/contact"><h4>Contact</h4></Link>
                    <Link style={{textDecoration:"none"}} to="/"><h4>Support</h4></Link>
                </section>
            </section>
            <section className="foot">
                <div className="cont">
                    <h3>2022 IRG-<span>CNS</span><span> &copy </span> All Rights Reserved</h3>
                </div>
            </section>
        </div>
    </footer>
  )
}

export default Footer
