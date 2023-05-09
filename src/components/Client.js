import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiFillStar} from 'react-icons/ai'


const Client = () => {
    let [client, setclient] = useState()
    let [lodding , setloadding] = useState(true)
    useEffect(()=>{
        async function Clients (){
            let clientdata = await axios.get("https://bwfc-api.vercel.app/client")
            setclient(clientdata.data)
            setloadding(false)
            console.log(client.sliderItem);
        }
        Clients()
    },[])
    if(lodding){
        return
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Container>
        <div className='mb-10'>
            <h3 className='font-man font-bold text-sm text-primary'>
                {client.subTitle}</h3>
            <h2 className='font-man font-extrabold text-[40px] w-[350px]'>{client.title}</h2>
        </div>
        <div>
        <Slider {...settings}>
          {
            client.sliderItem.map((item)=>(
              <div>
                <div className='flex gap-10'>
                  <img src={item.image}/>
                  <div>
                    <span className='text-red-600 text-xl'>{item.symbol}</span>
                    <h2 className='font-man font-extrabold text-xl w-[290px] mb-4'>{item.heading}</h2>
                    <p className='font-man font-normal text-base text-[#757095] mb-4'>{item.paragraph}</p>
                  <div className='flex'>
                    <AiFillStar className='text-[#F9896B]'/>
                    <AiFillStar className='text-[#F9896B]'/>
                    <AiFillStar className='text-[#F9896B]'/>
                    <AiFillStar className='text-[#F9896B]'/>
                    <AiFillStar className='text-[#F9896B]'/>
                    
                  </div>

                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
        </div>
        <div>2</div>
    </Container>
  )
}

export default Client