"use client"

import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Nav from '../UI/Nav/page';


const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState(false);
    

    const onValidate = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/apii/users/finduser", {email});
          setValidate(response.data.status);
      } catch (error : any) {
          console.log("error while validate", error)
          toast.error(error.status)
      }finally{
          setLoading(false)
      }
    }

  return (
    <div 
    
    className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Nav/>
      
            {!validate && <><h1 className='text-black'>{ loading? "Processing...":"Forgot Password" }</h1>
            <label htmlFor='email' className='text-black'>Enter Email</label>
            <input
                className='hover:border border-black rounded-lg px-2'
                type="email"
                placeholder='Email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button className='border border-gray-700 m-2 p-2 rounded-xl text-black' onClick={onValidate}>Validate User</button> </>}

            {validate && <><h1 className="text-black">We have send a verification Link Please Check Your Inbox and verify your email</h1></>}

    </div>
  )
}

export default ForgotPassword