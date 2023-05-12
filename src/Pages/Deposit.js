import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../Shared/Divider";
import { singleImageUpload } from "../Hooks/imageUploadHook";
import ServerAPI from "../API/ServerAPI";
import Swal from "sweetalert2";

const Deposit = () => {
  const [singleImg, setSingleImg] = useState([]);
  const [data, setData] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const local = localStorage.getItem("user_info")
  const json = JSON.parse(local)
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/depositRecent/${json?.username}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [reFetch]);

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setSingleImg);
  };
  const handleForm = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const image = singleImg;

    const info = {
      name: json?.username,
      subject,
      message,
      image,
      to: "Admin",
    };
    fetch(`${ServerAPI}/deposit`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Success!",
            text: "Deposit success!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
          e.target.reset();
          setReFetch(!reFetch);
        }
      })
      .catch((err) => {
        if (err.message) {
          console.log(err.message);
          Swal.fire({
            title: "Error!",
            text: "Something wrong!",
            icon: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
      });
  };
  return (
    <main>
      <div className="bg-secondary/50 border border-info/80 p-3">
        <div className="flex items-center gap-1 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-info/80"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13 3v1.27a.75.75 0 0 0 1.5 0V3h2.25A2.25 2.25 0 0 1 19 5.25v2.628a.75.75 0 0 1-.5.707a1.5 1.5 0 0 0 0 2.83c.3.106.5.39.5.707v2.628A2.25 2.25 0 0 1 16.75 17H14.5v-1.27a.75.75 0 0 0-1.5 0V17H3.25A2.25 2.25 0 0 1 1 14.75v-2.628c0-.318.2-.601.5-.707a1.5 1.5 0 0 0 0-2.83a.75.75 0 0 1-.5-.707V5.25A2.25 2.25 0 0 1 3.25 3H13Zm1.5 4.396a.75.75 0 0 0-1.5 0v1.042a.75.75 0 0 0 1.5 0V7.396Zm0 4.167a.75.75 0 0 0-1.5 0v1.041a.75.75 0 0 0 1.5 0v-1.041ZM6 10.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm0 2.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-lg font-medium">Open Ticket</h1>
        </div>
        <Divider />
        <form action="" onSubmit={handleForm}>
          <section className="flex gap-5 mt-5">
            <div className="w-full">
              <label htmlFor="">
                <p className="text-info/80 font-medium">
                  Name <span className="text-danger">*</span>
                </p>
                <input
                  className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                  type="text"
                  value={json?.username}
                  id="customer"
                  readOnly
                />
              </label>
            </div>
            <div className="w-full">
              <label htmlFor="">
                <p className="text-info/80 font-medium">
                  Subject <span className="text-danger">*</span>
                </p>
                <input
                  className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                  type="text"
                  name="subject"
                  id="customer"
                  required
                />
              </label>
            </div>
          </section>
          <section>
            <div className="mt-3">
              <textarea
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                name="message"
                id="message"
                cols="20"
                rows="3"
                placeholder="Please write your message!"
                required
              ></textarea>
            </div>
            <div>
              <input
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                accept="image/png,image/jpg,image/svg,image/file"
                type="file"
                name="image"
                id="image"
                onChange={handleChangeUploadImage}
              />
            </div>
            <input
              className="w-full bg-info rounded text-primary  font-medium py-2 cursor-pointer mt-5 mb-2"
              type="submit"
              value="Submit"
            />
          </section>
        </form>
      </div>
      {/* Ticket Replies */}
      <div className="mt-5 border-info/80 border p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-info"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.31 0-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.24-1.85-4.09-4.16-3.99l1.57 1.57L12 11.5l-4-4l4-4l1.41 1.41l-1.6 1.6C15.28 6.4 18 9.18 18 12.5c0 3.31-2.69 6-6 6z"
              />
            </svg>
            <h1 className="font-medium">Ticket Replies</h1>
          </div>
          <Link to={"all-deposit-replay"}>
            <button className="bg-info rounded text-primary px-2 py-1 mb-1">
              All replay
            </button>
          </Link>
        </div>
        <Divider />
        <div>
          {
            data?._id ? <div className="border p-3 my-2">
              <div className="flex items-center gap-1 mt-3">
                <p>
                  {new Date(data.milliseconds).toLocaleString().split(",")[0]}
                </p>{" "}
                |
                <p>
                  {new Date(data.milliseconds).toLocaleString().split(",")[1]}
                </p>
              </div>
              <p className="font-medium text-white/80 text-lg">
                {data.name}{" "}
                <span className="text-sm">
                  ( {data[0]?.name === "Admin" ? "Admin" : "Stuff"} )
                </span>
              </p>
              <p className="mt-3">{data.message}</p>
            </div> : undefined
          }
        </div>
      </div>
    </main>
  );
};

export default Deposit;
