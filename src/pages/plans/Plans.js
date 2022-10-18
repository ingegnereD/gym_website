import React from 'react'
import Card from '../../component/Card'
import Footer from '../../component/Footer'
import { planHeader, silverPlan, goldPlan, platinumPlan } from '../../dataArray'
import Header from '../../Header'
import './plans.css'
import { Link } from 'react-router-dom'

const Plans = () => {
  return (
    <section className="main-footer">
      <main>
        <div className="main-cont">
          {planHeader.map((data, index)=>{
            const {img,info,title} = data

            return(
              <Header key={index} img={img}>
                <h1>{title}</h1>
                <h3>{info}</h3>
              </Header>
            )
          })}

          <div className="plans">
           
            {silverPlan.map((data, index)=>{
              const {title, info,price,featureName,feature1,feature2,feature3,feature4, feature10,feature11,feature5,feature6,feature7,feature8,feature9 } = data
              return(
                <Card key={index} {...data} className="silver card-plan" >
                  <h3>{title}</h3>
                  <small>{info}</small>
                  <h1>{price}<span>/mo</span> </h1>
                  <h5 className='first'><b>{featureName}</b></h5>
                  <h5>{feature1}</h5>
                  <h5>{feature2}</h5>
                  <h5>{feature3}</h5>
                  <h5>{feature4}</h5>
                  <h5 className='small'>{feature5}</h5>
                  <h5 className='small'>{feature6}</h5>
                  <h5 className='small'>{feature7}</h5>
                  <h5 className='small'>{feature8}</h5>
                  <h5 className='small'>{feature9}</h5>
                  <h5 className='small'>{feature10}</h5>
                  <h5 className='small'>{feature11}</h5>

                  <button className='plan-btn'>
                    Choose Plan
                  </button>
                </Card>
              )
            })}
            {goldPlan.map((data, index)=>{
              const {title, info,price,featureName,feature1,feature2,feature3,feature4, feature10,feature11,feature5,feature6,feature7,feature8,feature9 } = data
              return(
                <Card key={index} {...data} className="gold card-plan" >
                  <h3>{title}</h3>
                  <small>{info}</small>
                  <h1>{price}<span>/mo</span> </h1>
                  <h5 className='first'><b>{featureName}</b></h5>
                  <h5>{feature1}</h5>
                  <h5>{feature2}</h5>
                  <h5>{feature3}</h5>
                  <h5>{feature4}</h5>
                  <h5>{feature5}</h5>
                  <h5>{feature6}</h5>
                  <h5>{feature7}</h5>
                  <h5 >{feature8}</h5>
                  <h5 className='small'>{feature9}</h5>
                  <h5 className='small'>{feature10}</h5>
                  <h5 className='small'>{feature11}</h5>

                  <button className='plan-btn'>
                    Choose Plan
                  </button>
                </Card>
              )
            })}
            {platinumPlan.map((data, index)=>{
              const {title, info,price,featureName,feature1,feature2,feature3,feature4, feature10,feature11,feature5,feature6,feature7,feature8,feature9 } = data
              return(
                <Card key={index} {...data} className="platinum card-plan" >
                  <h3>{title}</h3>
                  <small>{info}</small>
                  <h1>{price}<span>/mo</span> </h1>
                  <h5 className='first'><b>{featureName}</b></h5>
                  <h5>{feature1}</h5>
                  <h5>{feature2}</h5>
                  <h5>{feature3}</h5>
                  <h5>{feature4}</h5>
                  <h5>{feature5}</h5>
                  <h5>{feature6}</h5>
                  <h5>{feature7}</h5>
                  <h5>{feature8}</h5>
                  <h5 >{feature9}</h5>
                  <h5>{feature10}</h5>
                  <h5>{feature11}</h5>

                  <button className='plan-btn'>
                    Choose Plan
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default Plans
