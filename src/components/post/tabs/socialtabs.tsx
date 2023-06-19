import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import LinkedinPostCard from "../linkedin/LinkedinPostCard";
import TweetEntry from "~/components/dashboard/CreateContent/TweetEntry";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
 
export default function SocialTabs() {

  return (
    <Tabs value="twitter">
      <TabsHeader>
         <Tab  value="twitter">
            <div className="flex items-center gap-2">
                <AiOutlineTwitter />
              Twitter
            </div>
          </Tab>
          <Tab  value="linkedin">
            <div className="flex items-center gap-2">
                <FaLinkedinIn/>
             Linkedin
            </div>
          </Tab>
          
      </TabsHeader>
      <TabsBody>
          <TabPanel value="twitter">
          <TweetEntry postId={"1"}/>
          </TabPanel>
          <TabPanel value="linkedin">
            <LinkedinPostCard />
          </TabPanel>
      </TabsBody>
    </Tabs>
  );
}