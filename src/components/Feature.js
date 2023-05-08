import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import Button from './layouts/Button'

const Feature = () => {
    let [feature, setFeature] = useState({})
    let [loading, setLoading]= useState(true)
    useEffect(()=>{
        async function features (){
            let featuredata = await axios.get("https://bwfc-api.vercel.app/feature")
            setFeature(featuredata.data)
            setLoading(false)
            console.log(feature.button.text);
        }
        features()
    },[])
    if(loading){
        return
    }
  return (
    <section className='p-24' style={{backgroundImage: `url(${feature.featureShape})`}}>
        <Container>
            <div className='flex'>
                <div className='w-1/2'>
                    <img className='-ml-24' src={feature.featureImage} alt='feature' />
                </div>
                <div className='w-1/2'>
                    <h3 className='font-man text-lg font-extrabold mb-6 text-primary capitalize'>{feature.subTitle}</h3>
                    <h2 className='font-man text-[50px] font-bold text-black mb-8'>{feature.title}</h2>
                    <p className='font-man text-lg font-normal mb-7 text-[#757095] w-[512px]'>{feature.paragraph}</p>
                    <Button title={feature.button.text} />
                    {/* <button>{feature.button.text}</button> */}
                </div>
            </div>
        </Container>
    </section>
   
  )
}

export default Feature