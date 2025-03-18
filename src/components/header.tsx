// import { Link } from 'lucide-react'
import React from 'react'

const header = () => {
  return (
    <div className='p-3 h-10 bg-white shadow-md justify-between'>
         <div> Logo </div>
        <div className='flex gap-2 justify-center items-center'>
            {/* <Link href='/login'> Login</Link>
            <Link href='/register'> Register </Link> */}
        </div>
    </div>
  ) 
}

export default header
