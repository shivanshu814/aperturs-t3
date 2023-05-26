import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { TweetsQueue } from "./content";
import { BsArrowBarDown } from "react-icons/bs";
import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";

type Tweet = {
  id: number;
  content?: string;
};

type Content = {
  id: number;
  content?: string;
};

type TweetEntryProps = {
  postId: string;
};

const TweetEntry: React.FC<TweetEntryProps> = ({ postId }) => {
  const [tweets, setTweets] = useState<Tweet[]>([
    { id: 0 },
    // { id: 0, content: "Hello World" },
    // { id: 1, content: "Hello React" },
  ]);

  const [jwt, setJWT] = useState("");
  useEffect(() => {
    setJWT(localStorage.getItem("JWT") ?? "");
  });
  const { user } = useUser();
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
  const { mutateAsync: makeTweet } = api.tweet.makeTweet.useMutation();
  const { mutateAsync: makeSchedule } = api.tweet.scheduleTweets.useMutation();
  const onSchedule = async () => {
     await handleTweet();
    console.log("schedule", schudule);
    const tws = content.map((value) => {
      if (value.content === undefined) return;
      return { text: value.content, scheduled_at: schudule };
    });
    // if (tws) {
    //   console.log("no tweets");
    //   await makeSchedule({
    //     tweets: tws,
    //   });
    // }
  };
  const  handleTweet = async () => {
    const newContent = tweets.map((tweet, index) => {
      const textArea = textAreaRefs.current[index];
      const text = textArea?.value;
      return { id: tweet.id, content: text };
    });
    setContent(newContent);
  };

  const textAreaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  return (
    <div className="flex w-full">
      <div className="w-full">
        {tweets.map((tweet, index) => (
          <div key={tweet.id} className="mb-4">
            <SingleTweet
              index={index}
              onRemove={() => handleRemoveTweet(index)}
              value={tweets[index]?.content || ""}
              ref={(element) => textAreaRefs.current.splice(index, 1, element)}
            />
          </div>
        ))}
        <div className="flex items-center justify-start">
          <button
            onClick={handleAddTweet}
            className="rounded-full bg-accent px-4 py-2 text-white"
          >
            +
          </button>
        </div>
        <div className="flex justify-end">
          <div>
            <input
              className="mr-1 bg-transparent focus:outline-none"
              value={schudule}
              onChange={(event) => setSchudule(event.target.value)}
              type="datetime-local"
            />
            <button
              className="btn-primary btn mt-2 rounded-lg px-4 py-2 text-white"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              onClick={onSchedule}
            >
              Schedule
            </button>
            <div className="dropdown-top  dropdown-end dropdown-hover dropdown">
              <label
                tabIndex={0}
                className="btn-primary btn mt-2 border-0 border-l-2 border-secondary px-2 py-1 text-white"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                ↑
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-44 bg-base-100 p-2 shadow"
              >
                <li
                  onClick={async () => {
                     handleTweet();
                    console.log({ content });
                    console.log("HII");
                    content.forEach(async (c) => {
                      if (c.content) {
                        await makeTweet({
                          text: c.content,
                        });
                      }
                    });
                  }}
                >
                  <a>Post Now</a>
                </li>
                <li>
                  <a>Draft</a>
                </li>
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
  value: string;
};

const SingleTweet = React.forwardRef<HTMLTextAreaElement, SingleTweetProps>(
  ({ index, onRemove, value }: SingleTweetProps, ref) => {
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
          className="block w-full resize-none  bg-transparent focus:outline-none"
          // maxLength={280}
          placeholder="What's happening?"
          defaultValue={value}
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
            className="rounded-full bg-red-500 px-3 py-1 text-white"
          >
            -
          </button>
        </div>
      </div>
    );
  }
);

export default TweetEntry;
