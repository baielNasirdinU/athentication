import { useSelector } from "react-redux"

function Validation() {
    const {error}=useSelector(state=>state.auth)
    console.log(error);
    
  return (
    <div>
sfdad

    </div>
  )
}

export default Validation