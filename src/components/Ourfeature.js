import React from 'react'
import Container from './layouts/Container'
import Haddingtop from './layouts/Haddingtop'
import Haddinglow from './layouts/Haddinglow'
import Para from './layouts/Para'


const Ourfeature = () => {
  return (
    <Container>
        <div className='flex justify-between py-20 bg-[#F3F7FA]'>
            <div className='ml-16'>
                <Haddinglow title='GGG'/>
                <Haddingtop title='hhhhh'/>
                <Para title='ssssss'/>
            </div>
            <div className='mr-28'>2</div>
        </div>
    </Container>
  )
}

export default Ourfeature