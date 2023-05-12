import React from "react";
import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Sidebar = () => {
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(true);
  const textRef = useRef(null);
  const [data, setData] = useState([]);
  const local = localStorage.getItem("user_info")
  const json = JSON.parse(local)
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/user`)
      .then((res) => res.json())
      .then((data) => {
        data.data.data.forEach((info) => {
          if (info.username === json.username) {
            setData(info)
          }
        })
      });
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (textRef.current && !textRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [textRef]);

  const toggleTextId = () => {
    setIsHidden(!isHidden);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    Swal.fire({
      title: "Succes!",
      text: "copied id it successfully!",
      icon: "success",
      confirmButtonText: "close",
      confirmButtonColor: "#374151",
      background: "#1f2937",
      color: "#fff",
    });
  }
  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
    window.location.reload()
  }

  return (
    <div className="py-5 bg-secondary/40 backdrop-blur-xl pb-[20rem]">
      <div className="mt-5">
        <section className="border-2 border-secondary p-5">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
              />
            </svg>
            <h1 className="uppercase font-medium text-md">{data?.username}</h1>
          </div>
          <div className="flex items-center mt-5">
            Balance: {data?.balance ? data.balance : 0}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.09 10.5V9h-8.5V4.5A1.5 1.5 0 0 0 8.09 3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 8.09 6v3h-3v1.5h3v6.2c0 2.36 1.91 4.27 4.25 4.3c2.34-.04 4.2-1.96 4.16-4.3c0-1.59-.75-3.09-2-4.08a4.08 4.08 0 0 0-.7-.47c-.22-.1-.46-.15-.7-.15c-.71 0-1.36.39-1.71 1c-.19.3-.29.65-.29 1c.01 1.1.9 2 2.01 2c.62 0 1.2-.31 1.58-.8c.21.47.31.98.31 1.5c.04 1.5-1.14 2.75-2.66 2.8c-1.53 0-2.76-1.27-2.75-2.8v-6.2h8.5Z"
              />
            </svg>
          </div>
          <div className="flex items-center mt-1">
            ID
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 8a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m9 3c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9-5a3 3 0 0 0-3 3c0 1.31.83 2.42 2 2.83V18h2v-2h2v-2h-2v-2.17c1.17-.41 2-1.52 2-2.83a3 3 0 0 0-3-3Z"
              />
            </svg>
            <div className="h-5 w-10 -mt-2">
              <button onClick={toggleTextId} className="ml-3">
                {isHidden ? (
                  <p onClick={() => copyToClipboard(data?._id)} className="text-xl">****</p>
                ) : (
                  <p onClick={() => copyToClipboard(data?._id)} className="mt-[2px]">{data?._id}</p>
                )}
              </button>

              {!isHidden && (
                <div ref={textRef} className="mt-4 text-gray-800"></div>
              )}
            </div>
          </div>
        </section>
      </div>
      <ul className="flex flex-wrap font-bold text-start">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive
              ? "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full mt-5"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full mt-5"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Dashboard</p>
          </div>
        </NavLink>

        <NavLink
          to={`new-request`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.175 20H16q-.425 0-.713-.288T15 19q0-.425.288-.713T16 18h3.175l-.9-.9Q18 16.825 18 16.412t.3-.712q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T18.3 22.3q-.275-.275-.275-.7t.275-.7l.875-.9ZM11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm-6 8q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v8.35q-.475-.175-.988-.263T18.976 13q-2.5 0-4.237 1.75T13 19q0 .525.088 1.025t.262.975H5Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">New Request</p>
          </div>
        </NavLink>
        <NavLink
          to={`pending-order`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 13.5q.625 0 1.063-.438T8.5 12q0-.625-.438-1.063T7 10.5q-.625 0-1.063.438T5.5 12q0 .625.438 1.063T7 13.5Zm5 0q.625 0 1.063-.438T13.5 12q0-.625-.438-1.063T12 10.5q-.625 0-1.063.438T10.5 12q0 .625.438 1.063T12 13.5Zm5 0q.625 0 1.063-.438T18.5 12q0-.625-.438-1.063T17 10.5q-.625 0-1.063.438T15.5 12q0 .625.438 1.063T17 13.5ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Pending Orders</p>
          </div>
        </NavLink>
        <NavLink
          to={`order-history`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 10V4h2v2.35q1.275-1.6 3.113-2.475T12 3q3.75 0 6.375 2.625T21 12h-2q0-2.925-2.038-4.963T12 5q-1.725 0-3.225.8T6.25 8H9v2H3Zm.05 3H5.1q.3 2.325 1.913 3.938t3.862 1.962l1.2 2.1q-3.45 0-6.05-2.287T3.05 13Zm10.3 1.75L11 12.4V7h2v4.6l1.4 1.4l-1.05 1.75ZM17.975 24l-.3-1.5q-.3-.125-.563-.263t-.537-.337l-1.45.45l-1-1.7l1.15-1q-.05-.325-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.537-.337t.563-.263l.3-1.5h2l.3 1.5q.3.125.575.288t.525.362l1.45-.5l1 1.75l-1.15 1q.05.325.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5h-2Zm1-3q.825 0 1.413-.588T20.975 19q0-.825-.588-1.413T18.976 17q-.825 0-1.413.588T16.976 19q0 .825.588 1.413t1.412.587Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Order History</p>
          </div>
        </NavLink>
        <NavLink
          to={`payment`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm0 6h16v6H4z"
                opacity=".3"
              />
              <path
                fill="currentColor"
                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Payments</p>
          </div>
        </NavLink>
        <NavLink
          to={`deposit`}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-dark font-normal text-black py-3 hover:text-dark px-3 hover:bg-white w-full"
              : "font-normal text-white py-3 hover:text-dark px-3 hover:bg-white w-full"
          }
        >
          <div className="flex gap-2">
            <svg
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7H4Z"
              />
            </svg>
            <p className="drop-shadow-2xl w-40 text-start">Deposit</p>
          </div>
        </NavLink>
        <div onClick={handleLogout} className="flex drop-shadow-2xl px-5 w-80 mx-auto bg-danger py-3 mt-5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.325 16.275q-.275-.325-.275-.737t.275-.688l1.85-1.85H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175l-1.85-1.85q-.3-.3-.3-.713t.3-.712q.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-3.6 3.6q-.325.325-.713.288t-.662-.313ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Z" /></svg>
          <p>Logout</p>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;