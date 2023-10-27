import { InformationCircleIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import React from "react";

const MapSymbols = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between rounded bg-gray-300 py-3 px-5">
        <p className="text-xl font-medium ">Map Symbols</p>
        <Button
          className=" flex flex-row items-center justify-center gap-2"
          color="blue"
        >
          <PlusIcon className="h-6 w-6" />
          <p className="capitalize"> Add Symbol Map</p>
        </Button>
      </div>
      <div className=" p-5">
        <div className="rounded-lg bg-blue-300 p-4 text-white">
          <div className="flex flex-row gap-x-2">
            <InformationCircleIcon className="h-6 w-6" />
            <p>Features notice</p>
          </div>
          <p className="pl-12">
            You do <span className="font-bold">NOT</span> need to map forex
            symbols with different suffixes
          </p>
          <p className="pl-12">
            {" "}
            You should select appropriate suffix from{" "}
            <span className="font-bold"> Forex suffix </span> page in your
            account <span className="font-bold">settings.</span>{" "}
          </p>
        </div>
        <div>
          <table className="w-full min-w-[640px] table-auto border-2 border-blue-500 m-3">
            <thead>
              <tr className="bg-blue-200 text-white">
                <th className="border-b border-r-gray-300 py-3 px-5 text-left border-r-2">
                  Map Symbol From
                </th>
                <th className="border-b border-blue-200 py-3 px-5 text-left">
                  Map Symbol To
                </th>
              </tr>
            </thead>
            <tbody>
                < tr className="p-4">
                    <td colSpan={2} className="p-6">No Symbol map defined</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MapSymbols;
