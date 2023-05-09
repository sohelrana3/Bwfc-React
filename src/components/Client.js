import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import axios from 'axios'

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
  return (
    <Container>
        <div className='mb-10'>
            <h3 className='font-man font-bold text-sm text-primary'>
                {client.subTitle}</h3>
            <h2 className='font-man font-extrabold text-[40px] w-[350px]'>{client.title}</h2>
        </div>
        <div>
            
        </div>
        <div>2</div>
    </Container>
  )
}

export default Client