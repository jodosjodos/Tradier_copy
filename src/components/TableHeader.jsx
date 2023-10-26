import { Typography } from "@material-tailwind/react";
import React from "react";

const TableHeader = ({key,value,truthy}) => {
    if (!truthy) return;
  return (
    <th key={key} className="border-b border-blue-gray-50 py-3 px-5 text-left">
      <Typography
        variant="small"
        className="text-[11px] font-bold uppercase text-blue-gray-400"
      >
        {truthy && value}
      </Typography>
    </th>
  );
};

export default TableHeader;
