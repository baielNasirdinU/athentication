import { IoLogoApple } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="  h-[4rem] flex items-center justify-between ">
<div className="logo text-[2rem] flex items-center gap-2" >
<IoLogoApple /><span>aple</span>

</div>
<div className=" flex gap-2">
<Link to={'/login'}>
  <button >login</button>
</Link>  
<Link to={'/register'}>

    <button>register</button>
</Link>
</div>

    </div>
  )
}

export default Navbar