import React from "react";
import { Switch } from "@material-tailwind/react";

const DisableSymbols = () => {
  const toggleData = [
    { label: "AUDCAD", isOn: false },
    { label: "AUDCHF", isOn: false },
    { label: "AUDHKD", isOn: false },
    { label: "AUDJPY", isOn: false },
    { label: "AUDNZD", isOn: false },
    { label: "AUDSGD", isOn: false },
    { label: "AUDUSD", isOn: false },
    { label: "CADCHF", isOn: false },
    { label: "CADHKD", isOn: false },
    { label: "CADJPY", isOn: false },
    { label: "CADSGD", isOn: false },
    { label: "CHFHKD", isOn: false },
    { label: "CHFJPY", isOn: false },
    { label: "CHFZAR", isOn: false },
    { label: "EURAUD", isOn: false },
    { label: "EURCAD", isOn: false },
    { label: "EURCHF", isOn: false },
    { label: "EURCZK", isOn: false },
    { label: "EURDKK", isOn: false },
    { label: "EURGBP", isOn: false },
    { label: "EURHKD", isOn: false },
    { label: "EURHUF", isOn: false },
    { label: "EURJPY", isOn: false },
    { label: "EURNOK", isOn: false },
    { label: "EURNZD", isOn: false },
    { label: "EURPLN", isOn: false },
    { label: "EURSEK", isOn: false },
    { label: "EURSGD", isOn: false },
    { label: "EURTRY", isOn: false },
    { label: "EURUSD", isOn: false },
    { label: "EURZAR", isOn: false },
    { label: "GBPAUD", isOn: false },
    { label: "GBPCAD", isOn: false },
    { label: "GBPCHF", isOn: false },
    { label: "GBPHKD", isOn: false },
    { label: "GBPJPY", isOn: false },
    { label: "GBPNZD", isOn: false },
    { label: "GBPPLN", isOn: false },
    { label: "GBPSGD", isOn: false },
    { label: "GBPUSD", isOn: false },
    { label: "GBPZAR", isOn: false },
    { label: "HKDJPY", isOn: false },
    { label: "NZDCAD", isOn: false },
    { label: "NZDCHF", isOn: false },
    { label: "NZDHKD", isOn: false },
    { label: "NZDJPY", isOn: false },
    { label: "NZDSGD", isOn: false },
    { label: "NZDUSD", isOn: false },
    { label: "SGDCHF", isOn: false },
    { label: "SGDJPY", isOn: false },
    { label: "TRYJPY", isOn: false },
    { label: "USDCAD", isOn: false },
    { label: "USDCHF", isOn: false },
    { label: "USDCNH", isOn: false },
    { label: "USDCZK", isOn: false },
    { label: "USDDKK", isOn: false },
    { label: "USDHKD", isOn: false },
    { label: "USDHUF", isOn: false },
    { label: "USDJPY", isOn: false },
    { label: "USDMXN", isOn: false },
    { label: "USDNOK", isOn: false },
    { label: "USDPLN", isOn: false },
    { label: "USDSAR", isOn: false },
    { label: "USDSEK", isOn: false },
    { label: "USDSGD", isOn: false },
    { label: "USDTHB", isOn: false },
    { label: "USDTRY", isOn: false },
    { label: "USDZAR", isOn: false },
    { label: "ZARJPY", isOn: false },
  ];

  // const [switchStates, setSwitchStates] = useState(toggleData);
  // const toggleSwitch = (index) => {
  //     const updatedSwitchStates = [...switchStates];
  //     updatedSwitchStates[index].isOn = !updatedSwitchStates[index].isOn;
  //     setSwitchStates(updatedSwitchStates);
  //   };

  return (
    <div className="text-sm">
      <div className="flex justify-between rounded bg-gray-300 py-3 px-5">
        <div className="">
          <p className="text-lg font-medium">Disable symbols</p>
          <p>
            <span className=" font-bold text-blue-700">8</span> Enabled symbols
            | <span className="font-bold text-red-900">61</span> Disabled
            symbols
          </p>
          <p className="text-sm">
            A coloured switch indicates the symbol is{" "}
            <span className="font-bold text-blue-700">ENABLED.</span>
          </p>
        </div>
        <div className="">
          <button className="rounded-md bg-blue-500 px-2 py-1 text-white">
            Toggle all symbols
          </button>
        </div>
      </div>
      <div className="mt-1 flex bg-gray-200 py-4 px-10">
        <p>Forex symbols</p>
        <button className="ml-10 rounded-md bg-blue-500 px-2 py-1 text-white">
          Toggle all
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-x-12 px-7">
        {toggleData.map((data, index) => (
          <div key={data.label}>
            <div>
              <p className="my-2">{data.label}</p>
              <Switch
                // checked={switchStates[index].isOn}
                // onChange={() => toggleSwitch(index)}
                ripple={false}
                className="h-full w-full checked:bg-blue-500"
                containerProps={{
                  className: "w-11 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisableSymbols;
