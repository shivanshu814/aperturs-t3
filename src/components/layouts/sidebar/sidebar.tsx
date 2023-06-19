import React, { useEffect, useState } from "react";
import {Card,Typography,List,IconButton,} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import BottomMenu from "./bottomMenu";
import AccordianMenu from "./accordianMenu";
import UpgradeAlert from "./alert";
import { MdSpaceDashboard } from "react-icons/md";
import {ChevronRightIcon,Bars2Icon} from "@heroicons/react/24/outline";
import { BsFileCodeFill } from "react-icons/bs";



const AccordanceMenu = [
  {
    open: 1,
    text: "Dashboard",
    icon: <MdSpaceDashboard className="h-5 w-5" />,
    items: [
      {
        subText: "Create",
        subIcon: <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />,
        url: "/dashboard",
      },
      {
        subText: "Queue",
        url: "/queue",
      },
      {
        subText: "Drafts",
        url: "/drafts",
      },
    ],
  },

  {
    open: 2,
    text: "Projects",
    icon: <BsFileCodeFill className="h-5 w-5" />,
    items: [
      {
        subText: "Create",
        subIcon: <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />,
        url: "/create",
      },
    ],
  },
];


export default function SideBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Card className="lg:sticky lg:left-4 mt-2 lg:min-h-[calc(100vh-2rem)] lg:max-w-[18rem] w-full bg-neutral p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/logo.svg" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Aperturs
        </Typography>
        <IconButton
        size="sm"
        color="blue-gray"
        variant="text"
        onClick={toggleIsNavOpen}
        className="ml-auto mr-2 lg:hidden"
      >
        <Bars2Icon className="h-6 w-6" />
      </IconButton>
      </div>
      <div className="hidden lg:block">
      <List>
              <AccordianMenu list={AccordanceMenu}/>
              <hr className="my-2 border-blue-gray-50" />
              <BottomMenu />
      </List>
      </div>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-scroll"
          >
            <List>
              <AccordianMenu list={AccordanceMenu}/>
              <hr className="my-2 border-blue-gray-50" />
              <BottomMenu />
            </List>
          </motion.div>
        )}
      </AnimatePresence>
      <UpgradeAlert />
    </Card>
  );
}
