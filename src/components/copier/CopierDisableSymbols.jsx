import React, { useState } from 'react'
import { Button, Switch } from "@material-tailwind/react";
import { toggleDatas } from '@/data';
const CopierDisableSymbols = () => {
  const [toggleData,setToggleData] = useState(toggleDatas)
// const [switchStates, setSwitchStates] = useState(toggleData);
// const toggleSwitch = (index) => {
//     const updatedSwitchStates = [...switchStates];
//     updatedSwitchStates[index].isOn = !updatedSwitchStates[index].isOn;
//     setSwitchStates(updatedSwitchStates);
//   };
const enableAll=()=>{
setToggleData(prev=>prev.map((data)=>({...data,isOn:true})));
}
  return (
    <div className='text-sm'>
        <div className='flex justify-between py-3 px-5 rounded bg-gray-300 items-center'>
            <div className=''>
                <p className='font-medium text-lg'>Disable symbols</p>
                <p>
                    <span className=' text-blue-700 font-bold'>8</span> Enabled symbols | <span className='text-red-900 font-bold'>61</span> Disabled symbols
                </p>
                <p className='text-sm'>A coloured switch indicates the symbol is <span className='text-blue-700 font-bold'>ENABLED.</span></p>
            </div>
            <div className=''>
                <Button className='px-3 py-2 text-white bg-blue-500 rounded-md' onClick={enableAll}>
                    Toggle all symbols
                </Button>
            </div>
        </div>
        <div className='flex bg-gray-200 py-4 px-10 mt-1 items-center  flex-row'>
            <p>Forex symbols</p>
            <Button size='lg' className='px-3 py-2 text-white bg-blue-500 ml-10 rounded-md'>Toggle all</Button>
        </div>
        <div className='flex bg-gray-200 py-4 px-10 mt-1 items-center'>
            <p>No suffix</p>
            <Button  size='lg' className='px-3 py-2 text-white bg-blue-500 ml-10 rounded-md'>Toggle No suffix</Button>
        </div>
        <div className='flex flex-row flex-wrap gap-x-12 px-7'>
        {toggleData.map((data, index) => (
        <div key={data.label}>
          <div>          
          <p className='my-2'>{data.label}</p>
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
  )
}
export default CopierDisableSymbols