import React from 'react'
import { LogOut, Pencil } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/assets/profile.png'

const Profile = () => {
  return (
    <div className='w-[19vw] h-50 shadow-xl bg-gray-200 flex-col items-center flex p-5 rounded-md justify-between'>
        <div> <Image src={profile} className='w-15 h-15 rounded-full' alt={''}/></div> 
        <h3 className='font-semibold text-[1rem]'> Anthony Balderas </h3>
        <h3 className=' text-[0.6rem] text-gray-400'> anthonykyut@gmail.com </h3>
       
        <div className='flex gap-4 mt-3'>
        <Link href="/editprofile">
            <button className="w-10 h-10 bg-black p-3 rounded-xl text-white flex justify-center items-center">
                <Pencil />
            </button>
        </Link>
            <button> </button>
            <button> </button>
            <button className='w-10 h-10 bg-black p-3 rounded-xl text-white flex justify-center items-center'> <LogOut/></button>
        </div>
    </div>
  )
}

export default Profile
