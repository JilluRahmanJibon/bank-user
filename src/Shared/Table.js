import React from "react";

const Table = ({data}) => {
  return (
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
              Service
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Customer
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Recipient
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Amount
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Commission
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
              Status
            </th>
            <th className="text-start border border-secondary p-1 font-medium w-40">
            Pending/Approve
          </th> 
          </tr>
        </thead>
        <tbody className="max-h-10">
         {
          data?.map((info,index)=>{
            return  <tr key={index}>
            <td className="text-start border border-secondary p-1 font-normal">
            {index+1}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
             {new Date(info.date).toLocaleString().split(',')[0]}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
            {info.trx ? info.trx : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
           {info.method ? info.method : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
            {info.type ? info.type : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
             { info.customer ? info.customer : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
             { info.recipient ? info.recipient : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
             { info.amount ? info.amount : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
             { info.commission ? info.commission : 'No data found!'}
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              {
                info.commission ? "Withdraw" : 'Deposit'
              }
            </td>
            <td className="text-start border border-secondary p-1 font-normal">
              {
                info.approve ? 'Approved' : 'Pending'
              }
            </td>
          </tr>
          })
         }
        </tbody>
      </table>
    </div>
  );
};

export default Table;