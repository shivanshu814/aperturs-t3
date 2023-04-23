import React from "react";
import { MdNotifications } from "react-icons/md";
import { IoMdContact, IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useAuth } from "@clerk/nextjs";

const Profile = () => {
  return (
    <div className="mb-8 flex items-center justify-between rounded-lg px-2  py-4">
      <Link href="/dashboard">
        <img src="logo.svg" width={30} height={30} className="cursor-pointer" />
      </Link>
      <div className="flex items-center">
        <MdNotifications className="mx-4 cursor-pointer text-2xl" />
        <div className="dropdown-end dropdown-hover dropdown">
          <img
            src="profile.svg"
            width={30}
            height={30}
            className="cursor-pointer rounded-full"
            tabIndex={0}
          />
          <Menu />
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const { signOut: logOutClerk } = useAuth();
  return (
    <ul
      tabIndex={0}
      className="w-34 dropdown-content menu rounded-box bg-base-100 p-2 shadow"
    >
      <Link href={"/profile"}>
        <li>
          <div className="flex justify-between text-sm">
            <p>Profile</p>
            <IoMdContact className="mx-2 text-xl " />
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
        <span
          className="flex  justify-between text-sm"
          onClick={() => {
            signOut();
            logOutClerk();
          }}
        >
          <a>Logout</a>
          <BiLogOut className="mx-2 text-xl" />
        </span>
      </li>
    </ul>
  );
};

export default Profile;
