import { Accordion, AccordionBody, AccordionHeader, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
import React from 'react'

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

const AccordanceMenu = [
  {
    open:1,
    text:"Posts",
    icon:<PresentationChartBarIcon className="h-5 w-5" />,
    items:[
      {
        text:"Create",
        icon:<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />,
        url:"/create"
      },
      {
        text:"Queue",
        icon:<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />,
        url:"/queue"
      },
      {
        text:"Drafts",
        icon:<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />,
        url:"/drafts"
      }
    ]
  },
  {
    open:2,
    text:"Projects",
    icon:<CubeTransparentIcon className="h-5 w-5" />,
    items:[
      {
        text:"Create",
        icon:<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />,
        url:"/create"
      }
    ]
  }
]

export default function AccordianMenu() {

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value:number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
       {
          AccordanceMenu.map((item, index) => (
            <Accordion open={open === item.open} icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === item.open ? "rotate-180" : ""}`}/>
            } >
            <ListItem className="p-0" selected={open === item.open}>
            <AccordionHeader onClick={() => handleOpen(item.open)} className="border-b-0 p-3">
              <ListItemPrefix>
                {item.icon}
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                {item.text}
              </Typography>
            </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                {
                  item.items.map((item, index) => (
                    <ListItem>
                      <ListItemPrefix>
                        {item.icon}
                      </ListItemPrefix>
                      {item.text}
                    </ListItem>
                  ))
                  }
              </List>
            </AccordionBody>
            </Accordion>
          ))
          }
    </div>
  )
}
