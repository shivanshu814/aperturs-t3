import React from "react";
import BasicButton from "./basic_button";
import { IoIosAddCircle } from "react-icons/io";

const ConnectSocials = () => {
  return (
    <div className="boxShadowCust  mt-[10vh] h-[50vh] w-[95%] rounded-xl p-6">
      {/* <h1 className='text-5xl font-medium text-gray-600'>Connect Socials</h1> */}
      <div className="mt-4 flex flex-col">
        <h2 className="text-3xl font-bold">Connect your socials</h2>

        <div className="mt-4 flex gap-4">
          <AddSocial />
        </div>
      </div>
    </div>
  );
};

const AddSocial = () => {
  return (
    <button className="btn-primary btn gap-2 text-white">
      <IoIosAddCircle className="text-2xl" />
      Add Socials
    </button>
  );
};

export default ConnectSocials;
