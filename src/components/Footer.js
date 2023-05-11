import React from 'react'
import Container from './layouts/Container'
import Footerhadding from './layouts/Footerhadding'
import Footitem from './layouts/Footitem'

const Footer = () => {
  return (
    <section className='bg-[#1B1C31] pt-28 pb-32 border-b border-[#404444]'>
      <Container>
       <div className='flex'>
          <div className='w-1/2'>
            <img src='./images/logow.png' alt='logo'/>
            <p className='font-man font-medium text-base text-[#adabab] mt-5 w-[520px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
          </div>
          <div className='w-1/2 flex justify-between'>
            <div>
              <Footerhadding item='Company'/>
              <ul>
                <Footitem item='About Us'/>
                <Footitem item='Careers'/>
                <Footitem item='Blog'/>
                <Footitem item='Pricing'/>
              </ul>
            </div>
            <div>
              <Footerhadding item='Product'/>
                <ul>
                  <Footitem item='Invoicing Platform'/>
                  <Footitem item='Accounting Plateform'/>
                  <Footitem item='Create Proposal'/>
                  <Footitem item='Contracts'/>
                </ul>
            </div>
            <div>
              <Footerhadding item='Resources'/>
                <ul>
                  <Footitem item='Proposal Template'/>
                  <Footitem item='Invoice Template'/>
                  <Footitem item='Tuturoial'/>
                  <Footitem item='How to write a contract'/>
                </ul>
            </div>
          </div>
       </div>

      </Container>
    </section>
  )
}

export default Footer