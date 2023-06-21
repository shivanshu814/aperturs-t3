import QueueCard from "./queueCard";
import { Alert } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface IPost {
  time: string;
  type: string;
}

interface IDay {
  date: string;
  day: string;
  posts: {
    time: string;
    type: string;
  }[];
}
const queue = [
  {
    day: 'Monday',
    posts: [
      {
        time: '10:15',
        type: 'instagram',
      },
      {
        time: '12:16',
        type: 'twitter recurring',
      },
    ],
  },
  {
    day: 'Tuesday',
    posts: [
      {
        time: '10:15',
        type: 'instagram',
      }
    ]
  },
  {
    day: 'Wednesday',
    posts: [
      {
        time: '18:15',
        type: 'instagram',
      },
    ]
  }
  // Add more days...
];


const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function filterTodayPosts(posts: IPost[], currentTime: string): IPost[] {
  return posts.filter((post) => post.time >= currentTime);
}

export const QueueNav = () => {
  const [filteredQueue, setFilteredQueue] = useState<IDay[]>([]);


  useEffect(() => {
    const currentDate = new Date();
    const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
    const startDay = currentDate.getDay();
  
    const newFilteredQueue: IDay[] = queue
      .map((queueDay) => {
        const dayIndex = Object.values(dayMap).indexOf(queueDay.day);
        if (dayIndex === -1) {
          return null;
        }
  
        const day = new Date(currentDate);
        day.setDate(day.getDate() + dayIndex - startDay);
  
        if (dayIndex === startDay) {
          return {
            ...queueDay,
            date: day.toLocaleDateString(),
            day: "Today",
          };
        } else if (dayIndex === (startDay + 1) % 7) {
          return {
            ...queueDay,
            date: day.toLocaleDateString(),
            day: "Tomorrow",
          };
        } else {
          return {
            ...queueDay,
            date: day.toLocaleDateString(),
          };
        }
      })
      .filter((day) => day !== null) as IDay[];
  
    setFilteredQueue(newFilteredQueue);
  }, [queue]);
  
  
  

  return (
    <>
      {/* ... existing JSX */}
      <div className="queue">
        {filteredQueue.map((dayInfo) => (
          <div key={dayInfo.date} className="day">
            <h3>{dayInfo.day}</h3>
            {dayInfo.posts.map((post, index) => (
              <QueueCard key={index} time={post.time} type={post.type} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};





