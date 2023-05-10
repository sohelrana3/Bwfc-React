import React from 'react'
import Container from './layouts/Container'
import Haddinglow from './layouts/Haddinglow'
import Haddingtop from './layouts/Haddingtop'
import Para from './layouts/Para'
import Button from './layouts/Button'

const Residence = () => {
  return (
    <Container>
        <div className='flex py-28'>
            <div>
                <Haddinglow title='Our Feature'/>
                <Haddingtop title='All payments are linked to your  Financyaccount'/>
                <Para  title='Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'/>
                <Button title='Get Started'/>
            </div>
            <div>
                <img src='./images/rese.png'/>
            </div>
        </div>
    </Container>
  )
}

export default Residence