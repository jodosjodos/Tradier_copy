import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Cog8ToothIcon,
  TrashIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  CreditCardIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import signalData from "@/data/signal-table-data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SingleSignalTable } from "./SignleSignalTable";
import { SignalDetails } from "./SignalDetails";
export function UserSignalDetails() {
  const { signal } = useParams();
  const SingleSignalData=signalData.filter(item=>item.signal == signal)


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="flex justify-between px-10">
        <Button
          size="md"
          color="blue"
          className="flex items-center justify-center gap-2"
          variant="gradient"
        >
          <div>{signal}</div> 
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-1">
          <Link className="flex flex-row gap-x-1 text-xl font-bold" to="../signals">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          <span >My signals  </span>
          </Link>

          <SignalDetails signalData={SingleSignalData} />
        </div>
        <div className="col-span-4 mt-6">
          <SingleSignalTable signalData={SingleSignalData} />
        </div>
      </div>
    </div>
  );
}

export default UserSignalDetails;
