import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'
import Haddinglow from './layouts/Haddinglow'
import Haddingtop from './layouts/Haddingtop'

const Choose = () => {
    let [Choose, setChoose] = useState({})
    let [lodding, setLoading] = useState(true)
    useEffect(()=>{
        async function Chooses(){
            let Choosedata = await axios.get("https://bwfc-api.vercel.app/choose")
            setChoose(Choosedata.data)
            setLoading(false)
        }
    
        Chooses()
    },[])
    if(lodding){
        return
    }
  return (
        <Container>
            <div className='bg-[#F3F7FA] py-[56px] px-[81px] relative'>
                <div className='absolute -top-9 left-[75px]'>
                   <img src='./images/Choose.png' alt='logo'/>
                </div>
                <div className='w-1/2 m-auto text-center mb-[70px]'>
                        <Haddinglow title={Choose.subTitle}/>
                        <Haddingtop title={Choose.title}/>
                </div>
                <div className='flex flex-wrap gap-4'>
                        {Choose.items.map(item=>(
                            <>
                                {item.visibility && (
                                    <div className='w-[48%] bg-white relative pl-32 pt-14 pr-12 pb-9'> 
                                    <div className='w-14 h-14 absolute top-[60px] left-[30px] rounded-full' style={{backgroundColor: item.circleColor}}></div>
                                    <h2 className='font-man font-extrabold text-2xl mb-5'>{item.title}</h2>
                                    <p className='font-man font-normal text-lg text-[#757095] w-[320px]'>{item.details}</p>
                                    </div> 
                                )}
                            </>
                        ))}
                </div>
            </div>
        </Container>
  )
}

export default Choose