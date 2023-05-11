import React from 'react'
import Container from './layouts/Container'
import Haddinglow from './layouts/Haddinglow'
import Haddingtop from './layouts/Haddingtop'
import Para from './layouts/Para'
import Input from './layouts/Input'
import { Form } from 'react-router-dom'

const Contract = () => {
  return (
    <section className='bg-primary pt-24 pb-14'>
        <Container>
            <div className='flex'>
                <div className='ml-16 w-[60%]'>
                    <h3 className='font-man text-lg font-bold mb-6 text-white'>Why Choose Us</h3>
                    <h2 className='w-[550px] leading-[56px] font-man text-[50px] font-bold text-white mb-8'>Track your crytpo portfolio on the best way possible</h2>
                    <p className='font-man text-lg font-normal mb-7 text-white w-[480px]'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                </div>
                <div className='w-[40%] mt-10'>
                <Form>
                  <Input  placeholder='Email Address'/>
                  <Input  placeholder='Password'/>
                  <button className='bg-[#FF7F5C] py-4 px-[135px] font-man font-bold text-base text-white'>Get Started</button>
                </Form>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contract