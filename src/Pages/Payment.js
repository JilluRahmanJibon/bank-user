import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Payment = () => {
  const local = localStorage.getItem("user_info")
  const json = JSON.parse(local)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/approveByAdmin/${json?.username}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, []);
  return (
    <div>
      <div>
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
            <h1 className="font-medium">/ Payment</h1>
          </div>
          <Link to={"/new-request"}>
            <button className="bg-secondary flex items-center px-2 py-1 gap-2 rounded">
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
        </section>
      </div>
      <div className="mt-5">
        <div className="overflow-scroll">
          <table className="table-fixed w-full">
            <thead className="w-full">
              <tr>
                <th className="text-start border border-secondary p-1 font-medium w-40">
                  No
                </th>
                <th className="text-start border border-secondary p-1 font-medium w-40">
                  Date
                </th>
                <th className="text-start border border-secondary p-1 font-medium w-40">
                  TRX
                </th>
                <th className="text-start border border-secondary p-1 font-medium w-40">
                  Payment
                </th>
                <th className="text-start border border-secondary p-1 font-medium w-40">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="max-h-10">
              {data?.map((info, index) => {
                return (
                  <tr key={index}>
                    <td className="text-start border border-secondary p-1 font-normal">
                      {index + 1}
                    </td>
                    <td className="text-start border border-secondary p-1 font-normal">
                      {new Date(info.date).toLocaleString().split(',')[0]}
                    </td>
                    <td className="text-start border border-secondary p-1 font-normal">
                      {info.trx}
                    </td>
                    <td className="text-start border border-secondary p-1 font-normal">
                      {info.method}
                    </td>
                    <td className="text-start border border-secondary p-1 font-normal">
                      Approved
                    </td>
                  </tr>



                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
