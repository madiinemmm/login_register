import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/user.Slice'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

function Register() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();


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
     
         <form onSubmit={handleSubmit} className='flex gap-5  flex-col  bg-white w-[450px] h-[570px] ml-[580px] mt-[100px] rounded-lg'>
         <h1 className='text-center font-bold text-2xl mt-5'>Let's go!</h1>
         <label htmlFor=""  className="absolute mt-[68px] ml-6">Full Name</label>
         <input ref={nameRef} type="text" name="" id="" placeholder='John Doe' className="ml-auto mr-auto p-2 w-[400px] border border-[#D1D1D1] rounded-lg mt-4"  /> 
         <label htmlFor=""  className="absolute mt-[145px] ml-6">Email</label>
        <input ref={emailRef} type="text" name="" id="" placeholder='example@site.com' className="ml-auto mr-auto p-2 w-[400px] border border-[#D1D1D1] rounded-lg mt-4"  />
        <label htmlFor=""  className="absolute mt-[220px] ml-6">Choose Password</label>
        <input ref={passwordRef} type="password" name="" id="" placeholder='Minimum 8 characters' className="ml-auto mr-auto p-2 w-[400px] border border-[#D1D1D1] rounded-lg mt-4"  />
        <button className="p-[15px] border w-[400px] ml-6 rounded-lg bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] h-[59px] text-white font-semibold">Sign Up</button>
        <div className="flex items-center ml-auto mr-auto gap-2 p-[15px] border border-[#E9E9E9] w-[400px] rounded-lg cursor-pointer ">
      <FcGoogle className="text-3xl ml-[100px]" />
      <h3 className="text-[#797979] font-semibold">Login with Google</h3>
      </div>
      <h3 className="text-center">or login with SSO</h3>
      <p className='border border-[#D9D9D9] w-[450px] mt-2'></p>
      <p className='text-[11px] ml-auto mr-auto'>By lobby the button above, you agree to our Terms of Service and Privacy Policy.</p>
         </form>
   
    </div>
  )
}

export default Register