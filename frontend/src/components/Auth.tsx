import  {  useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import LabelledInput from './LabelledInput'
import { SignupInput } from '@me-cyno/medium-common'
import axios from 'axios'
import { BACKEND_URL } from "../../config"



function Auth({type}: {type: "signup" | "signin"}) {
    const [postInputs, setPostInputs ] = useState <SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    const navigate = useNavigate();

async function handleRequest() {
    try {
        const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
        const jwt = res.data.jwt;
        localStorage.setItem("token", jwt);
        navigate("/blogs")

    } catch (error) {
        alert("Error while signing up")
        console.log(error);
        
    }
}


  return (
    <div className=' h-screen flex justify-center flex-col'>
    
       <div className=' flex justify-center '>
        
          <div >
                <div className=' px-10'>
                    <div className=' text-4xl font-bold '>
                            Create an acoount
                    </div>
                    <div className=' text-slate-400 text-center'>
                        {type === "signup" ? "Already have an account?" : "Dont have an account?"} 
                        <Link className='pt-2 underline pl-1' to={type === "signup" ? "/signin" : "/signup"}>{type === 'signup' ? "Signin" : "Signup"}</Link>
                    </div>
                </div>
                <div className='mt-6'>
                  {type=== "signup" ? <LabelledInput label='Name' type='text' placeholder='Enter your Name' onChange={e=>{
                        setPostInputs(c=> ({
                            ...c,
                            name: e.target.value
                        }))
                    }} /> : null}
                    
                     <LabelledInput label='Email' type='text' placeholder='Youremail@example.com' onChange={e=>{
                        setPostInputs(c =>({
                            ...c,
                            username: e.target.value
                        }))
                    }}/>

                    <LabelledInput label='Password' type='password' placeholder='Enter your Password' onChange={e=>{
                        setPostInputs(c =>({
                            ...c,
                            password: e.target.value
                        }))
                    }}/>

                    <button onClick={handleRequest} type="button" className=" w-full mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                     focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                      dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup"? "Sign Up": "Sign in"}</button>
                </div>
                <div className=' underline mt-10 ml-32'>
                    <Link to={"/"} >Back to Homepage</Link></div>

          </div> 
       </div>
    </div>
  )
}

export default Auth