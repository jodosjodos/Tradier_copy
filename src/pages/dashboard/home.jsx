import { useEffect, useState } from "react";
import { ButtonGroup, Button, IconButton } from "@material-tailwind/react";
import {
  FunnelIcon,
  EyeSlashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { x } from "@heroicons/react/solid"
import { authorsTableData, projectsTableData } from "@/data";
import AccountsTable from "@/components/home/AccountsTable";
import TradesTable from "@/components/home/TradesTable";
import HistoryTable from "@/components/home/HistoryTable";
import {
  Menu,
  MenuItem,
  Divider,
  Fade,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ColumnsSelector from "@/components/ColumnsSelector";
export function Home() {
  const initialColumnsState = {
    account: true,
    mt: true,
    balance: true,
    equity: true,
    equity_percent: true,
    open_traders: true,
    pending: true,
    day: true,
    week: true,
    month: true,
    total: true,
  };
  const [buttonState, setButtonState] = useState("accounts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [group, setGroup] = useState("");
  const [account, setAccount] = useState("");
  const [isOpenColumnsMenu, setIsOpenColumnsMenu] = useState(false);
  const [columns, setColumns] = useState(initialColumnsState);
  const copierGroup = [
    "TradersNetworkClub (254738)",
    "Global Networking Account",
  ];
  const accounts = ["Demo Account", "real account"];
  const arrayOfColumns = Object.keys(columns).map((key) => ({
    key: key,
    value: columns[key],
  }));
  const trueValuesCount = arrayOfColumns.filter(
    (item) => item.value === true
  ).length;
  useEffect(() => {
    if (arrayOfColumns.length === trueValuesCount) {
      setChecked(true);
    }
  }, [columns]);
  const handleClick = (e) => {
    if (e.target.id === "modalContainer") setIsModalOpen(false);
  };
  const handleViewAll = () => {
    setChecked(true);
    setColumns(initialColumnsState);
  };
  const handleChange = (event) => {
    setChecked(false);
    setColumns({
      ...columns,
      [event.target.name]: event.target.checked,
    });
  };

  const handleReset = () => {
    setColumns(initialColumnsState);
  };
  return (
    <>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <div className="flex justify-between gap-2">
          <ButtonGroup color="green">
            <Button onClick={() => setButtonState("accounts")}>Accounts</Button>
            <Button onClick={() => setButtonState("trades")}>Trades</Button>
            <Button onClick={() => setButtonState("history")}>History</Button>
          </ButtonGroup>
          <div className=" relative flex gap-2">
            <IconButton
              size="md"
              color="blue"
              className="flex items-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <FunnelIcon color="white" className="h-5 w-5 text-inherit" />
            </IconButton>
            <IconButton
              size="md"
              color="blue"
              className="flex items-center gap-2"
              onClick={() => setIsOpenColumnsMenu((prev) => !prev)}
            >
              <EyeSlashIcon color="white" className="h-5 w-5 text-inherit" />
            </IconButton>
            {/* drop down menu */}
            {isOpenColumnsMenu && (
              <ColumnsSelector
                selectedColumns={"Select all columns"}
                handleChange={handleChange}
                arrayOfColumns={arrayOfColumns}
                handleReset={handleReset}
                checked={checked}
                handleViewAll={handleViewAll}
              />
            )}
          </div>
        </div>
        {buttonState === "accounts" ? (
          <AccountsTable group={group} account={account} columns={columns} />
        ) : buttonState === "trades" ? (
          <TradesTable group={group} account={account} columns={columns} />
        ) : (
          <HistoryTable group={group} account={account} columns={columns} />
        )}
      </div>
      {/* filter view modal */}

      {isModalOpen && (
        <div
          onClick={handleClick}
          id="modalContainer"
          className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className=" h-[40%] w-[30%] rounded-md bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className=" text-xl">Filter view</h2>
              <IconButton
                onClick={() => setIsModalOpen(false)}
                size="md"
                color="blue"
                className="flex items-center gap-2"
              >
                <XMarkIcon color="white" className="h-5 w-5 text-inherit" />
              </IconButton>
            </div>
            <hr className=" m-3" />
            <div>
              <div className="flex flex-col">
                <label className=" text-base">copier Group</label>
                <select
                  value={group}
                  onChange={(e) => {
                    setGroup(e.target.value);
                    setIsModalOpen(false);
                  }}
                  className="h-[30px] rounded-sm outline-none focus:shadow-sm focus:shadow-blue-200"
                  name="copierGroup"
                  id="copierGroup"
                >
                  <option value="">Show All</option>
                  {copierGroup.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              <div className="my-3 flex flex-col">
                <label className=" text-base">Accounts</label>
                <select
                  value={account}
                  onChange={(e) => {
                    setAccount(e.target.value);
                    setIsModalOpen(false);
                  }}
                  className="h-[30px] rounded-sm text-base outline-none focus:shadow-sm focus:shadow-blue-200"
                  name="account"
                  id="account"
                >
                  <option value="">Show All</option>
                  {accounts.map((Account, index) => (
                    <option key={index} value={Account}>
                      {Account}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
