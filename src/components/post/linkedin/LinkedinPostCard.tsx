'use client'

import { Avatar } from '@material-tailwind/react'
import React, { useState } from 'react'
import LinkedInPostCreation from './textarea'
import Picker from '~/components/custom/datepicker/picker';


function LinkedinPostCard() {
  const [content, setContent] = useState('');
    const handlePostSubmit = (content: string) => {
        console.log("Post content:", content);
        alert("Post content: " + content);
      };
      const handleDate = (date: Date, time: Date) => {
        console.log('Selected Date:', date);
        console.log('Selected Time:', time);
      };

  return (
      <div className="bg-white rounded-lg w-full shadow-md p-4">
        <div className="flex gap-3">
          <Avatar
            src={"/user.png"||"https://i.pinimg.com/originals/90/a7/f6/90a7f67864acea71fb5ffed6aa6298cb.jpg"}
            size="lg"
            color="blue"
            className="mb-4"

          />
            <div>
              <div className="text-lg font-bold">John Doe</div>
              <div className="text-sm text-gray-500">@John</div>
            </div>
        </div>
        <LinkedInPostCreation 
        content={content}
        onContentChange={setContent}
        />
        <div>
        <Picker />
        <button className='btn btn-primary px-8 text-white'
        onClick={() => handlePostSubmit(content)}
        >
          Post
        </button>
        </div>

      </div>
  )
}

export default LinkedinPostCard
