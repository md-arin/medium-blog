
import Appbar from '../components/Appbar';
import FullBlog from '../components/FullBlog';
import { useSingleBLog } from '../hooks'
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  const {loading, blog} = useSingleBLog({
    id: id || ""
  }); 

  if(loading){
    return (
      <div>
        loading....
      </div>
    )
  }
  return (
    <div>
      <Appbar />
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog