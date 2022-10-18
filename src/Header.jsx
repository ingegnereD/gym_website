import React from 'react'
import about from './component/images/welcomeBG6.jpg'

const Header = ({img, children}) => {
  return (
    <header>
        <div className="header-cont" style={{background: `url(${img})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}>
            <article className="children">
                {children}
            </article>
        </div>
    </header>
  )
}

export default Header
