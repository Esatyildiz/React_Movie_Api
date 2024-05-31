import React from 'react'

const MovieInfoDetail = ({ title, value }) => {
    return (
        <div className='flex items-center gap-2'>
            <span className='font-medium text-white'>{title}</span>
            <span className='font-medium text-white text-opacity-50'>{value}</span>
        </div>
    )
}

export default MovieInfoDetail
