import Quote from '../components/Quote'
import Auth from '../components/Auth'

function Signin() {
  return (
    <div className=' md:grid grid-cols-2'>
      <div >
        <Auth type='signin' />
      </div>
      <div className=' invisible md:visible'>
      <Quote />
      </div>
    </div>
  )
}

export default Signin