import React from 'react'
import {MdNotifications} from 'react-icons/md'
import {IoMdContact,IoMdSettings} from 'react-icons/io'
import {BiLogOut} from 'react-icons/bi'
import Link from 'next/link'


const Profile = () => {
  return (
    <div className='flex px-2 py-4 rounded-lg items-center justify-between  mb-8'>
      <Link href='/dashboard'>
      <img 
      src='logo.svg'
      width={30}
      height={30}
      className = 'cursor-pointer'
      />
      </Link>
      <div className='flex items-center'>
        <MdNotifications className='text-2xl mx-4 cursor-pointer' />
        <div className='dropdown dropdown-end dropdown-hover'>
        <img 
        src='profile.svg'
        width={30}
        height={30}
        className='rounded-full cursor-pointer'
        tabIndex={0}
        />
        <Menu />
        </div>
        
      </div>
    </div>
  )
}



const Menu = () => {
  return (
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-34">
    <Link href={'/profile'}>
    <li> 
      <div className='text-sm flex justify-between'>
        <p >Profile</p>
        <IoMdContact className='text-xl mx-2 ' />
      </div>
    </li>
    </Link>
    {/* <li>
      <span className='text-sm  flex justify-between'>
        <a>Settings</a>
        <IoMdSettings className='text-xl mx-2' />
        </span>
    </li> */}
    <li>
      <span className='text-sm  flex justify-between'>
        <a>Logout</a>
        <BiLogOut className='text-xl mx-2' />
        </span>
    </li>
  </ul>
  );
}





export default Profile
