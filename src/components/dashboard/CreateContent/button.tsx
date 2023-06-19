import React from "react";
import { TweetEntry } from "~/components";
import {IoPencilSharp} from 'react-icons/io5'

type CreateButtonProps = {
  text: string;
};

const CreateButton: React.FC<CreateButtonProps> = ({ text }) => {
  return (
    <div>
      <div className="flex">
        <label
          htmlFor="my-modal-3"
          className="btn-primary btn gap-2 flex text-white"
        >
          {text}
          <IoPencilSharp className="ml-2" />   
        </label>
      </div>
      <PopUp/>
    </div>
  );
};

type PopUpProps = {
  postId: string;
};

const PopUp = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Post</h3>
          <TweetEntry postId=''/>
        </div>
      </div>
    </div>
  );
};

export default CreateButton;
