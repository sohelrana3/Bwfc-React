import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiFillStar} from 'react-icons/ai'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import { useRef } from 'react';


const Client = () => {
    const coustom = useRef()
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
    let next = ()=>{
      coustom.current.slickNext()
    }
    let prev = ()=>{
      coustom.current.slickPrev()
    }
    const settings = {
      dots: false,
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
        <Slider {...settings} ref={coustom}>
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
                    <h2 className='font-man font-black text-base'>{item.name}</h2>
                    <span className='font-man font-normal text-sm'>{item.designation}</span>
                  </div>
                </div>
                
              </div>
            ))
          }
        </Slider>
        </div>
        <div className='flex gap-x-6 mt-9 ml-9 '>
           <FaAngleLeft onClick={prev} className='text-2xl hover:text-white hover:bg-primary hover:rounded-full'/>
          <FaAngleRight onClick={next} className='text-2xl hover:text-white hover:bg-primary hover:rounded-full'/> 
        </div>
        <div className='mt-16 flex justify-between pt-10 pr-9 pb-8 pl-8 border border-solid border-[#DEE1E6] rounded-xl shadow-xl'>
          <p className='font-man font-normal text-xl text-[#757095] w-[770px]'>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
          <a className='py-4 px-16 bg-[#FF7F5C] rounded-full text-white font-man font-bold text-base cursor-pointer'>Get Started</a>
        </div>
    </Container>
  )
}

export default Client