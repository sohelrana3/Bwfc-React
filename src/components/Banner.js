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
      <section className='h-[500px] w-full bg-no-repeat bg-center' style={{ backgroundImage: `url(${bannerData.bannerbgshape})`    }}>
        <Container>
              <div className='flex'>
                  <div className='w-1/2'>
                    <h1 className='font-man font-extrabold text-6xl text-black mb-5'>{bannerData.bannerheading}</h1>
                    <p className='font-man font-normal text-xl text-primary w-[466px] mb-6'>{bannerData.bannerparagraph}</p>
                    <div className='flex'>
                        <a href='#' className='font-man font-bold text-base text-white bg-primary py-4 px-10 rounded-full'>{bannerData.bannerButton.text}</a>
                        <a href='#'></a>
                    </div>
                  </div>
                  <div className='w-1/2'></div>
              </div>
        </Container>
         
       

    </section>
  )
}

export default Banner