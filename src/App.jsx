import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/DoubleDollar.png'


import Availableplayers from './components/AvailablePlayers/Availableplayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'


const fetchPlayers= async()=>
fetch('/players.json')
.then(res=> res.json())

function App() {
  
const playersPromise= fetchPlayers()
  return (
    <>
 <div className="navbar max-w-[1200px] mx-auto">
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

<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Availableplayers playersPromise={playersPromise}></Availableplayers>
</Suspense>


{/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
