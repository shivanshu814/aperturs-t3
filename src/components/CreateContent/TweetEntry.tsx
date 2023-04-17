import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { TweetsQueue } from "./content";
import {BsArrowBarDown} from 'react-icons/bs'


type Tweet = {
  id: number;
  content?: string;
};

type Content = {
  id: number;
  content?: string;
};

const TweetEntry = () => {
  const [tweets, setTweets] = useState<Tweet[]>([{ id: 0 }]);
  const [jwt, setJWT] = useState("");
  useEffect(() => {
    setJWT(localStorage.getItem("JWT") ?? "");
  });
  const [content, setContent] = useState<Content[]>([]);
  const [schudule, setSchudule] = useState<string>(new Date().toISOString());
  

  const handleAddTweet = () => {
    setTweets([...tweets, { id: tweets.length }]);
  };

  const handleRemoveTweet = (index: number) => {
    const newTweets = tweets.filter((tweet, i) => i !== index);
    setTweets(newTweets);
    setContent((prevContent) => prevContent.filter((_, i) => i !== index));
  };

  const handleTweet = async () => {
    const newContent = tweets.map((tweet, index) => {
      const textArea = textAreaRefs.current[index];
      const text = textArea?.value;
      return { id: tweet.id, content: text };
    });
    setContent(newContent);
  
  };

  const textAreaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  return (
    <div className="w-full flex">
      <div className="w-full">
        {tweets.map((tweet, index) => (
          <div key={tweet.id} className="mb-4">
            <SingleTweet
              index={index}
              onRemove={() => handleRemoveTweet(index)}
              ref={(element) => textAreaRefs.current.splice(index, 1, element)}
            />
          </div>
        ))}
        <div className="flex items-center justify-start">
          <button
            onClick={handleAddTweet}
            className="bg-accent rounded-full px-4 py-2 text-white"
          >
            +
          </button>
        </div>
        <div className="flex justify-end">
          <div>
            <input
            className="bg-transparent focus:outline-none mr-1"
              value={schudule}
              onChange={(event) => setSchudule(event.target.value)}
              type="datetime-local"
            />
            <button
              className="btn btn-primary mt-2 rounded-lg px-4 py-2 text-white"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}

              onClick={handleTweet} >
              Schedule
            </button>
            <div className="dropdown  dropdown-top dropdown-end dropdown-hover">
              <label tabIndex={0} className="btn btn-primary py-1 mt-2 px-4 text-white"
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              >
                ↑
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
              <li><a>Post Now</a></li>
              <li><a>Draft</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
          {content.map((c) => (
            <div key={c.id}>{c.content}</div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

type SingleTweetProps = {
  index: number;
  onRemove: () => void;
};

const SingleTweet = React.forwardRef<HTMLTextAreaElement, SingleTweetProps>(
  ({ index, onRemove }: SingleTweetProps, ref) => {
    const [count, setCount] = React.useState(280);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const element = event.target as HTMLTextAreaElement;
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
      setCount(280 - element.value.length);
    };

    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className="block w-full bg-transparent  resize-none focus:outline-none"
          // maxLength={280}
          placeholder="What's happening?"
          onChange={handleChange}
          style={{ overflow: "hidden" }}
        />
        <div className="flex items-center justify-end">
          <span
            className={`${
              count > 0 ? "text-accent" : "text-red-600"
            } mr-2 text-sm`}
          >
            {count}
          </span>
          <button
            onClick={onRemove}
            className="bg-red-500 rounded-full px-3 py-1 text-white"
          >
            -
          </button>
        </div>
      </div>
    );
  }
);

export default TweetEntry;
