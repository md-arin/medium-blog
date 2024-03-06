import Appbar from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlog } from "../hooks"

function Blogs() {
  const {loading, blogs} = useBlog();

  if (loading) {
    return <div>
        <Appbar /> 
        <div  className="flex justify-center">
            <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    </div>
}
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" mx-8" >
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