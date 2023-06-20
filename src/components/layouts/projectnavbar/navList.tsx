import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";


const List = [
  {
    title: "Commits",
    url: "/commits",
  },
  {
    title: "drafts",
    url: "/drafts",
  },
  {
    title: "Context",
    url: "/context",
  },
  {
    title: "Settings",
    url: "/settings",
  }
]


export function NavList() {

  const router = useRouter()

    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {List.map((item) => (
             <Typography
             as="li"
             variant="small"
             color="blue-gray"
             className="p-1 font-medium"
           >
             <Link href={`project/${router.query.id}/${item.url}`} className="flex items-center hover:text-blue-500 transition-colors">
               {item.title}
             </Link>
           </Typography>
        ))}
      </ul>
    );
  }