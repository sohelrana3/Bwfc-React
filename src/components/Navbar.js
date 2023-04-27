import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa"
import Container from './layouts/Container'


const Navbar = () => {

    let [navbarData,setNavbarData] = useState({})
    let [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function nav(){
            let navbar = await axios.get("https://bwfc-api.vercel.app/navbar")
            setNavbarData(navbar.data)
            setLoading(false)
        }
        nav()
    },[])


    if(loading){
        return
    }



  return (
      <Container>
        <div className='flex justify-between items-center'>
            <div className='w-[10%]'>
            <img src={navbarData.logo}/>
            </div>
            <div className='w-[56%]'>
                <ul className='flex justify-center gap-x-10 font-man font-normal text-sm '>
                    {navbarData.navItems.map(nitem=>(
                        <li className='group relative transition ease-in-out delay-150 hover:text-primary'>{nitem.item}
                           { nitem.dropDown && 
                                <>
                                    <FaAngleDown className='absolute top-1 -right-3.5'/>
                                <ul className='absolute top-full left-0 bg-white shadow-md p-5 min-w-[100px] rounded-lg duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                                    {nitem.dropDownItem.map(ditem=>(
                                        <li>{ditem.dropItem}</li>
                                    ))}
                                    </ul>
                                </>    
                            }


                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-[34%] flex justify-end gap-x-2.5'>
            {navbarData.buttonOne.visibility &&
                
                <a className=' py-4 px-9 inline-block text-primary font-man text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition ease-in-out delay-150' href="#">{navbarData.buttonOne.text}</a>
            }

            {navbarData.buttonTwo.visibility &&
               <a className='bg-primary py-4 px-9 inline-block text-white font-man text-sm font-semibold rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150' href="#">{navbarData.buttonTwo.text}</a>
              
            }

            {navbarData.buttonThree.visibility && 
                 <a className='bg-primary py-4 px-9 inline-block text-white font-man text-sm font-semibold rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150' href="#">{navbarData.buttonThree.text}</a> 
            
            }
             
            
            </div>
        </div>
    </Container>
  )
}

export default Navbar