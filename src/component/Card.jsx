import React from 'react'
import { useState, useEffect } from 'react'

const Card = ({className, children}) => {
  return (
    <article className={`card ${className}`}>
            {children}
    </article>
  )
}

export default Card

export const FaqCard = ({className, children}) =>{
    const [questionInfo, setQuestionInfo] = useState(false)

  return(
    <article className={`faq-card ${className}`}>
      {children}
    </article>
  )
}