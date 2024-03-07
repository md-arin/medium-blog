import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import Landing from './pages/Landing'
import { RecoilRoot } from 'recoil'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <RecoilRoot>
          <Routes>
              <Route path='/' element={<Landing/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='signin' element={<Signin/>} />
              <Route path='/blogs' element={<Blogs/>} />
              <Route path='/blog/:id' element={<Blog/>} />
              <Route path='/publish' element={<Publish/>} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
        
    </>
  )
}

export default App
