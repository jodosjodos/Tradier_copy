import { Card, Typography } from "@material-tailwind/react";
import {Box} from "@mui/material";
import {  signalData } from "@/data";
 
const   TABLE_HEAD = ["Date", "type", "Expiry", "Comments"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
 
export function SingleSignalTable({signalData}) {
  return (
    <div className="bg-white p-2 ">
        <h1 className="m-8 text-2xl font-bold">Transactions</h1>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 shadow-none"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {signalData.map(({expires}, index) => {
            const isLast = index === signalData.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    15:51:13 13th Oct 23
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Signup by user
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {expires ?"expires" :""}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >

                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
  );
}