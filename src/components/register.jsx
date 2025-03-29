import { useState } from "react"
import { Button, Input } from "../ui"
import { FiLoader } from "react-icons/fi";

import AuthService from "../service/auth"
import { useDispatch, useSelector } from "react-redux"
import { userFailure, userStart, userSucces } from "../reducers/authReducer"
function Register() {
  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPasswrod]=useState('')
  const dispatch=useDispatch()
  const {isLoading}=useSelector(state=>state.auth)
  


const handleClick= async(e)=>{
  dispatch(userStart())
  e.preventDefault()
  const user={email,username:userName,password}
  try {
    const response= await AuthService.userRegister(user)
    dispatch(userSucces(response.data))
    
  } catch (error) {
    dispatch(userFailure(error.response.data.errors))
    
    
  }

}
  return (
    <div>
          <div >

<form action="" className="flex flex-col">
  {
    isLoading &&<FiLoader /> 
  }

      <Input t placeholder={'userName'} label={'userName'} state={userName}   setState={setUserName}/>
      <Input type={'email'} placeholder={'email'} label={'email'} state={email}   setState={setEmail}/>
      <Input type={'password'} placeholder={'password'} label={'passwrod'} state={password}  setState={setPasswrod}/>
<Button label={'create'} click={handleClick}/>
</form>


    </div>
    </div>
  )
}

export default Register