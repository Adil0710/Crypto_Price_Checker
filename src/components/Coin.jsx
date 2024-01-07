import React from 'react'

function Coin({name, icon, price, symbol, websiteurl}) {
  return (
    <div className='coin bg-gray-800 text-gray-200 p-5 rounded-lg w-60'>
        <h1 className='font-bold text-2xl'> Name: {name}</h1>
        
        <img src={icon} className='w-14 h-14 mt-5'/>
        <h6 className='mt-6 font-semibold'> Price: {price}</h6>

        <h3 className='mt-3 font-semibold'> Symbol: {symbol}</h3>
        <h4 className='mt-3'><a className=' text-blue-500' href={websiteurl} target="_blank" rel="noopener noreferrer">Website</a></h4>
    </div>
  )
}

export default Coin