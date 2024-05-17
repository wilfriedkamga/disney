import React, { useState } from 'react'
import logo from '../assets/vite.svg'
import {HiHome,HiMagnifyingGlass,HiPlus,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2'
import {HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem'

const Header = () => {
    const [visibility,setVisibility]=useState(false)
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        
        {
            name:'WATCH TV',
            icon:HiPlus
        },
        
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        
        {
            name:'SERIES',
            icon:HiTv
        },

    ]
  return (
    <div className='flex items-center justify-between'>
        <div className='flex gap-8 items-center '>
            <div className=' hidden md:flex gap-8 items-center '>
                 <img src={logo} alt="logo" className='w-[60px] m-4  md:w-[80px] object-cover '/>
                    {menu.map((item)=>(
                     <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
            </div>
            <div className='flex md:hidden gap-8 items-center'>
                 <img src={logo} alt="logo" className='w-[60px] m-4  md:w-[80px] object-cover '/>
                    {menu.map((item,index)=>index<3&&(
                     <HeaderItem name={''} Icon={item.icon}/>
                    ))}
            </div>

            <div className='md:hidden' onClick={()=>{setVisibility(!visibility)}}>
                <HeaderItem name={''} Icon={HiDotsVertical} />

                {visibility?<div className=' md:hidden absolute bg-[#000000]  ml-4 mt-2 border-[0.5px] border-gray p-5'>
                 
                 {menu.map((item,index)=>index>2&&(
                  <HeaderItem name={item.name} Icon={item.icon} />
                 ))}
         </div>:null}
                
            </div>     
        </div>
        <img src="data:image/jpeg;base64,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"
         className='w-[50px] h-[50px] mr-4 rounded-full' alt="" />
        
    </div>
  )
}

export default Header