import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  Alert,
  IconButton,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import { CubeTransparentIcon, Bars2Icon } from "@heroicons/react/24/outline";
import BottomMenu from "./bottomMenu";
import AccordianMenu from "./accordianMenu";

export default function SideBar() {
  const [openAlert, setOpenAlert] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Card className="lg:sticky lg:left-4 mt-2 lg:h-[calc(100vh-2rem)] lg:max-w-[18rem] w-full bg-neutral p-4 shadow-xl shadow-blue-gray-900/5">
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
              <AccordianMenu />
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
              <AccordianMenu />
              <hr className="my-2 border-blue-gray-50" />
              <BottomMenu />
            </List>
          </motion.div>
        )}
      </AnimatePresence>
      <Alert
        open={openAlert}
        className="mt-auto hidden lg:block"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Aperturs PRO and get even more advanced features and
          premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}
