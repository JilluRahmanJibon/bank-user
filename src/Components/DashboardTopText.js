import React, { useEffect, useState } from "react";

const DashboardTopText = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://server.bank.genzam.it/api/v1/notice`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  }, []);

  return (
    <div className="border-2 border-secondary w-96 mx-auto p-3">
      <div>
        <p className="font-bold mb-5">{data[0]?.header}</p>
        <p>
          {data[0]?.body}
        </p>
        <p className="mt-5">{data[0]?.footer}</p>
      </div>
    </div>
  );
};

export default DashboardTopText;
