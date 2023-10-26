import React from 'react'
import { IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import AccountProfile from './accountProfile';
import EquityProtection from './equityProtection';
import ForexSuffix from './forexSuffix';
import DisableSymbols from './disableSymbols';

const Profile = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(`./${path}`);
    }
  return (
    <div>
        <div>
            <Link to='../accounts'>
              <p className='font-bold'>
                <IconButton className="bg-slate-100 text-black h-8 w-8 shadow-none">
                  <ArrowLeftIcon strokeWidth={6} className="h-5 w-5" />
                </IconButton>
                My accounts
               </p>
            </Link>
        </div>
        <div>
            <div className='flex flex-col float-left gap-y-1'>
                <button 
                    className='px-16 py-2 font-medium text-white bg-black rounded-md'
                    onClick={() => handleButtonClick('../edit')}
                >Account profile</button>
                <button 
                    className='px-16 py-2 font-medium text-white bg-black rounded-md'
                    onClick={() => handleButtonClick('equity')}
                >Equity Protection</button>
                <button 
                    className='px-16 py-2 font-medium text-white bg-black rounded-md'
                    onClick={() => handleButtonClick('suffix')}
                >Forex Suffix</button>
                <button 
                    className='px-16 py-2 font-medium text-white bg-black rounded-md'
                    onClick={() => handleButtonClick('symbols')}
                >Disable Symbols</button>
            </div>
            <div className='float-right w-[70%] col-md-9 col-sm-12 col-xs-12 shadow'>     
                <Routes>
                    <Route path="/" element={<AccountProfile />} />
                    <Route path="/equity" element={<EquityProtection />} />
                    <Route path="/suffix" element={<ForexSuffix />} />
                    <Route path="/symbols" element={<DisableSymbols />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Profile