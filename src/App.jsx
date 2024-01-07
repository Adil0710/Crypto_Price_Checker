import.meta.env.VITE_COIN_STATS_API_KEY
import { useState, useEffect } from 'react';
import axios, * as others from 'axios';
import Coin from './components/Coin';



function App() {

const [listofCoins, setListofCoins] = useState([]);  
const [searchWord, setSearchWord] = useState("");

useEffect(() => {
  const options = {
    method: 'GET',
    url: 'https://openapiv1.coinstats.app/coins',
    headers: {
      accept: 'application/json',
      'X-API-KEY': import.meta.env.VITE_COIN_STATS_API_KEY,
    },
  };
  
  axios
    .request(options)
    .then(function (response) {
      setListofCoins(response.data.result);
    })
    .catch(function (error) {
      console.error(error);
    });
},[])


  const filteredCoins = listofCoins.filter((result) => {
    return result.name.toLowerCase().includes(searchWord.toLowerCase());
  })


  return (
    <div className='App bg-zinc-900 h-full w-full h-screen  justify-center '>
      <div className='cryptoHeader  w-full flex justify-center items-center h-52'>
        <input type='text' placeholder='Search' className=' w-4/5 sm:w-1/2 bg-slate-700 py-3 rounded-xl px-2 text-gray-200' 
        onChange={(event) => {
          setSearchWord(event.target.value)
        }}/>
      </div>
      <div className='cryptoDisplay flex justify-center flex-wrap gap-12 bg-zinc-900 py-4'>{filteredCoins.map((result)=>{
        return <Coin name={result.name} icon={result.icon} price={result.price} symbol={result.symbol} websiteurl={result.websiteUrl}/>
      })}
      </div>

      <div className='bg-zinc-900 flex justify-center text-gray-400 pt-10 pb-2'>Developed By &nbsp;|<a href="https://adil0710.github.io/" target="_blank" rel="noopener noreferrer" className='font-bold text-gray-300'>&nbsp;&nbsp;Adil Patel</a></div>
    </div>
  )
}

export default App
