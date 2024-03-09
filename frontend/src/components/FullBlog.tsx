
import { Blog } from '../hooks'
import Avatar from './Avatar'


function FullBlog({ blog }: {blog: Blog}) {
  return (
         <div className=' lg:mx-32'>
            <div className=' md:grid grid-cols-12 px-10 w-full pt-10 max-w-screen-2xl'>
                <div className=' col-span-8 pb-4 pr-6'>
                    <div className=' text-5xl font-extrabold'>
                        {blog.title}
                    </div>
                    <div className=' text-slate-500 pt-3'>
                        Posted on 3rd March 2024
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </div>
                <div className=' col-span-4'>
                    <div className=' text-slate-600 text-lg'>
                        Author
                    </div>
                    <div  className=' flex'>
                        <div className=' flex flex-col justify-center pr-4'>
                            <Avatar size='big' name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className=' text-xl font-bold'>
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className=' text-slate-500'>
                                Here goes the author description / catchphrase
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
     </div>
  )
}

export default FullBlog