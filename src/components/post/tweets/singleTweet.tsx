import { Avatar } from "@material-tailwind/react";
import React, { ChangeEvent, useRef } from "react";

type SingleTweetProps = {
  id: number;
  text: string;
  onChange: (id: number, text: string) => void;
  onRemove: (id: number) => void;
};

const SingleTweet: React.FC<SingleTweetProps> = ({
  id,
  text,
  onChange,
  onRemove,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [count, setCount] = React.useState(280);


  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setCount(280 - event.target.value.length);
    onChange(id, newText);
  };

  return (
    <div className=" border-l-2 h-full border-blue-gray-500 pl-3">
      {/* <Avatar src="/user.png" size="md" className="border-2 border-white" /> */}
      <textarea
        ref={textareaRef}
        className="block w-full min-h-[100px] resize-none  bg-transparent focus:outline-none"
        defaultValue={text}
        onChange={handleChange}
        placeholder="What's happening?"
      />
      {/* <button onClick={() => onRemove(id)}>Remove</button> */}
      <div className="flex items-center justify-end">
          <span
            className={`${
              count > 0 ? "text-accent" : "text-red-600"
            } mr-2 text-sm`}
          >
            {count}
          </span>
          <button
            onClick={() => onRemove(id)}
            className="rounded-full bg-red-500 w-6 h-6 grid place-content-center text-white"
          >
            -
          </button>
        </div>
    </div>
  );
};

export default SingleTweet;
