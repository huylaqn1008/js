import React, { useState } from 'react';
import loginImage from '../assets/login-user.gif';
import {BiShow, BiHide} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword (prev => !prev);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword (prev => !prev);
  }
  return (
    <div className='p-5 md:p-10'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-2'>
        <h1 className='text-center text-2x1 font-bold' style={{fontSize: '24px'}}>Sign up</h1>
        <div className='w-40 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={loginImage} className='w-full'/>
        </div>
        <form className='w-full py-3'>
          <label htmlFor='firstName'>First Name</label>
          <input type={"text"} id={"firstName"} name={"firstName"} className='mt-1 mb-2 w-full bg-slate-200 px-8 py-2 rounded-full focus-within:outline-blue-400'/>

          <label htmlFor='lastName'>Last Name</label>
          <input type={"text"} id={"lastName"} name={"lastName"} className='mt-1 mb-2 w-full bg-slate-200 px-8 py-2 rounded-full focus-within:outline-blue-400'/>

          <label htmlFor='email'>Email</label>
          <input type={"email"} id={"email"} name={"email"} className='mt-1 mb-2 w-full bg-slate-200 px-8 py-2 rounded-full focus-within:outline-blue-400'/>

          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 mt-1 mb-2 rounded-full outline-none focus-within:outline-blue-400'>
            <input type={showPassword ? "text" : "password"} id={"password"} name={"password"} className='w-full bg-slate-200 px-8 py-2 border-none outline-none  '/>
            <span className='flex text-xl py-3 cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
          </div>

          <label htmlFor='confirmpassword'>Confirm Password</label>
          <div className='flex px-2 py-1 bg-slate-200 mt-1 mb-2 rounded-full outline-none focus-within:outline-blue-400'>
            <input type={showConfirmPassword ? "text" : "password"} id={"confirmPassword"} name={"confirmPassword"} className='w-full bg-slate-200 px-8 py-2 border-none outline-none  '/>
            <span className='flex text-xl py-3 cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow/> : <BiHide/>}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }} className='flex py-3'>
            <button className="w-full max-w-[150px] bg-blue-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full">
              Sign up
            </button>
          </div>

          <p className='text-center py-2'>
            Already have an account? 
            <Link to='/login' className='font-bold text-red-500 hover:underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup