import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/tokenSlice";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const users = useSelector(state => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    let user = users.find((el) => {
      return el.email == emailRef.current.value && el.password == passwordRef.current.value;
    });

    if (user) {
      dispatch(add(user.email));
      navigate('/')
    } else {
      alert('password or email invalid');
    }
  }
  return (
    <div className="container container-sm mx-auto mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white w-[450px] h-[500px] ml-[580px] mt-[100px] rounded-lg">
        <h1 className="text-center font-bold text-2xl mt-5">Welcome back!</h1>
          <label htmlFor=""  className="absolute mt-20 ml-6">Email</label>
          <input ref={emailRef} type="text" name="" id=""  placeholder=" Enter your email" className="ml-auto mr-auto p-2 w-[400px] border border-[#D1D1D1] rounded-lg mt-10"  />
           <label htmlFor="" className="absolute mt-40 ml-6">Password</label>
           <input ref={passwordRef} type="password" name="" id="" placeholder="Enter password" className="ml-auto mr-auto p-2 w-[400px] border border-[#D1D1D1] rounded-lg mt-4" />
           <h3 className="ml-[300px]">Forgot password?</h3>
          <button className="p-[15px] border w-[400px] ml-6 rounded-lg bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] h-[59px] text-white font-semibold">Log In</button>
      <div className="flex items-center ml-auto mr-auto gap-2 p-[15px] border border-[#E9E9E9] w-[400px] rounded-lg cursor-pointer ">
      <FcGoogle className="text-3xl ml-[100px]" />
      <h3 className="text-[#797979] font-semibold">Login with Google</h3>
      </div>
      <h3 className="text-center">or login with SSO</h3>
      </form>
    </div>
  );
}

export default Login;
