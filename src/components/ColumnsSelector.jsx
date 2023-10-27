import { Button, Checkbox, FormControlLabel, Menu, Fade } from "@mui/material";
import React, { useState } from "react";

const ColumnsSelector = ({
  handleChange,
  arrayOfColumns,
  handleReset,
  handleViewAll,
  checked,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handlecolumnsMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const initialColumnValues = arrayOfColumns.reduce((acc, obj) => {
    acc[obj.key] = obj.value;
    return acc;
  }, {});

  const trueValuesCount = arrayOfColumns.filter(item => item.value === true).length;

  return (
    <div className="absolute top-11 right-0 z-50 w-[200px] rounded-md bg-white">
      <h3 className="mt-2 text-center text-xs">toggle visible columns</h3>
      <Button
        sx={{ backgroundColor: "white", color: "black", fontSize: 13 }}
        id="fade-button"
        className="w-full bg-white text-sm"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handlecolumnsMenuClick}
      >
       {trueValuesCount === arrayOfColumns.length ? "selected all":"selected "+trueValuesCount}
      </Button>
      <Menu
        id="fade-menu"
        className="pl-2"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <li>
        <FormControlLabel
              className="w-full pl-2"
              control={
                <Checkbox
                  checked={checked}
                  onChange={()=>handleViewAll(initialColumnValues)}
                  name={"view all"}
                />
              }
              label={"View all"}
            /> 
        </li>
        {arrayOfColumns.map((column, index) => (
          <li
            key={index}
            className={` ${
              column.value ? " bg-blue-200" : ""
            } h-[35px] w-[200px] pl-2 hover:bg-blue-gray-100`}
          >
            <FormControlLabel
              className="w-full"
              control={
                <Checkbox
                  checked={column.value}
                  onChange={handleChange}
                  name={column.key}
                />
              }
              label={column.key}
            />
          </li>
        ))}
      </Menu>
      <button
        onClick={handleReset}
        className=" h-[35px] w-full rounded-md bg-[#3197ed] text-white shadow-md"
      >
        Reset columns
      </button>
    </div>
  );
};

export default ColumnsSelector;
