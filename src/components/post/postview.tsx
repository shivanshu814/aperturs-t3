import { createContext, useState } from "react";
import SocialTabs from "./tabs/socialtabs";
import Picker from "../custom/datepicker/picker";
import { Switch } from "@material-tailwind/react";
import { toast } from "react-hot-toast";

type Tweet = {
  id: number;
  text: string;
};

export const PostContext = createContext({
  linkedinPost: "",
  tweets: [
    {
      id: 1,
      text: " ",
    },
  ],
  setLinkedinPost: (content: string) => {},
  setTweets: (tweet: Tweet[]) => {},
  sync: false,
  setSync: (sync: boolean) => {},
  date: new Date(),
  setDate: (date: Date) => {},
  time: new Date().getTime(),
  setTime: (time: number) => {},
});

function PostView() {
  const [linkedinPost, setLinkedinPost] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>([
    { id: 0,text: " " },
    // { id: 0, content: "Hello World" },
    // { id: 1, content: "Hello React" },
  ]);
  const [sync, setSync] = useState(true);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().getTime());

  const handlePublish = () => {
    console.log("tweets", tweets);
    console.log("linkedinPost", linkedinPost);
    let tweetss = ""
    for(let i=0;i<tweets.length;i++){
      let tweetid = tweets[i]?.id
      let tweettext = tweets[i]?.text
      tweetss += `id: ${tweetid} text: ${tweettext} \n`
    }
    toast(`tweets: ${tweetss} \n linkedinPost: ${linkedinPost}`)
  }
  return (
    <PostContext.Provider
      value={{
        linkedinPost,
        tweets,
        setLinkedinPost,
        setTweets,
        sync,
        setSync,
        date,
        setDate,
        time,
        setTime,
      }}
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center">
        <Switch
          label="Auto Sync"
          color="blue"
          defaultChecked={sync}
          onChange={(e)=>setSync(e.target.checked)}
          />
        <div className="flex justify-end gap-1 my-4">
          <Picker />
          <SimpleButton text="Save" onClick={()=>{}} />
          <SimpleButton text="Schedule" onClick={()=>{}} />
          <SimpleButton text="Add to Queue" onClick={()=>{}} />
          <SimpleButton text="Publish Now" onClick={handlePublish} />
        </div>
        </div>
        <SocialTabs />
      </div>
    </PostContext.Provider>
  );
}

interface SimpleButtonProps{
  text:string,
  onClick:()=>void
}


const SimpleButton = ({text,onClick}:SimpleButtonProps) => {
  return (
    <button className="btn btn-primary text-white px-4" onClick={onClick}>{text}</button>
  )
}

export default PostView;
