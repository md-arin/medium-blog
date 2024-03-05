import React from 'react'

function Avatar({name, size= "small"}: {name:string, size:"small" | "big"}) {
  return (
    <div>
        
    <div className={`relative inline-flex items-center justify-center 
     overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600
     ${size === "big"? "w-10 h-10" : 'w-6 h-6'}`}>
        <span className={`${size==="small" ? "text-xs" : "text-md"}font-bold text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>

    </div>
  )
}

export default Avatar