import React from 'react'
import Card from './Card'

const TrainCard = ({img, children}) => {
  return (
    <article className="trainer-Card">
        <section className="pic" style={{background: `url(${img})`, backgroundPosition: 'center',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}></section>
        <section className="info">
            {children}
        </section>
    </article>
  )
}

export default TrainCard
