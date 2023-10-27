import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import CopierGeneral from "./CopierGeneral";
import CopierSettings from "./CoppierSettings";
import StopsLimits from "./StopsLimits";
import MapSymbols from "./MapSymbols";
import CopierDisableSymbols from "./CopierDisableSymbols";

export const CopierProfile = () => {
    const path= useParams();
    const  id = parseInt(path?.id);

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`./${path}`);
  };
  return (
    <div>
      <div>
        <Link to="../trade">
          <p className="font-bold">
            <IconButton className="bg-slate-100 h-8 w-8 text-black shadow-none">
              <ArrowLeftIcon strokeWidth={6} className="h-5 w-5" />
            </IconButton>
            My copiers
          </p>
        </Link>
      </div>
      <div className="flex flex-row  gap-x-5">
        <div className="float-left flex w-[18%] flex-col gap-y-1">
          <Button
            color="blue"
            className="rounded-none"
            onClick={() => handleButtonClick("../edit")}
          >
            General
          </Button>
          <Button
            className="rounded-none"
          
          color="blue" onClick={() => handleButtonClick("settings")}>
            Risk Settings
          </Button>
          <Button 
            className="rounded-none"
          
          color="blue" onClick={() => handleButtonClick("limits")}>
            Stops & Limits
          </Button>
          <Button 
            className="rounded-none"
          
          color="blue" onClick={() => handleButtonClick("symbols")}>
            Disable Symbols
          </Button>
          <Button 
            className="rounded-none"
          
          color="blue" onClick={() => handleButtonClick("map")}>
            Map Symbols
          </Button>
        </div>
        <div className="col-md-9 col-sm-12 col-xs-12 float-right w-[80%] shadow">
          <Routes>
            <Route path="/" element={<CopierGeneral id={id} />} />
            <Route path="/settings" element={<CopierSettings id={id} />} />
            <Route path="/limits" element={<StopsLimits />} />
            <Route path="/symbols" element={<CopierDisableSymbols />} />
            <Route path="/map" element={<MapSymbols />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
