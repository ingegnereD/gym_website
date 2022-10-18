import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import {useState, useEffect} from 'react'
import './navBar.css'
import team15 from './images/team15.png'
import { links } from '../dataArray'
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [size, setSize] = useState(window.innerWidth)
    const [menuIcon, setMenuIcon] = useState(false)
    const [displayIcon, setDisplayIcon] =useState(true)

       
    const changeSize = ()=>{
        setSize(window.innerWidth)
    }
    
    useEffect(()=>{
        window.addEventListener('resize', changeSize)
        if (size >= 991) {
            setMenuIcon(false)

        }
        else if(size < 991){
            setMenuIcon(true)
        }

         return () => window.removeEventListener('resize', changeSize);
    },[size])

    function handleMenu(){
        if (displayIcon) {
            setDisplayIcon(false)
        }else if (!displayIcon) {
            setDisplayIcon(true)
        }
    }
    return (
        <nav className='nav'>
            <article className="nav-cont">
                <section className="left">
                    <Link to="/" className='logo' onClick={()=> setDisplayIcon(false)}>
                        <img src={team15} alt="" />
                        <h2>IRG<span>CNS</span></h2>
                    </Link>
                </section>
                <section className={displayIcon ? "slide-in middle":"slide-away middle"}>
                    <ul>
                        {
                            links.map((data, index)=>{
                                const {name, path} = data
                                return(  
                                    <li className={ displayIcon ? "aside-active":"aside-inactive"}  key={index} {...data}>
                                        <NavLink className={({isActive})=> isActive ? "active-link item" : "item"} onClick={()=> setDisplayIcon(false)}  to={path}>{name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                {menuIcon &&
                <section className="right">
                    <button className='nav-toggle-btn' onClick={handleMenu}>
                        {displayIcon ? <span className='showMenu'><AiOutlineClose /> </span> : <span className='hideMenu'><GoThreeBars /></span> }
                    </button>
                </section>}
            </article>
        </nav>
    )
}

export default NavBar
