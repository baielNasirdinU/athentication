import { useState } from "react"
import { Input ,Button} from "../ui"
import { useDispatch, useSelector } from "react-redux"
import Validation from "./validation"
import AuthService from '../service/auth'
import {  userFailure, userStart, userSucces } from "../reducers/authReducer"
function Login() {
const [email,setEmail]=useState('')
const [password,setPasswrod]=useState('')
const dispatch=useDispatch()
const {error}=useSelector(state=>state.auth)

const handleLogin= async e=>{
  dispatch(userStart())
    e.preventDefault()
    const user={email,password}
    
  try {
    const response =await AuthService.userLogin(user)
    
    
    dispatch(userSucces(response.user))
  } catch (error) {
    dispatch(userFailure(error.response.data.errors))
    
  }
}

  return (
    <div >
<form action="" className="flex flex-col">
  {error!=null &&<Validation />}
      <Input type={'email'} placeholder={'email'} label={'email'} state={email}  setState={setEmail} />
      <Input type={'password'} placeholder={'password'} label={'passwrod'} state={password}  setState={setPasswrod}/>
      <Button  label={'press'} click={handleLogin}/>
</form>


    </div>
  )
}

export default Login