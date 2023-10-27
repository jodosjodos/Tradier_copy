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
  EllipsisVerticalIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { tradesTableData } from "@/data";
import { useState } from "react";
import TableHeader from "../TableHeader";

export function TradesTable({group,account,columns}) {
  const [pageNumber, setPageNumber] = useState(1);
  const tradesPerPage = 5;
  const pagesVisited = (pageNumber - 1) * tradesPerPage;

  const pageCount = Math.ceil(tradesTableData.length / tradesPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

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

  const displayData = tradesTableData.filter(accountData=>(group !== ""? accountData.account === group : accountData && account !== ""? accountData.account === account:accountData))
    .slice(pagesVisited, pagesVisited + tradesPerPage)
    .map(
      (
        {
          id,
          ticket,
          account,
          opentime,
          symbol,
          type,
          lots,
          openprice,
          sl,
          tp,
          com,
          swap,
          profit,
        },
        key
      ) => {
        const className = `py-3 px-5 ${
          key === tradesTableData.length - 1
            ? ""
            : "border-b border-blue-gray-50"
        }`;

        return (
          <tr key={key}>
            {columns.id && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {id}
              </Typography>
            </td>}
            {columns.ticket && <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {ticket}
              </Typography>
            </td>}
            {columns.account && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {account}
              </Typography>
            </td>}
            {columns.opentime && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {opentime}
              </Typography>
            </td>}
            {columns.symbol && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {symbol}
              </Typography>
            </td>}
            {columns.type && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {type}
              </Typography>
            </td>}
            {columns.lots && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {lots}
              </Typography>
            </td>}
            {columns.openprice && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {openprice}
              </Typography>
            </td>}
            {columns.sl && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {sl}
              </Typography>
            </td>}
            {columns.tp && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {tp}
              </Typography>
            </td>}
            {columns.com && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {com}
              </Typography>
            </td>}
            {columns.swap &&  <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {swap}
              </Typography>
            </td>}
            {columns.profit && <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {profit}
              </Typography>
            </td>}
            {/* <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {job[0]}
              </Typography>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {job[1]}
              </Typography>
            </td>
            <td className={className}>
              <Chip
                variant="gradient"
                color={online ? "green" : "blue-gray"}
                value={online ? "online" : "offline"}
                className="py-0.5 px-2 text-[11px] font-medium"
              />
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {date}
              </Typography>
            </td>
            <td className={className}>
              <Typography
                as="a"
                href="#"
                className="text-xs font-semibold text-blue-gray-600"
              >
                Edit
              </Typography>
            </td> */}
          </tr>
        );
      }
    );
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Trades
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <TableHeader  value={"ID"} truthy={columns.id}/>
                <TableHeader  value={"Ticket"} truthy={columns.ticket}/>
                <TableHeader  value={"Account"} truthy={columns.account}/>
                <TableHeader  value={"Open Time"} truthy={columns.opentime}/>
                <TableHeader  value={"Symbol"} truthy={columns.symbol}/>
                <TableHeader  value={"Type"} truthy={columns.type}/>
                <TableHeader  value={"Lots"} truthy={columns.lots}/>
                <TableHeader  value={"Open Price"} truthy={columns.openprice}/>
                <TableHeader  value={"SL"} truthy={columns.sl}/>
                <TableHeader  value={"TP"} truthy={columns.tp}/>
                <TableHeader  value={"Com"} truthy={columns.com}/>
                <TableHeader  value={"Swap"} truthy={columns.swap}/>
                <TableHeader  value={"Profit"} truthy={columns.profit}/>
                <TableHeader  value={" "} truthy={true}/>
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
  );
}

export default TradesTable;

// "ID",
// "Ticket",
// "Account",
// "Open Time",
// "Symbol",
// "Type",
// "Lots",
// "Open Price",
// "SL",
// "TP",
// "Com",
// "Swap",
// "Profit",
// " ",