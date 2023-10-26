import { useState } from "react";
import {
  Button,
  Radio,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { copierTableData, tradesTableData } from "@/data";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TradeCopierTable from "@/components/config/TradeCopier";
export function Copier() {
  const [open, setOpen] = useState(false);

  const [provider, setProvider] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [multiplierValue, setMultiplierValue] = useState("");
  const send_to_number = 456;

  const handleOpen = () => {
    
    setOpen(!open);
  };
  const submitData=()=>{
    const myObj = {
      send_to_name: provider,
      sent_to_number: multiplierValue,
      risk_type: multiplier,
    };

    copierTableData.push(myObj);
    setOpen(!open)

  }
  console.log(copierTableData);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="flex justify-between px-10">
        <Button
          size="md"
          color="blue"
          className="flex items-center justify-center gap-2"
          onClick={handleOpen}
          variant="gradient"
        >
          <PlusCircleIcon color="white" className="h-5 w-5 text-inherit" />
          <div>Create</div>
        </Button>
      </div>
      <TradeCopierTable />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Create New Trade Copier</DialogHeader>
        <DialogBody className="grid grid-cols-1 divide-y">
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Copy From</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select
                color="blue"
                value={provider}
                label="Provider"
                onChange={(e) => setProvider(e)}
              >
                <Option value="demo account">Demo Account</Option>
                <Option value="demo account">Signals</Option>
                <Option value="Trading Network Club">
                  Trading Network Club
                </Option>
                <Option value="My accounts">My accounts</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Send To</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select
                color="blue"
                value={sendTo}
                label="Copier"
                onChange={(e) => setSendTo(e)}
              >
                <Option value="Demo Account">Demo Account</Option>
                <Option value="Signals">Signals</Option>
                <Option value="Trading Network Club">
                  Trading Network Club
                </Option>
                <Option value="My accounts">My accounts</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Risk Type</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select
                color="blue"
                label="Copier"
                value={multiplier}
                onChange={(e) => setMultiplier(e)}
              >
                <Option value="Risk multiplier by balance">
                  Risk multiplier by balance
                </Option>
                <Option value="Risk multiplier by equity">
                  Risk multiplier by equity
                </Option>
                <Option value="Lot Multiplierffffffffffff">
                  Lot Multiplierffffffffffff
                </Option>
                <Option value="Fixed lot">Fixed lot</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Multiplier</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Input
                label="Multiplier"
                color="blue"
                type="number"
                value={multiplierValue}
                onChange={(e) => setMultiplierValue(e.target.value)}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={submitData}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Copier;
