import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BsPlayFill} from 'react-icons/bs'
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
      <section className='' style={{ backgroundImage: `url(${bannerData.bannerbgshape})`    }}>
        <Container>
              <div className='flex'>
                  <div className='w-1/2 mt-16'>
                    <h1 className='font-man font-extrabold text-6xl text-black mb-5'>{bannerData.bannerheading}</h1>
                    <p className='font-man font-normal text-xl text-[#64607D] w-[466px] mb-6'>{bannerData.bannerparagraph}</p>
                    <div className='flex gap-x-16'>
                        <div className='flex'>
                            <a href='#' className='font-man font-bold text-base text-white bg-primary py-4 px-10 rounded-full'>{bannerData.bannerButton.text}</a>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <div className='bg-[#22D497] p-4 rounded-full'>
                            <BsPlayFill className=' text-white text-lg' /> 
                            </div>
                            <a href='#' className='font-man font-bold text-base text-primary'>{bannerData.video.text}</a>
                        </div>
                    </div>
                  </div>
                  <div className='w-1/2'>
                    <img src={bannerData.bannerrightimg} />
                  </div>
              </div>
        </Container>
         
       

    </section>
  )
}

export default Banner