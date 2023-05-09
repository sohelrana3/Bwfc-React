import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import Haddingtop from './layouts/Haddingtop'
import Haddinglow from './layouts/Haddinglow'
import Para from './layouts/Para'
import axios from 'axios'
import { Form } from 'react-router-dom'
import Input from './layouts/Input'


const Ourfeature = () => {
  let [payment, setpayment] = useState()
  let [loadding, setloadding] = useState(true)
  useEffect(()=>{
    async function payments(){
      let paymentdata = await axios.get("https://bwfc-api.vercel.app/payment")
      setpayment(paymentdata.data)
      setloadding(false)
      console.log(payment);
    }
    payments()
  },[])
  if(loadding){
    return
  }
  return (
    <Container>
      <section className='py-10'>
        <div className='flex bg-[#F3F7FA] rounded-xl'>
            <div className='ml-16 w-[60%]'>
                <Haddinglow title={payment.subTitle}/>
                <Haddingtop title={payment.title}/>
                <Para title={payment.paragraph}/>
            </div>
            <div className='mr-28 w-[40%] relative'>
                <h3 className='font-man font-bold text-2xl text-primary mb-6'>Get Started for Free</h3>
                <Form>
                  <Input  placeholder='Email Address'/>
                  <Input  placeholder='Password'/>
                  <button className='bg-[#FF7F5C] py-4 px-[135px] font-man font-bold text-base text-white'>Get Started</button>
                </Form>
              <img className='absolute -top-28 -right-28 w-[150px]' src={payment.paymentShape}/>
            </div>
        </div>
      </section>
    </Container>
  )
}

export default Ourfeature