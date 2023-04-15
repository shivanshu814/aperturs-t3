import React from "react";
import BasicButton from "./basic_button";

const ConnectSocials = () => {
  return (
    <div className="mt-[10vh]  w-[95%] rounded-xl p-6 shadow-custom">
      {/* <h1 className='text-5xl font-medium text-gray-600'>Connect Socials</h1> */}
      <div className="mt-4 flex flex-col">
        {/* <span className='text-3xl font-bold text-gray-700  mb-4'>Twitter</span>
                <span className='text-md font-normal text-gray-500 mb-3'>Connect your Twitter account to your profile</span>
                <BasicButton text='Connect'  onClick={()=>{}}/> */}
        <ConnectBlock
          heading="Twitter"
          subheading="Connect your Twitter account to your profile"
          buttontext="Connect"
          onClick={() => {}}
        />{" "}
        <div className="divider"></div>
        <ConnectBlock
          heading="LinkedIn"
          subheading="Connect your LinkedIn account to your profile"
          buttontext="Connect"
          onClick={() => {}}
        />
        <div className="divider"></div>
        <ConnectBlock
          heading="Instagram"
          subheading="Connect your Instagram account to your profile"
          buttontext="Connect"
          onClick={() => {}}
        />
        <div className="divider"></div>
        <ConnectBlock
          heading="Facebook"
          subheading="Connect your Facebook account to your profile"
          buttontext="Connect"
          onClick={() => {}}
        />
        <div className="divider"></div>
      </div>
    </div>
  );
};

type ConnectBlockProps = {
  heading: string;
  subheading: string;
  buttontext: string;
  onClick: () => void;
};

const ConnectBlock: React.FC<ConnectBlockProps> = ({
  heading,
  subheading,
  buttontext,
  onClick,
}) => {
  return (
    <>
      <span className="mb-4 text-2xl font-bold  text-gray-700">{heading}</span>
      <span className="text-md mb-3 font-normal text-gray-500">
        {subheading}
      </span>
      <BasicButton text={buttontext} onClick={onClick} />
    </>
  );
};

export default ConnectSocials;
