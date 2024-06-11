import React from 'react'

const TopCast = ({ cast }) => {

    return (
        <div className='flex flex-col mb-12'>
            <span className='text-3xl font-medium text-white mb-5'>En İyi Oyuncular</span>
            <div className='flex items-center justify-between flex-nowrap overflow-x-auto gap-6 pb-6 scrollbar-thumb-gray-700'>
                {cast?.map((c, i) => {
                    return (
                        <div
                            key={i}
                            className='flex flex-col items-center justify-center whitespace-nowrap flex-shrink-0'>
                            <img src={`https://image.tmdb.org/t/p/original/${c?.profile_path}`} width={208} height={208} className='w-52 h-52 object-cover mb-3 rounded-full' alt={c?.name} />
                            <span className='text-lg font-medium text-white'>{c?.name}</span>
                            <span className='text-base text-opacity-50 italic font-medium text-white'>{c?.character}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopCast
