import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayers}) => {
    
    return (
        <div className='max-w-[1200px] mx-auto'>

{
    selectedPlayers.map(player=><SelectedCard key={player.id} player={player}></SelectedCard>)
}

        </div>
    );
};

export default SelectedPlayers;