import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Client = () => {
    let [client, setclient] = useState()
    let [lodding , setloadding] = useState(true)
    useEffect(()=>{
        async function Clients (){
            let clientdata = await axios.get("https://bwfc-api.vercel.app/client")
            setclient(clientdata.data)
            setloadding(false)
            console.log(client.subTitle);
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
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div>1</div>
            <div>2</div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
        <div>2</div>
    </Container>
  )
}

export default Client