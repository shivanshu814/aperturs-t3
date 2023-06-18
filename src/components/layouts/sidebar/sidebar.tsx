import React from "react";
import { Card, Typography, List, Alert } from "@material-tailwind/react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import BottomMenu from "./bottomMenu";
import AccordianMenu from "./accordianMenu";

export default function SideBar() {
  
  const [openAlert, setOpenAlert] = React.useState(true);

  return (
    <Card className="sticky left-4 top-4 h-[calc(100vh-2rem)] max-w-[18rem]  bg-neutral p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/logo.svg" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Aperturs
        </Typography>
      </div>
      <List>
        <AccordianMenu />
        <hr className="my-2 border-blue-gray-50" />
        <BottomMenu />
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Material Tailwind PRO and get even more components,
          plugins, advanced features and premium.
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
