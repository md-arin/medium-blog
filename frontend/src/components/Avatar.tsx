import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../../config"

function Avatar({ size= "small"}: { size:"small" | "big"}) {
 
const [name,setName] = useState("");

  useEffect( ()=> {
    axios.get(`${BACKEND_URL}/api/v1/user/me`, {
        headers: {
            Authorization: localStorage.getItem("token")            }
    })
    .then(res => setName(res.data.name)
    )
},[])
  
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