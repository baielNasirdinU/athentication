import { Routes,Route } from "react-router-dom"
import { Navbar,Home, Login, Register } from "./components"

function App() {
  return (
    <div className='bg-white container mx-auto border px-[2rem]'>
<Navbar />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>

      </Routes>
    </div>
  )
}

export default App