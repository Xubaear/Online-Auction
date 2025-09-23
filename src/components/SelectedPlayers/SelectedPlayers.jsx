import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayers,removePlayer}) => {
    
    return (
        <div className='max-w-[1200px] mx-auto'>

{
    selectedPlayers.map(player=><SelectedCard removePlayer={removePlayer} key={player.id} player={player}></SelectedCard>)
}

        </div>
    );
};

export default SelectedPlayers;