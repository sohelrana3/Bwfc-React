import React, { useEffect, useState } from 'react'
import Container from './layouts/Container'
import Haddinglow from './layouts/Haddinglow'
import Haddingtop from './layouts/Haddingtop'
import Para from './layouts/Para'
import Button from './layouts/Button'
import axios from 'axios'

const Account = () => {
    let [account, setaccount] = useState()
    let [lodding, setloddng] = useState(true)
    useEffect(()=>{
        async function Accounts (){
            let accountdata = await axios.get("https://bwfc-api.vercel.app/account")
            setaccount(accountdata.data)
            setloddng(false)
        }
        Accounts()
    },[])
    if(lodding){
        return
    }
  return (
    <Container>
        <div className='flex pt-24'>
            <div className='w-1/2'>
                <Haddinglow title={account.subTitle}/>
                <Haddingtop title={account.title}/>
                <Para title={account.paragraph}/>
                <Button title={account.button.text}/>
            </div>
            <div className='w-1/2'>
                <img src={account.accountImage}/>
            </div>
        </div>
    </Container>
  )
}

export default Account