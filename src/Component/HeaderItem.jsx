import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white items-center mb-3 gap-3 flex font-semibold cursor-pointer hover:underline underline-offset-8 '>
        <Icon/> 
        <h2 className=''>{name} </h2>
        
    </div>
  )
}

export default HeaderItem