import { FaCalendar, FaFontAwesome, FaMagic } from "react-icons/fa";
import { Schedule } from "./queueSchedule";


const message = [
  {
    data: "Twitter's API is currently experiencing issues.Because of this, we've paused the sending of Auto-DMs until further notice. We’re in touch with Twitter to address this as soon as possible. Thank you for your patience.",
  },
  {
    data: "You are currently on the free plan. You can schedule tweets and threads up to 2 days ahead.Grab a Aperturs subscription to unlock unlimited scheduling, autoplugs, recurrent promotional posts and much more.",
  },
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const QueueNav = () => {
  return (
    <>
      {/* Top Section of Queue */}
      <div className="flex w-full justify-between">
        <h2 className="text-2xl font-bold">Queue</h2>
        <ul className="flex w-full justify-end gap-5">
          <li className="flex gap-1 rounded-lg border border-primary px-2 py-2">
            Ai
            <FaMagic className="mt-1" size={15} />
          </li>
          <li className="rounded-lg border border-primary px-2 pt-3">
            <FaCalendar />
          </li>
          <li className="rounded-lg border border-primary px-2 py-2">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                fill-rule="nonzero"
              >
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </g>
            </svg>
          </li>
        </ul>
      </div>

      {/* Warning Message */}
      {message.map((element) => (
        <div className="alert alert-warning my-3 rounded-lg bg-orange-200">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24 "
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M12,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23ZM12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M12,17a1,1,0,1,1,0-2h0a1,1,0,0,1,0,2Z"
            ></path>
          </svg>
          {/* mt-8 flex w-full flex-col rounded-sm p-6 */}
          <div className="mt-8 flex w-full flex-col p-1">{element.data}</div>
        </div>
      ))}

      {/* Date and Time */}
      <div className="mt-6 flex w-full justify-between">
        <h3 className="text-lg font-bold">Today</h3>
        Time zone: {getTime()}
      </div>
      <Schedule hoverData="Schedule For Twitter" />
      <div className="mt-3">
        <h3 className="text-lg font-bold">
          Tomorrow {month[new Date().getMonth()]}{" "}
          {new Date().getDate() < 10 ? "0" : "" + `${new Date().getDate() + 1}`}
        </h3>
      </div>
      <Schedule hoverData="Schedule For Twitter" />
    </>
  );

  function getTime() {
    let currentDate = new Date();
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let currentHour =
      (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
    let currentMin =
      (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    let ampm = currentDate.getHours() >= 12 ? "PM" : "AM";

    let currentTime = `${timeZone} (${currentHour}:${currentMin} ${ampm})`;
    return currentTime;
  }
};
