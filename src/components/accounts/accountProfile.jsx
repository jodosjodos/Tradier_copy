import React from 'react'
import manageAccountData from "@/data/manage-account-data";

const AccountProfile = () => {

  return (
    <div>
        {manageAccountData.map((account, index) => (
            <div key={account.id}>
            <div className='py-3 px-5 rounded bg-gray-300'>
              <p className='font-medium text-lg'>General</p>
            </div>
            <div className=' py-5 px-10 mt-1 bg-gray-200 flex justify-between'>
              <label className='font-medium'>Descriptive name</label>
              <input type="text" value={account.name} name='accountName' className=' px-4 py-2 outline-none focus:outline-blue-50 rounded-md' />
            </div>
            <div className='py-5 px-10 mt-1 font-medium bg-gray-200'>
              <p>My suffix</p>
            </div>
            <div className=' py-5 px-10 mt-1 font-medium bg-gray-200 flex'>
              <p>Account: </p>
              <p className='ml-10'>{account.account}</p>
            </div>
            <div className='flex py-5 px-10 mt-1 font-medium bg-gray-200'>
                <p className='mr-14'>Broker</p>
                <p>OANDA DIVISION1</p>
            </div>
            <div className='flex py-5 px-10 mt-1 font-medium bg-gray-200'>
                <p>Type </p>
                <p className='ml-16'>{account.name}</p>
            </div>
            <div className=' py-4 px-10 mt-1 font-medium bg-gray-200 flex justify-center'>
                <button className='px-5 py-2 text-medium text-white hover:opacity-80 duration-300 bg-blue-600 rounded-md'>
                    Update
                </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AccountProfile