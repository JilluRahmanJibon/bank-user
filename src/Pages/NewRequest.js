import React from "react";
import { Link } from "react-router-dom";
import NewRequestFunction from "../Components/NewRequestFunction";

const NewRequest = () => {

  return (
    <main>
      <section className="flex justify-between flex-wrap gap-3">
        <div className=" flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z"
            />
          </svg>
          <h1 className="font-medium text-info">Home </h1>
          <h1 className="font-medium">/ New Request</h1>
        </div>
        <Link to={"/order-history"}>
          <div className="flex gap-1 items-center bg-secondary text-info px-2 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 21v-8h8v8h-8Zm0-10V3h8v8h-8ZM3 11V3h8v8H3Zm0 10v-8h8v8H3Z"
              />
            </svg>
            <h1 className="font-medium">Order history</h1>
          </div>
        </Link>
      </section>

      <section>
        <NewRequestFunction></NewRequestFunction>
      </section>
    </main>
  );
};

export default NewRequest;
