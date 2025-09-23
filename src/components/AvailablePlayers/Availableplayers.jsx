import React, { use, useState } from 'react';
import userImg from '../../assets/Group.png'
import flagImg from '../../assets/report-1.png'
import { toast } from 'react-toastify';
 

const Availableplayers = ({playersPromise, availableBalance ,setAvailableBalance, selectedPlayers,setSelectedPlayers}) => {
    const playerData = use(playersPromise)
    
const [isSelected, setIsSelected]= useState({})

    return (
        <div className='max-w-[1200px]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
          
{
    playerData.map(player=><div selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setAvailableBalance={setAvailableBalance} className="card   shadow-sm p-4">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={player.image}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
   <div className='flex '>
    <img src={userImg} alt="" /> <h2 className="card-title ml-2">{player.name}</h2>
   </div>


<div className='flex justify-between mt-4 border-b-1 border-r-gray-200 pb-2' >
   <div className='flex items-center '>
     <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
    <span className='ml-3 mb-2'>{player.country}</span>
   </div>

    <button className='btn'>{player.role}</button>
</div>


<div className='flex justify-between font-bold mt-4'>
    <span>Rating</span>
    <span>{player.rating}</span>
</div>

<div className='flex justify-between mt-3'>
    <span className='font-bold'>{player.batting_style}</span>
    <span>{player.bowling_style}</span>
</div>


    <div className="card-actions mt-4 flex justify-between items-center">
        <p>Price: {player.price} </p>
      <button   disabled={isSelected[player.id]}
                  onClick={() => 
                  {
                    const playerPrice =parseInt(player.price.split("$").join(""))
                    
                    if(availableBalance< playerPrice){
                        toast('Insuficiant Coins!')
                        return
                    }
                    if(selectedPlayers.length===6){
                      toast('6 players already selected!')
                      return
                    }

                    setIsSelected(players => ({ ...players, [player.id]: true }))
                    setAvailableBalance(availableBalance => availableBalance - playerPrice)
                    setSelectedPlayers([...selectedPlayers, player])
                  }
                  } className="btn ">{isSelected[player.id] ? "Selected" : "Choose Player"}</button>
    </div>
  </div>
</div>)
}






        </div>
    );
};

export default Availableplayers;