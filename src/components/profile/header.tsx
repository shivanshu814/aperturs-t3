import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const ProfileHeader = () => {

    const {data: session} = useSession()
    console.log(session)

    if(!session) return <div>Something Went Wrong</div>
    

  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <div className='w-full p-8  rounded-xl h-[30vh] bg-cover bg-center bg-no-repeat'
    style={{
        backgroundImage: 'url(gradbg.png)'
        //set cover
    }}
    >
    </div>
    <div className='w-[95%] p-4 flex justify-between rounded-full m-[-7vh] glassMorphism  h-[10vh]'>

        <div className='flex'>
            <Image className='rounded-xl shadow-md '
            src={session.user.image ?? 'profile.png'}
            width={65}
            height={50}
            alt='profile'
            />
            <div className='flex flex-col justify-center ml-6'>
                <h1 className='text-xl font-medium text-gray-600'>{session.user.name}</h1>
                <h1 className='text-sm font-medium text-gray-500'>UI/UX Designer</h1>
            </div>

        </div>

    </div>
    </div>
    
  )
}

export default ProfileHeader
