import { Typography } from "@material-tailwind/react";



export function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Pages
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Account
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Blocks
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Docs
          </a>
        </Typography>
      </ul>
    );
  }