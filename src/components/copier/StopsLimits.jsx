import React, { useState } from "react";
import { copierTableData } from "@/data";
import {  Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const StopsLimits = ({ id }) => {
  const [copyPending, setCopyPending] = useState("No");
  const [copyTakeProfit, setCopyTakeProfit] = useState("No");

  const [copyStopLoss, setCopyStopLoss] = useState("No");
  const data = copierTableData.filter((item) => item.id == id)[0];
  const handleCopyPendingChanges = (e) => {
    setCopyPending(e);
  };
  const handleCopyTakeProfitChanges = (e) => {
    setCopyTakeProfit(e);
  };


  const handleCopyStopLossChanges = (e) => {
    setCopyStopLoss(e);
  };
  console.log(copyPending,copyStopLoss,copyTakeProfit);
  return (
    <div>
      <div key={data?.id}>
        <div className="mt-1 flex items-center bg-gray-300 py-5 px-12 font-medium">
          <p className="text-2xl">Stops & Limits</p>
        </div>
        <div className="mt-1  flex flex-row items-center justify-around gap-12 bg-gray-200 py-5 px-4 font-medium">
          <p>Copy pending orders</p>
          <div>
            <Select
              className="w-96 bg-gray-300"
              value={copyPending}
              onChange={handleCopyPendingChanges}
              color="gray"
            >
              <Option value="No">No</Option>
              <Option value="Yes">Yes</Option>
            </Select>
          </div>
        </div>
     
        <div className="mt-1  flex flex-row items-center justify-around gap-12 bg-gray-200 py-5 px-4 font-medium">
          <p>Copy Stop Loss</p>
          <div>
            <Select
              className="w-96 bg-gray-300"
              value={copyStopLoss}
              onChange={handleCopyStopLossChanges}
              color="gray"
            >
              <Option value="No">No</Option>
              <Option value="Yes">Yes</Option>
            </Select>
          </div>
        </div>
        <div className="mt-1  flex flex-row items-center justify-around gap-12 bg-gray-200 py-5 px-4 font-medium">
          <p>Copy  Take Profit</p>
          <div>
            <Select
              className="w-96 bg-gray-300"
              value={copyTakeProfit}
              onChange={handleCopyTakeProfitChanges}
              color="gray"
            >
              <Option value="No">No</Option>
              <Option value="Yes">Yes</Option>
            </Select>
          </div>
        </div>


      
        <div className=" mt-1 flex justify-center bg-gray-200 py-4 px-24 font-medium">
          <Link  to="../../trade" className="text-medium rounded-md bg-blue-600 px-5 py-2 text-white duration-300 hover:opacity-80">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StopsLimits;
