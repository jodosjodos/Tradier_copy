import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Input, Radio } from "@material-tailwind/react";
import { copierTableData } from "@/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const CopierGeneral = ({ id }) => {
  const data = copierTableData.filter((item) => item.id === id)[0];

  const [selectedOption, setSelectedOption] = useState(data?.copier_mode);
  const [comment,setComment] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormChange=(e)=>{
setComment(e.target.value);
}
  return (
    <div>
      <div key={data?.id}>
        <div className="rounded bg-gray-300 py-3 px-5">
          <p className="text-lg font-medium">Generall</p>
        </div>
        <div className="flex flex-col justify-center  gap-5  p-5">
          <div className="rounded-lg bg-blue-300 p-4 text-white">
            <div className="flex flex-row gap-x-2">
              <InformationCircleIcon className="h-6 w-6" />
              <p>Features notice</p>
            </div>
            <p className="pl-12">
              Trade comments may now only contain letters,numbers , dashes ,
              underscores and spaces
            </p>
          </div>
          <p className="flex flex-row items-center justify-center gap-10 self-center">
            {" "}
            <span className="font-bold">copy from </span>{" "}
            <span>{data?.copy_from}</span>{" "}
          </p>
        </div>

        <div className="mt-1 flex flex-col items-center justify-center bg-gray-200 py-5 px-24 font-medium">
          <p className="flex flex-row items-center justify-center gap-10 self-center">
            {" "}
            <span>Send To</span> <span> {data?.send_to_name}</span>{" "}
          </p>
        </div>
        <div className=" mt-1 flex flex-row items-center justify-center gap-5 bg-gray-200 py-5 px-24  font-medium">
          <p>Copier Mode </p>
          <div className="flex flex-col  justify-center">
            <Radio
              color="green"
              name="mode"
              value="ON"
              label="ON"
              checked={selectedOption == "ON"}
              onChange={handleChange}
            />
            <Radio
              color="yellow"
              name="mode"
              value="monitor"
              label="Monitor existing only"
              checked={selectedOption == "monitor"}
              onChange={handleChange}
            />
            <Radio
              color="red"
              name="mode"
              value="OFF"
              label="OFF"
              checked={selectedOption == "OFF"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-1 flex flex-row items-center justify-center gap-x-4 bg-gray-200 py-5 px-20 font-medium">
          <p>Trade comment (16 chars max)</p>
          <div className="w-72">
            <Input label="comment" onChange={handleFormChange} />
          </div>
        </div>

        <div className=" mt-1 flex justify-center bg-gray-200 py-4 px-24 font-medium">
          <Link to="../trade" className="text-medium rounded-md bg-blue-600 px-5 py-2 text-white duration-300 hover:opacity-80">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopierGeneral;
