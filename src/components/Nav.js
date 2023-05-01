import React from 'react'
import requests from '@/utils/requests'
import {useRouter} from "next/router";

const Nav = () => {
    const router = useRouter()
  return (
    <div className='relative'>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-20 overflow-hidden'>      {
                Object.entries(requests).map(([key,{title,url}]) => {
                    
                    return(
                        <h2
                         className='cursor-pointer duration-100 hover:scale-125 hover:text-white' 
                         key={key}
                         onClick={()=> router.push(`/?genere=${key}`)}>{title}</h2>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Nav