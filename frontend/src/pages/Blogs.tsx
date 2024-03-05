import Appbar from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlog } from "../hooks"

function Blogs() {
  const {loading, blogs} = useBlog();

  if(loading){
    return <div>
      loading.....
    </div>
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div >
          {blogs.map(blog => 
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd March 2024"}
            />
            )}
          

        </div>
      </div>
    </div>
  )
}

export default Blogs