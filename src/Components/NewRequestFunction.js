import React, { useState } from "react";
import Divider from "../Shared/Divider";
import bkash from "../Assets/bkash.png";
import nagad from "../Assets/nagad.png";
import Swal from "sweetalert2";
import ServerAPI from "../API/ServerAPI";

const NewRequestFunction = () => {
  const local = localStorage.getItem("user_info")
  const json = JSON.parse(local)
  const [amount, setAmount] = useState("");
  const [commission, setCommission] = useState("");
  const handleAmount = (e) => {
    const value = e.target.value;
    setAmount(value);

    let charge = value / 100;
    const commission = Math.round(charge);
    setCommission(commission);
  };
  const balance = parseInt(amount);
  const division = balance / 100;
  const newBalance = Math.round(division);
  // Handle submit data

  const handleSubmitNewRequest = (e) => {
    e.preventDefault();
    
    if (balance < 100) {
      Swal.fire({
        title: "Sorry!",
        text: "A minimum of 100 money should be withdrawn and a commission of 1 money should be paid for every 100 money.",
        icon: "info",
        confirmButtonText: "Try again",
        confirmButtonColor: "#374151",
        background: "#1f2937",
        color: "#fff",
      });
    } else {
      const method = e.target.method.value;
      const type = e.target.type.value;
      const customer = e.target.customer.value;
      const recipient = e.target.recipient.value;
      const amount = e.target.amount.value;
      const message = e.target.message.value;

      const info = {
        method,
        type,
        customer: json.username,
        recipient,
        amount,
        message,
        commission,
        date: Date.now(),
      };
      fetch(`${ServerAPI}/newRequest`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          e.target.reset();
          if(data.isSuccess){
            Swal.fire({
              title: "Successful",
              text: "WoW Successfully Submit your new request",
              icon: "success",
              confirmButtonText: "Thank you",
              confirmButtonColor: "#374151",
              background: "#1f2937",
              color: "#fff",
            });
          }
          else{
            Swal.fire({
              title: "Error!",
              text: "You have not enough balance!",
              icon: "error",
              confirmButtonText: "Try again",
              confirmButtonColor: "#374151",
              background: "#1f2937",
              color: "#fff",
            });
          }
        
        });
    }
  };
  return (
    <main className="mt-10 lg:w-2/3">
      <section className="bg-secondary/50 p-2 rounded">
        <div>
          <div className="flex items-center gap-1 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-info"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 16h2v-2h2v-2h-2v-2h-2v2h-2v2h2v2ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4Z"
              />
            </svg>
            <h1 className="font-medium">New Request</h1>
          </div>
          <Divider />
        </div>
        <form action="" onSubmit={handleSubmitNewRequest}>
          <div className="border border-white/20 mt-1 rounded">
            <div className="md:flex gap-10 items-center justify-center p-2">
              <div className="flex gap-1 items-center">
                <img className="w-16 -z-100" src={bkash} alt="" />
                <img className="w-16 -z-100" src={nagad} alt="" />
              </div>
              <div className="md:w-11/12 mx-auto">
                <label htmlFor="">
                  <p className="text-info/80 font-medium">
                    Payment method <span className="text-danger">*</span>
                  </p>
                  <select
                    className="w-full py-2 mt-1 bg-primary shadow-xl p-2 rounded"
                    required
                    name="method"
                    id="payment"
                  >
                    <option className="w-full" value="">
                      Select
                    </option>
                    <option className="w-full" value="bkash">
                      Bkash
                    </option>
                    <option className="w-full" value="nagad">
                      Nagad
                    </option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <label className="w-full" htmlFor="">
              <p className="text-info/80 font-medium">
                Service type <span className="text-danger">*</span>
              </p>
              <select
                className="w-full py-2 mt-1 bg-primary shadow-xl p-2 rounded"
                required
                name="type"
                id="payment"
              >
                <option className="w-full" value="">
                  Select
                </option>
                <option className="w-full" value="personal">
                  Personal
                </option>
                <option className="w-full" value="agent">
                  Agent
                </option>
              </select>
            </label>
            <label htmlFor="" className="w-full">
              <p className="text-info/80 font-medium">Customer</p>
              <input
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                type="text"
                readOnly
                value={json.username}
                id="customer"
              />
            </label>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <label htmlFor="" className="w-full">
              <p className="text-info/80 font-medium">
                Recipient <span className="text-danger">*</span>
              </p>
              <input
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                required
                type="text"
                name="recipient"
                id="recipient"
              />
            </label>
            <label htmlFor="" className="w-full">
              <div className="flex flex-wrap justify-between">
                <p className="text-info/80 font-medium">
                  Amount <span className="text-danger">*</span>
                </p>
                <p className="flex gap-1 font-medium">
                  <span className="hidden md:block"> Commission:</span>{" "}
                  {isNaN(balance) ? "00" : newBalance}
                </p>
              </div>
              <input
                className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
                onChange={handleAmount}
                required
                type="text"
                name="amount"
                id="amount"
              />
            </label>
          </div>
          <div className="mt-3">
            <textarea
              className="w-full py-[5px] mt-1 bg-primary shadow-xl p-2 rounded outline-none"
              name="message"
              id="message"
              cols="20"
              rows="3"
              placeholder="Please write your message!"
            ></textarea>
          </div>
          <input
            className="w-full bg-info rounded text-primary font-medium py-2 cursor-pointer mt-5 mb-2"
            type="submit"
            value="Submit"
          />
        </form>
      </section>
    </main>
  );
};

export default NewRequestFunction;
