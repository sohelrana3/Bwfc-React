import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
const Banner = () => {

    let [bannerData, setBannerData] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        async function banner() {
            let bannerdata = await axios.get("https://bwfc-api.vercel.app/banner")
            setBannerData(bannerdata.data)
    
            setLoading(false)
        }
        banner()
    }, [])


    if (loading) {
        return
    }

  return (
      <section className='h-[500px] bg-no-repeat bg-center' style={{ backgroundImage: `url(${bannerData.bannerbgshape})`    }}>
        <Container>
              <div className='flex'>
                  <div className='w-1/2 bg-red-500 h-96'></div>
                  <div className='w-1/2 bg-green-500 h-96'></div>
              </div>
        </Container>
         
       

    </section>
  )
}

export default Banner