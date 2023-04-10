import React from "react";
import { TweetEntry } from "~/components";

const CreateButton = () => {
  return (
    <div>
      <div className="flex">
        <label
          htmlFor="my-modal-3"
          className="btn-primary btn rounded-lg h-12 w-28 text-white text-sm font-bold"
        >
          Create
        </label>
      </div>
      <PopUp />
    </div>
  );
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
          <TweetEntry />
        </div>
      </div>
    </div>
  );
};

export default CreateButton;
