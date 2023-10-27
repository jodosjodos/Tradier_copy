import React, { useState } from "react";
import { copierTableData } from "@/data";
import { Input, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CopierSettings = ({ id }) => {
  const [reverseTrade, setReverseTrade] = useState("No");
  const [riskType, setRiskyType] = useState("Fixed Lot");
  const [fixedLot, setFixedLot] = useState(0.11);
  const [maxLot, setMaxLot] = useState(50);
  const [slippage, setSlippage] = useState(20);
  const [forceMin, setForceMin] = useState("No");
  const data = copierTableData.filter((item) => item.id == id)[0];
  const handleChanges = (e) => {
    setReverseTrade(e);
  };
  const handleRiskTypeChanges = (e) => {
    setRiskyType(e);
  };
  const handleFixedLotChanges = (e) => {
    setFixedLot(e.target.value);
  };
  const handleMaxLotChanges = (e) => {
    setMaxLot(e.target.value);
  };

  const handleSlippageChanges = (e) => {
    setSlippage(e.target.value);
  };

  const handleForceChanges = (e) => {
    setForceMin(e);
  };
  return (
    <div>
      <div key={data?.id}>
        <div className="mt-1 flex items-center bg-gray-300 py-5 px-12 font-medium">
          <p className="text-2xl">Risk Settings</p>
        </div>
        <div className="mt-1  flex flex-row items-center justify-around gap-12 bg-gray-200 py-5 px-4 font-medium">
          <p>Reverse Trades</p>
          <div>
            <Select
              className="w-96 bg-gray-300"
              value={reverseTrade}
              onChange={handleChanges}
              color="gray"
            >
              <Option value="No">No</Option>
              <Option value="Yes">Yes</Option>
            </Select>
          </div>
        </div>
        <div className="mt-1  flex flex-row items-center justify-around gap-12 bg-gray-200 py-5 px-4 font-medium">
          <p>Risk Type</p>
          <div>
            <Select
              className="w-96 bg-gray-300"
              value={riskType}
              onChange={handleRiskTypeChanges}
              color="gray"
            >
              <Option value="Risk multiplier by balance">
                Risk multiplier by balance
              </Option>
              <Option value="Risk multiplier by equity">
                Risk multiplier by equity
              </Option>
              <Option value="Lot multiplier">Lot multiplier</Option>
              <Option value="Fixed Lot">Fixed Lot</Option>
            </Select>
          </div>
        </div>

        <div className="mt-1  flex flex-row items-center justify-around gap-10 bg-gray-200 py-5 px-4 font-medium">
          <p>Fixed Lot</p>
          <div>
            <Input
        
              type="number"
              className="w-96 bg-gray-300"
              onChange={handleFixedLotChanges}
            />
          </div>
        </div>

        <div className="mt-1  flex flex-row items-center justify-around gap-10 bg-gray-200 py-5 px-4 font-medium">
          <p>Slippage</p>
          <div>
            <Input
              type="number"
              className="w-96 bg-gray-300"
              onChange={handleSlippageChanges}
            />
          </div>
        </div>

        <div className="mt-1  flex flex-row items-center justify-around gap-10 bg-gray-200 py-5 px-4 font-medium">
          <p>Max Lot</p>
          <div>
            <Input
              type="number"
              className="w-96 bg-gray-300"
              onChange={handleMaxLotChanges}
            />
          </div>
        </div>

        <div className="mt-1  flex flex-row items-center justify-around gap-12 bg-gray-200 py-5 px-4 font-medium">
          <p>Force Min Lot</p>
          <div>
            <Select
              className="w-96 bg-gray-300"
              value={forceMin}
              onChange={handleForceChanges}
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

export default CopierSettings;
