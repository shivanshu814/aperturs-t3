import React from "react";

export const Schedule = (props: any) => {
  return (
    <div className="mt-3 flex flex-col rounded-sm px-2 py-2 text-white md:bg-black">
      <div className="flex justify-between">
        <div className="my-2 cursor-pointer">9:45AM</div>
        <span className="my-2 opacity-0 hover:opacity-100">
          {props.hoverData}
        </span>
        <div className="flex justify-end gap-3">
          <button className="border px-1 py-1">
            <svg
              data-v-621fa9ea=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                data-v-621fa9ea=""
                d="M13.48,17.84H8.9a2.3,2.3,0,0,1-2.3-2.3v-5l.69.69a1,1,0,0,0,.71.29,1,1,0,0,0,.71-1.7l-2.4-2.4a1,1,0,0,0-1.1-.21l-.08,0a1,1,0,0,0-.24.16l-2.4,2.4a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l.69-.69v5a4.31,4.31,0,0,0,4.3,4.3h4.58a1,1,0,0,0,0-2Z"
              ></path>
              <path
                data-v-621fa9ea=""
                d="M21.51,12.74a1,1,0,0,0-1.42,0l-.69.69v-5a4.31,4.31,0,0,0-4.3-4.3H10.52a1,1,0,0,0,0,2H15.1a2.3,2.3,0,0,1,2.3,2.3v5l-.69-.69a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2.4,2.4a1,1,0,0,0,.71.29.88.88,0,0,0,.39-.08l.08-.05a.91.91,0,0,0,.24-.16l2.4-2.4A1,1,0,0,0,21.51,12.74Z"
              ></path>
            </svg>
          </button>
          <button className="border px-1 py-1">
            <svg
              data-v-621fa9ea=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                data-v-621fa9ea=""
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
