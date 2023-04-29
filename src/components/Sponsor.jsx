import React, { useEffect } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import { useState } from 'react'

const Sponsor = () => {
    let [sponsorData, setsponsrData] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        async function sponsor(){
            let sponsordata = await axios.get("https://bwfc-api.vercel.app/sponsor")
            setsponsrData(sponsordata.data)
            setLoading(false)
        }
        sponsor()
        console.log(sponsorData.logos);
    },[])
    if (loading) {
        return
    }

  return (
    <Container>
        <div className='flex justify-center items-center'>
         <h2 className=''>{sponsorData.title}</h2>  
        </div>
        <div className='flex justify-between'>
            {sponsorData.logos.map(item=>(
                <img src={item.src} />
            ))}
        </div>
    </Container>
  )
}

export default Sponsor