import { Card, Typography } from "@material-tailwind/react";


export const SignalDetails = ({ signalData }) => {

  return (
    <>
      <div className="h-full w-full bg-white ">
        <table className="w-full min-w-max table-auto text-left     ">
          <thead>
            <tr>
              <th>
                <Typography
                  variant=""
                  color="blue-gray"
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 font-medium"
                >
                  Signal Details
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" flex flex-col gap-1 p-4">
                <span className="text-sm">Provider Name</span>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-lg font-normal "
                >
                  {signalData[0].provider_name}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className=" flex flex-col gap-1 p-4">
                <span className="text-sm">Access rights</span>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-lg font-normal "
                >
                  {signalData[0].trade_copier ? "trade copier" : ""}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className=" flex flex-col gap-1 p-4">
                <span className="text-sm">Terms</span>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-lg font-normal "
                >
                  {signalData[0].access_terms}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
