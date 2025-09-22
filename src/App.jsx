import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/DoubleDollar.png'


import Availableplayers from './components/AvailablePlayers/Availableplayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'


const fetchPlayers= ()=>
fetch('/players.json')
.then(res=> res.json())

function App() {
  
const[toggle , setToggle]= useState(true)



const playersPromise= fetchPlayers()
  return (
    <>
 <div className="navbar max-w-[1200px] mx-auto mt-7">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center">
   <span className='mr-2'>6000000000</span>
   <span className='mr-2'> Coin</span>
   <img src={dollarImg} alt="" />
  </div>


</div>


<div className='flex justify-between items-center max-w-[1180px] mx-auto'>
<h1 className='font-bold text-2xl'>Available Players</h1>

<div className='font-bold'>
  <button onClick={()=> setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-yellow-900": ""}`}>Available</button>
  <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false ? "bg-yellow-900" : ""}`}>Selected 
    <span> (0)</span>
  </button>
</div>
</div>

{
  toggle === true? <Suspense  fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Availableplayers playersPromise={playersPromise}></Availableplayers>
</Suspense> : <SelectedPlayers></SelectedPlayers>
}






<br /> <br />
    </>
  )
}

export default App
