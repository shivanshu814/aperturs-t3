import React from "react";
import {BsFillCalendarFill} from 'react-icons/bs'
import {IoPencilSharp} from 'react-icons/io5'
import {CreateButton} from '~/components'
import DraftCard from "./draft_card";
import PostCard from "./darfCard";



const DraftPage = () => {
  return (
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
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6
        mt-4
        '>
        <PostCard  id={1}/>
        <PostCard  id={2}/>
        <PostCard  id={3}/>
        
        </div>
        
        
      </div>
  );
};

export default DraftPage;
