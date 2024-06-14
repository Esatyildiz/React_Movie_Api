import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../../icons/icons';

const PopupSearchBottom = ({ searchData }) => {
    console.log("alt açılır filmler", searchData);
    return (
        <div className='flex flex-col w-full max-h-96 overflow-y-auto overscroll-y-contain'>
            {
                searchData?.data?.results.map((item, i) => (
                    <Link preventScrollReset={true} key={i} to={`/movie/${item.id}`}>
                        <div className='flex items-center px-8 py-2 gap-3 bg-white border-b border-gray-300'>
                            <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.poster_path || item?.profile_path}`} className='w-11 h-11 rounded-lg object-cover object-center' width={40} height={40} alt="image" />
                            <span className='text-black text-base font-normal text-opacity-60'>{item?.name || item?.original_name || item?.original_title || item?.title}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default PopupSearchBottom
