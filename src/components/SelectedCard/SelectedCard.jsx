import React from 'react';

const SelectedCard = ({player}) => {
    console.log(player)
    return (
        <div className='max-w-[1200px] mx-auto border-1 border-gray-300 p-3 flex justify-between items-center rounded-xl mt-3'>
<div className='flex items-center'>
   <img className='h-[50px] w-[50px] rounded-xl object-cover' src={player.image} alt="" />
   <div className='ml-4'>
    <h1>{player.name}</h1>
    <p className='text-xs'>{player.role}r</p>
   </div>
</div>
<div>
    <img src="https://i.ibb.co.com/QFjSZbSx/Vector.png" alt="" />
</div>
</div>
    );
};

export default SelectedCard;