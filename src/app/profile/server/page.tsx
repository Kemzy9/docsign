"use client"
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import SignatureCard from '@/app/card/Signature/page';
import Card from '@/app/card/page';
import Success from '@/app/success/page';
import Image from 'next/image';


const ProfilePage = ({ params }: any) => {

  const router = useRouter()

  const logout = async () => {
    console.log("in")
    try {
      await axios.get('/apii/users/logout');
      toast.success('Logout Successfully');
      router.push('/login')
    } catch (error: any) {
      console.log(error)
      toast.error(error.mesage)
    }
  }
  return (


    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Card/>
      <SignatureCard/>
      <Success/>


      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <a aria-current="page" className="flex items-center" href="/">
                <Image className="h-14 w-auto" src="remove.png" alt="image" />
                <span className="text-2xl font-bold">TheChatPdf</span>
                <p className="sr-only">Website Title</p>
              </a>

              {params.id && (
                <h1 className='text-black text-2xl ml-2'>Hi  {params.id}</h1>
              )}

            </div>

            <div className="flex items-center justify-end gap-3">

              <button className="border border-gray-700 p-2 rounded-xl text-black" onClick={logout}>Logout</button>

            </div>

          </div>

        </div>

      </header>
     
      <div className='justify-items-right'>
        <h2 className='text-center text-lg'>This is profile page</h2>
      </div>
      <Success/>


    </div>


  )
}

export default ProfilePage;