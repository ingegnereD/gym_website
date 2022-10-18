import React from 'react'

const Aim = ({className, children}) => {
  return (
    <section className={`aim ${className}`}>
        {children}
    </section>
  )
}

export default Aim
