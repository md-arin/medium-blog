import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../config"


export interface Blog{
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": string
    }
}

export const useBlog = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
               
                setBlogs(res.data.blog);
                setLoading(false);
            })

    },[])

    return {
        loading,
        blogs
    }
    
}

export const useSingleBLog = ({id}: {id: string;}) => {

    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setBlog(res.data.blog);
                setLoading(false);
            })

    },[id])

    return {
        loading,
        blog
    }
}


export const useUserdetails = ()=>{
    const [username, setUsername] = useState("")

    useEffect( ()=> {
        axios.get(`${BACKEND_URL}/api/v1/user/me`, {
            headers: {
                Authorization: localStorage.getItem("token")            }
        })
        .then(res => setUsername(res.data.user.name))
    },[])

    return username
}