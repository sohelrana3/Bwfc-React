import React from 'react'
import Container from './layouts/Container'

const Footerbottom = () => {
  return (
    <section className='bg-[#1B1C31]'>
        <Container>
            <div className='flex justify-between py-5'>
                <p className='font-man font-medium text-xs text-white'>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                <p className='font-man font-medium text-xs text-white'>Supported by Microsoft Startup</p>
            </div>
        </Container>
    </section>
  )
}

export default Footerbottom