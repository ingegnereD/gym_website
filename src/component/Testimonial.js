import React from 'react'
import {RiDoubleQuotesL} from 'react-icons/ri'
import { testimonial } from '../dataArray'
import Card from './Card'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Testimonial = () => {


    function handleRightToLeft() {
        let card = document.querySelector('.testimonial-element')
        card.style ='transform: translateX(-25rem)'
    }
    function handleLeftToRight() {
        let card = document.querySelector('.testimonial-element')
        card.style ='transform: translateX(25rem)'
    }
  return (
    <section className="testimonial">
        <div className="cont">
            <div className="top">
                 <span><RiDoubleQuotesL /></span>
                <h3>Testimonials</h3>
            </div>
            <div className="body">
                <section className="testimonial-cont">
                    {testimonial.map((data, index)=>{
                        const {img, info,job,name} = data
                        return(
                                <Card className="testimonial-element" key={index}>
                                    <span className='imagew'> <img src={img} alt="" /> </span>
                                    <p>{info}</p>
                                    <h4><b>{name}</b></h4>
                                    <h4>{job}</h4>
                                </Card>
                        )
                    })}
                </section>
                <section className="pagination">
                    <span onClick={handleRightToLeft}><AiOutlineLeft/> </span>
                    <span onClick={handleLeftToRight}><AiOutlineRight/> </span>
                </section>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
