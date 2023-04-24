import React from "react";
import { IoPencilSharp } from "react-icons/io5";
import { TbTrashFilled } from "react-icons/tb";
import { HiQueueList, HiPaperAirplane } from "react-icons/hi2";
import { TweetEntry } from "..";

type DraftCardProps = {
  postId: string;
};

const DraftCard: React.FC<DraftCardProps> = ({ postId }) => {
  return (
    <div className="postShadow flex  w-64 flex-col rounded-md p-6">
      <div className="mb-2 flex justify-between">
         <h1 className="text-xl">Draft</h1>
      </div>
      <div className="h-40 overflow-auto">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <ButtonGroup  postId={postId}/>
    </div>
  );
};

type ButtonGroupProps = {
  postId: string;
};

const ButtonGroup:React.FC<ButtonGroupProps> = ({postId}) => {

  return (
    <div className="mt-2 flex justify-end gap-2">
      <div className="tooltip" data-tip="edit">
        <label htmlFor={postId} className="btn">
          <IoPencilSharp />
        </label>
        <DraftPopUp postId={postId}/>
      </div>

      <div className="tooltip" data-tip="post now">
        <button className="btn">
          <HiPaperAirplane />
        </button>
      </div>
      <div className="tooltip" data-tip="queue">
        <button className="btn">
          <HiQueueList />
        </button>
      </div>
      <div className="tooltip" data-tip="delete">
        <button className="btn hover:bg-red-200">
          <TbTrashFilled />
        </button>
      </div>
    </div>
  );
};

type DraftPopUpProps = {
  postId: string;
};

const DraftPopUp: React.FC<DraftPopUpProps> = ({postId}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={postId} className="modal-toggle" />
      <label htmlFor={postId} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg flex justify-start font-bold">
            Edit Draft
            with id: {postId}
            
          </h3>
          <TweetEntry postId={postId}/>
        </label>
      </label>
    </div>
  );
};

export default DraftCard;
