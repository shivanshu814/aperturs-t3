import React from "react";
import {BsFillCalendarFill} from 'react-icons/bs'
import {IoPencilSharp} from 'react-icons/io5'
import {CreateButton} from '~/components'
import DraftCard from "./draft_card";



const DraftPage = () => {
  return (
    <div className="w-full m-12">
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Draft</h2>
        <div className="flex gap-2">
        <CreateButton text="New Draft"/>
            <button className="btn btn-primary gap-2 text-white px-4 py-2">
                Schedule All
                <BsFillCalendarFill className="ml-2"/>
            </button>
        </div>
        </div>
        <div className="flex gap-8 mt-4">
        <DraftCard postId='1'/>
        <DraftCard postId='2'/>
        <DraftCard postId='3'/>
        <DraftCard postId='4'/>
        </div>
        
        
      </div>
    </div>
  );
};

export default DraftPage;
