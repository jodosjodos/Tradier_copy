import { useState } from "react";
import {
  Button,
  Radio,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Select,
  Card,
  Typography,
} from "@material-tailwind/react";
import { UserPlusIcon, CreditCardIcon } from "@heroicons/react/24/outline";
import SignalTable from "@/components/signal/SignalTable";
export function Renew() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

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
          <CreditCardIcon color="white" className="h-5 w-5 text-inherit" />
          <div>Signal renewal</div>
        </Button>
      </div>
      <div>
        <Card className="h-full w-full ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th>
                  <Typography
                    variant=""
                    color="blue-gray"
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 font-medium"
                  >
                    Signal Renewals
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" flex flex-col gap-1 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-normal "
                  >
                    No renewable signals.
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

export default Renew;
