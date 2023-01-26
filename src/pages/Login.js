import React from 'react'
import {auth,provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export default function Login({setIsAuth}) {

  const navigate=useNavigate()

  const signIn = () => {
      signInWithPopup(auth,provider).then((res)=>{
          localStorage.setItem("isAuth" , true)
          setIsAuth(true)
          navigate("/")
      })
  }

  return (
    <>
      <button onClick={signIn}>sign in google</button>
    </>
  )
}
