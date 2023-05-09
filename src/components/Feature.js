import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import Button from './layouts/Button'
import Haddingtop from './layouts/Haddingtop'
import Haddinglow from './layouts/Haddinglow'
import Para from './layouts/Para'

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
    <section className='pt-28' style={{backgroundImage: `url(${feature.featureShape})`}}>
        <Container>
            <div className='flex'>
                <div className='w-1/2'>
                    <img className='-ml-24' src={feature.featureImage} alt='feature' />
                </div>
                <div className='w-1/2'>
                    <Haddinglow title={feature.subTitle}/>
                    <Haddingtop title={feature.title} />
                    <Para title={feature.paragraph}/>
                    <Button title={feature.button.text} />
                </div>
            </div>
        </Container>
    </section>
   
  )
}

export default Feature