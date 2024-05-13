import React from 'react'
import { useSelector } from 'react-redux'

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home)

    return (
        <div className='flex flex-col items-end absolute z-10 bottom-3 right-3 text-white gap-y-2'>
            {data?.map((g, i) => {
                return (
                    <div className='bg-[#da2f68] py-0.5 px-1 rounded text-xs' key={i}>
                        {genres[g]?.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres
