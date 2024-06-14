import React from 'react'
import Img from '../../components/LazyLoadImage/Img'

const BackdropImage = ({ dataImage }) => {
    return (
        <div className='absolute w-full h-full top-0 left-0 overflow-hidden opacity-10'>
            <Img src={`https://image.tmdb.org/t/p/original/${dataImage}`} alt="backdrop" className='w-full h-full object-cover object-center' />
        </div>
    )
}

export default BackdropImage
