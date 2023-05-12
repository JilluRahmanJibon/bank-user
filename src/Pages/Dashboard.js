import React from "react";
import { Link } from "react-router-dom";
import DashboardTopText from "../Components/DashboardTopText";
import Table from "../Shared/Table";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const data = localStorage.getItem("user_info")
  const json = JSON.parse(data)

  const [allData, setAllData] = useState('');
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/fourFilterForUser/${json?.username}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
    <main>
      <section>
        <div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
              />
            </svg>
            <p className="text-2xl font-semibold text-info">Dashboard</p>
          </div>
        </div>
        <div className="flex md:gap-5 gap-1 justify-center mt-10">
          <Link to={"new-request"}>
            <button className="bg-secondary flex items-center p-2 gap-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-info"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 20v-3H2v-2h3v-3h2v3h3v2H7v3H5Zm7-1v-6H9v-3H3V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19h-3Z"
                />
              </svg>
              <p>New Request</p>
            </button>
          </Link>
          <Link to={"all-transition"} state={allData}>
            <button className="bg-secondary flex items-center p-2 gap-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-info"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M6.5 5A4.5 4.5 0 0 0 2 9.5V11h28V9.5A4.5 4.5 0 0 0 25.5 5h-19ZM2 22.5V13h28v9.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5ZM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
                />
              </svg>
              <p>All transition</p>
            </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="flex justify-center mt-10">
          <DashboardTopText />
        </div>
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
            <h1 className="text-lg font-semibold text-info text-start mt-5 py-1">
              Today Transition
            </h1>
          </div>
          <Table data={allData[0]?.today} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
