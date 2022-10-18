import React from 'react'
import { useState, useEffect } from 'react'
import { BsQuestionLg } from 'react-icons/bs'
import { FaqCard } from './Card'
import { faqCards } from '../dataArray'

const Btn =({hide, show, info, title})=>{
    const [showIcon, setShowIcon] = useState(false)

    function handleIcon() {
        if (showIcon) {
                setShowIcon(false)
            }
            else if(!showIcon){
                setShowIcon(true)
            }
    }
    return(
        <>
        <section className="header" onClick={handleIcon}>
            <h4>{title}</h4>
            <button onClick={handleIcon}>
                { showIcon ? <span>{hide}</span> : <span>{show}</span> }
            </button>
        </section>
        {showIcon && <p>{info}</p>}
        </>
    )
}

const FAQ = () => {
        const [faqShowIcon, setFaqShowIcon]= useState(false)

        function handleIconState(){
            if (faqShowIcon) {
                setFaqShowIcon(false)
            }
            else if(!faqShowIcon){
                setFaqShowIcon(true)
            }
        }
  return (
    <section className="freq-question">
        <div className="cont">
            <div className="top">
                <span><BsQuestionLg /></span>
                <h3>FAQs</h3>
            </div>
            <section className="body">
                {
                    faqCards.map((data, index)=>{
                        const {title, info, showInfo, hideInfo} = data
                        return (
                            <FaqCard key={index} {...data} className="freq-card">
                                <Btn hide={hideInfo} show={showInfo} info={info} title={title} />
                            </FaqCard>
                        )
                    })
                }
            </section>

        </div>
    </section>
  )
}

export default FAQ
