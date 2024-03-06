
import axios from 'axios'
import Appbar from '../components/Appbar'
import { BACKEND_URL } from '../../config'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Publish() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
  return (
    <div>
        <Appbar />
        <div className=' flex justify-center'>
            <div className=' max-w-screen-lg w-full' >  
                
                <input onChange={(e)=>{

                    setTitle(e.target.value)
                }} 
                    type="email" id="helper-text" aria-describedby="helper-text-explanation" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 " placeholder="Title" />
                <div>
                    <TextArea onChange={(e)=>{
                        setContent(e.target.value)
                    }} 
                    />
                    <div className="flex items-center justify-between px-3 py-2 border-t ">
                <button onClick={async()=>{

                 try {
                    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    },{
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    
                    navigate(`/blog/${res.data.id}`)
                 } catch (error) {
                    alert(error)
                    console.log(error);      
                 }

                }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200">
                    Publish post
                </button>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                            </svg>
                        <span className="sr-only">Attach file</span>
                    </button>
                    <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                            </svg>
                        <span className="sr-only">Set location</span>
                    </button>
                    <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        <span className="sr-only">Upload image</span>
                    </button>
                </div>
            </div>
                </div>
            </div>
         
            
        </div>
    </div>
  )
}


function TextArea({onChange}: {onChange :(e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return(        
    
        <div className="w-full mb-4 border border-gray-400 rounded-lg bg-gray-50 mt-6">
            <div className="px-4 py-2 bg-white rounded-t-lg">
                <label  className="sr-only">Your comment</label>
                <textarea onChange={onChange} id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:outline-none " placeholder="Write an Article..." required ></textarea>
            </div>

    </div>
    

)
}

export default Publish