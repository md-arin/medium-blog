import React from 'react'

function Avatar({name}: {name:string}) {
  return (
    <div>
        
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className=" text-xs font-bold text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>

    </div>
  )
}

export default Avatar