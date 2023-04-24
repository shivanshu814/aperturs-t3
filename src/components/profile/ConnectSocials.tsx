import React from "react";
import BasicButton from "./basic_button";
import { IoIosAddCircle } from "react-icons/io";
import {FaFacebookSquare,FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram,AiOutlineTwitter,} from 'react-icons/ai'

const ConnectSocials = () => {
  return (
    <div className="boxShadowCust  mt-[10vh] h-[50vh] w-[95%] rounded-xl p-6">
      {/* <h1 className='text-5xl font-medium text-gray-600'>Connect Socials</h1> */}
      <div className="mt-4 flex flex-col">
        <h2 className="text-3xl font-bold">
          Connect your socials
        </h2>
        <div className="mt-4 flex gap-4">
          <AddSocial />
        </div>
      </div>
    </div>
  );
};

const AddSocial = () => {
  return (
    <div>
      <label htmlFor="my-modal-3" className="btn-primary btn gap-2 text-white">
        <IoIosAddCircle className="text-2xl" />
        Add Socials
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Add Socials to Aperturs
          </h3>
          <Socials />
        </div>
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="grid grid-cols-3 py-4 gap-4">
      <button className="btn hover:bg-primary hover:text-white hover:border-0  gap-2">
        <FaFacebookSquare className="text-2xl " />
        <p>Facebook</p>
      </button>
      <button className="btn hover:bg-primary hover:text-white hover:border-0  gap-2">
        <AiOutlineTwitter className="text-2xl " />
        <p>Twitter</p>
      </button>
      <button className="btn hover:bg-primary hover:text-white hover:border-0  gap-2">
        <AiFillInstagram className="text-2xl " />
        <p>Insta</p>
      </button>
      <button className="btn hover:bg-primary hover:text-white hover:border-0  gap-2">
        <FaLinkedinIn className="text-2xl " />
        <p>Linkedin</p>
      </button>
    </div>
  )
}

export default ConnectSocials;






