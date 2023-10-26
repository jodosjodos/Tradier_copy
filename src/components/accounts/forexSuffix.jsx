import React from 'react'

const ForexSuffix = () => {
    const forexSymbol = [
        "AUDCAD", "AUDCHF","AUDHKD",
        "AUDJPY",
        "AUDNZD",
        "AUDSGD",
        "AUDUSD",
        "CADCHF",
        "CADHKD",
        "CADJPY",
        "CADSGD",
        "CHFHKD",
        "CHFJPY",
        "CHFZAR",
        "EURAUD",
        "EURCAD",
        "EURCHF",
        "EURCZK",
        "EURDKK",
        "EURGBP",
        "EURHKD",
        "EURHUF",
        "EURJPY",
        "EURNOK",
        "EURNZD",
        "EURPLN",
        "EURSEK",
        "EURSGD",
        "EURTRY",
        "EURUSD",
        "EURZAR",
        "GBPAUD",
        "GBPCAD",
        "GBPCHF",
        "GBPHKD",
        "GBPJPY",
        "GBPNZD",
        "GBPPLN",
        "GBPSGD",
        "GBPUSD",
        "GBPZAR",
        "HKDJPY",
        "NZDCAD",
        "NZDCHF",
        "NZDHKD",
        "NZDJPY",
        "NZDSGD",
        "NZDUSD",
        "SGDCHF",
        "SGDJPY",
        "TRYJPY",
        "USDCAD",
        "USDCHF",
        "USDCNH",
        "USDCZK",
        "USDDKK",
        "USDHKD",
        "USDHUF",
        "USDJPY",
        "USDMXN",
        "USDNOK",
        "USDPLN",
        "USDSAR",
        "USDSEK",
        "USDSGD",
        "USDTHB",
        "USDTRY",
        "USDZAR",
        "ZARJPY"
      ];
      
  return (
    <div>
        <div className='py-3 px-5 rounded bg-gray-300'>
            <p className='font-medium text-lg'>General</p>
        </div>
        <div className='px-10 py-4 bg-gray-200'>
            <input type="radio" className=''/>
            <label className='font-medium ml-2'>No suffix</label>         
        </div>  
        <div className='flex h-[400px] px-10 py-4 bg-gray-200'>
            <div className='mr-4'>
              <p>Available forex symbols</p>
            </div>
            <div className='overflow-y-scroll px-24'>
              <ul>
                {forexSymbol.map((pair, index) => (
                  <li key={index} className='py-2'>{pair}</li>
                  ))}
              </ul>                    
            </div>
        </div>  
        <div className=' py-2 px-24 mt-1 font-medium bg-gray-200 flex justify-center'>
            <button className='px-5 py-2 text-medium text-white hover:opacity-80 duration-300 bg-blue-600 rounded-md'>
                Update
            </button>
        </div>

    </div>
  )
}

export default ForexSuffix