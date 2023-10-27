import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  IconButton,
  Radio,
} from "@material-tailwind/react";
import {
  Cog8ToothIcon,
  ListBulletIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  XMarkIcon,
  Cog6ToothIcon,
  PowerIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function TradeCopierTable({ data, setData }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModeOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ON");
  const accountsPerPage = 5;
  const pagesVisited = (pageNumber - 1) * accountsPerPage;

  const pageCount = Math.ceil(data.length / accountsPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };
  console.log(data);
  const getItemProps = (index) => ({
    variant: pageNumber === index ? "filled" : "text",
    color: "gray",
    onClick: () => setPageNumber(index),
    className: "rounded-full",
  });

  const next = () => {
    if (pageNumber === pageCount) return;

    setPageNumber(pageNumber + 1);
  };

  const prev = () => {
    if (pageNumber === 1) return;

    setPageNumber(pageNumber - 1);
  };

  const handleDelete = (send_to_name) => {
    setData((prev) =>
      prev.filter((item) => item.send_to_name !== send_to_name)
    );
  };
  const handleMode = () => {
    setIsModeOpen(true);
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const displayData = data
    .slice(pagesVisited, pagesVisited + accountsPerPage)
    .map(
      (
        { copy_from, send_to_name, send_to_number, risk_type, direction, id },
        key
      ) => {
        const className = `py-3 px-5 ${
          key === data?.lpropength - 1 ? "" : "border-b border-blue-gray-50"
        }`;
        return (
          <tr key={key}>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {copy_from}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {send_to_name}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {send_to_number}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {risk_type}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {direction == "right" ? (
                  <ArrowRightCircleIcon color="green" className="h-5 w-5" />
                ) : (
                  <ArrowLeftCircleIcon color="red" className="h-5 w-5" />
                )}
              </Typography>
            </td>
            <td className={className}>
              <div className="flex gap-1">
                <IconButton
                  color="blue"
                  className={`h-8 w-8 ${
                    selectedOption === "ON"
                      ? "bg-green-700"
                      : selectedOption === "monitor"
                      ? " bg-yellow-600"
                      : selectedOption === "OFF"
                      ? "bg-red-700"
                      : ""
                  }`}
                  onClick={handleMode}
                >
                  {selectedOption == "ON" ? (
                    <PlayIcon strokeWidth={2} className="h-4 w-4" />
                  ) : selectedOption == "monitor" ? (
                    <PauseIcon strokeWidth={2} className="h-4 w-4" />
                  ) : (
                    <StopIcon strokeWidth={2} className="h-4 w-4" />
                  )}
                </IconButton>
                <Link to={`../copier/${id}/edit`}>
                  <IconButton color="red" className="h-8 w-8">
                    <Cog8ToothIcon strokeWidth={2} className="h-4 w-4" />
                  </IconButton>
                </Link>

                <IconButton color="green" className="h-8 w-8">
                  <ListBulletIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(send_to_name)}
                  color="amber"
                  className="h-8 w-8"
                >
                  <TrashIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
              </div>
            </td>
          </tr>
        );
      }
    );
  return (
    <>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-8 flex flex-row justify-between p-6"
          >
            <Typography variant="h6" color="white">
              Accounts
            </Typography>
            <div className="flex flex-row gap-3">
              <Button
                variant="h6"
                color="white"
                className="flex flex-row items-center gap-2 text-black hover:text-opacity-30"
              >
                <Cog6ToothIcon className="w-6" />
                <p className="textlg capitalize">Group Risk</p>
              </Button>
              <Button
                variant="h6"
                color="white"
                className="flex flex-row items-center gap-2 text-black hover:text-opacity-30"
              >
                <PowerIcon className="w-6" />
                <p className="textlg capitalize">Group Modes</p>
              </Button>
              <Button
                variant="h6"
                color="white"
                className="flex flex-row items-center gap-2 text-black hover:text-opacity-30"
              >
                <PlusIcon className="w-6" />
                <p className="textlg capitalize">Group Copier</p>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "provider",
                    "Send To Name",
                    "Send To Number",
                    "Risk Type",
                    "Direction",
                    " ",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{displayData}</tbody>
            </table>
          </CardBody>
        </Card>
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={prev}
            disabled={pageNumber === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <IconButton {...getItemProps(i + 1)} key={`page-button-${i}`}>
                {i + 1}
              </IconButton>
            ))}
          </div>

          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={next}
            disabled={pageNumber === pageCount}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className=" h-[40%] w-[30%]   rounded-2xl bg-white">
            <div className="flex items-center justify-between border-b-2 p-4">
              <h2 className="text-2xl">
                Set Mode for <span className="font-bold">Demo Account</span>
              </h2>
              <IconButton
                onClick={() => setIsModeOpen(false)}
                size="md"
                color="blue"
                className="flex items-center gap-2"
              >
                <XMarkIcon
                  color="white"
                  className="h-5 w-5 text-inherit "
                ></XMarkIcon>
              </IconButton>
            </div>
            <div className="gpa flex h-[60%] flex-row items-center  justify-around  border-b-2">
              <p className="font-bold">Copier Mode</p>
              <div className="flex flex-col items-start">
                <Radio
                  color="green"
                  name="mode"
                  label={"ON"}
                  value="ON"
                  checked={selectedOption === "ON"}
                  onChange={handleChange}
                />
                <Radio
                  color="yellow"
                  name="mode"
                  label="Monitor existing trades only"
                  value={"monitor"}
                  checked={selectedOption === "monitor"}
                  onChange={handleChange}
                />
                <Radio
                  color="red"
                  name="mode"
                  label="OFF "
                  value={"OFF"}
                  checked={selectedOption === "OFF"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-end justify-end p-3 px-2">
              <Button
                color="blue"
                size="lg"
                className="px-8 py-3"
                onClick={() => setIsModeOpen(false)}
              >
                <Link>update</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TradeCopierTable;
