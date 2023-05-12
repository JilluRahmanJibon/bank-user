import React from "react";
import Table from "../Shared/Table";
import { useLocation } from "react-router-dom";

const AllTransition = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <div className="flex items-center gap-2 my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m17.8 21.2l-2.8-3l1.2-1.2l1.6 1.6l3.6-3.6l1.2 1.4l-4.8 4.8M13 10h-3v7h2.1c.1-.8.5-1.6.9-2.3V10m3 0v2.3c.6-.2 1.3-.3 2-.3c.3 0 .7 0 1 .1V10h-3m-3.9 9H2v3h11.5c-.7-.8-1.2-1.9-1.4-3M21 6l-9.5-5L2 6v2h19V6M7 17v-7H4v7h3Z"
          />
        </svg>
        <h1 className="text-xl text-start font-semibold text-info">
          All your transition
        </h1>
      </div>
      {/* Weekly Transition */}
      <div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64Zm61 112H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3ZM224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z"
            />
          </svg>
          <p className="text-lg font-semibold text-info text-start mt-5 py-1">
            Weekly Transition
          </p>
        </div>
        <Table data={location.state[1]?.weekly}/>
      </div>
      {/* Monthly Transition */}
      <div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.25 11.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM21 8.5v9.25A3.25 3.25 0 0 1 17.75 21h-4v-1.573a1.75 1.75 0 0 0 1.663-2.985l-2.25-2a1.75 1.75 0 0 0-2.326 0l-2.25 2a1.75 1.75 0 0 0 1.663 2.985V21h-4A3.25 3.25 0 0 1 3 17.75V8.5h18ZM12 14a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5Zm5.75-11A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5Zm-2.94 15.248a.75.75 0 0 1-1.058.063l-1.002-.89v3.829a.75.75 0 0 1-1.5 0v-3.83l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1 .063 1.058Z"
            />
          </svg>
          <p className="text-lg font-semibold text-info text-start mt-5 py-1">
          Monthly Transition
          </p>
        </div>
        <Table data={location.state[2]?.monthly}/>
      </div>
      {/* Yearly Transition */}
      <div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5"
            width="24"
            height="24"
            viewBox="0 0 64 64"
          >
            <path
              fill="currentColor"
              d="M42.363 28.662h-14.76a65.056 65.056 0 0 1-.258 4.4h15.019v-4.4zm-14.76-8.478h14.761v4.402H27.603z"
            />
            <path
              fill="currentColor"
              d="M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10m-5 40.516c0 2.598-.625 3.824-2.318 4.547c-1.768.758-4.344.828-8.135.828c-.258-1.262-1.142-3.318-1.841-4.51c2.576.145 5.669.109 6.479.109c.883 0 1.179-.289 1.179-1.047v-5.23H26.607c-.956 4.039-2.797 7.973-6.221 10.787c-.662-.902-2.429-2.49-3.387-3.104c5.559-4.654 6.074-11.545 6.074-17.027V16H47v26.516"
            />
          </svg>
          <p className="text-lg font-semibold text-info text-start mt-5 py-1">
            Yearly Transition
          </p>
        </div>
        <Table data={location.state[3]?.yearly}/>
      </div>
    </div>
  );
};

export default AllTransition;
