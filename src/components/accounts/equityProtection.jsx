import React from 'react'
import manageAccountData from "@/data/manage-account-data";

const EquityProtection = () => {
    const radios = [
        { id:1, name: 'No action'},
        { id:2, name: 'Email Alert'},
        { id:3, name: 'Email Alert and disable copiers'},
        { id:4, name: 'Email alert, disable copiers and close all trades'}
    ]
  return (
    <div>
        {manageAccountData.map((account, index) => (
            <div key={account.id}>
            <div className='py-5 px-20 mt-1 font-medium bg-gray-200 flex'>
                <p>Balance</p>
                <p className='ml-10'>{account.account}</p>
            </div> 
            <div className='py-5 px-24 mt-1 font-medium bg-gray-200 flex'>
                <p>Equity</p>
                <p className='ml-10'>{account.account}</p>
            </div>  
            <div className='py-5 px-10 mt-1 font-medium bg-gray-200 flex'>
                <div className='float-left'>
                    <p>Equity alert type</p>
                </div>
                <div className='ml-8'>
                    {radios.map((radio, index) => (
                        <div key={radio.id} className='my-2'>
                            <input type="radio" className='mr-2'/>
                            <label htmlFor={radio.id}>{radio.name}</label>
                        </div>
                    ))
                    }
                </div>                
            </div>    
            <div className=' py-4 px-24 mt-1 font-medium bg-gray-200 flex justify-center'>
                <button className='px-5 py-2 text-medium text-white hover:opacity-80 duration-300 bg-blue-600 rounded-md'>
                    Update
                </button>
            </div> 
        </div>
        ))

        }
    </div>
  )
}

export default EquityProtection