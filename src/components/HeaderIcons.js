import React from 'react'

function HeaderIcons({Icon,Title}) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-8 group ml-10 mr-10">
        <Icon className="h:4 mb:-1 group-hover:animate-bounce">{Icon}</Icon>
        <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{Title}</p>
    </div>
  )
}

export default HeaderIcons