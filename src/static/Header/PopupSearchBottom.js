import React from 'react'
import { Icon } from '../../icons/icons';

const PopupSearchBottom = ({ searchData }) => {
    console.log("alt açılır filmler", searchData);
    return (
        <div className='flex flex-col w-full max-h-96 overflow-y-auto'>
            {
                searchData?.data?.results.map((item, i) => (
                    <div className='flex items-center px-8 py-3 gap-3 bg-white border-b border-gray-300' key={i}>
                        <Icon size={28} name="search" />
                        <span className='text-black text-base font-normal text-opacity-60'>{item?.name || item?.original_name || item?.original_title || item?.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default PopupSearchBottom
