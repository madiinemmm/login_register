import React, { useRef } from "react";

function Login() {
  const emailRef = useRef;
  const passwordRef = useRef;

  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className=" container container-sm mx-auto mt-4">
       <form onSubmit={handleClick} className="flex flex-col gap-5">
        <input
          ref={emailRef}
          type="text"
          name=""
          id=""
          placeholder="enter email"
        />
        <input
          ref={passwordRef}
          type="password"
          name=""
          id=""
          placeholder="enter password"
        />
        <button className="bg-blue-600 text-white rounded text-2xl w-[50%]">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Login;
