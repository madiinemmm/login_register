import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/user.Slice'
import { useNavigate } from 'react-router-dom'

function Register() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const dispatch = useDispatch();
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        dispatch(register(user));
        nameRef.current.value = ''
        emailRef.current.value = ''
        passwordRef.current.value = ''  

        navigate('/login')


    }

  return (
    <div className=' container container-sm mx-auto mt-4'>
         <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
         <input ref={nameRef} type="text" name="" id="" placeholder='enter name' /> 
        <input ref={emailRef} type="text" name="" id="" placeholder='enter email' />
        <input ref={passwordRef} type="password" name="" id="" placeholder='enter password' />
        <button className='bg-blue-600 text-white rounded text-2xl w-[50%]'>Sign up</button>
         </form>
   
    </div>
  )
}

export default Register