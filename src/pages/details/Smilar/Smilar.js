import React from 'react'
import useFetch from '../../../hooks/useFetch';
import Carousel from './Carousel'


const Smilar = ({ mediaType, id }) => {
    const { data: smilar, isLoading } = useFetch(`/${mediaType}/${id}/similar`);
    console.log("Benzer filmler", smilar);
    return (
        <div>
            <span className='text-3xl font-medium block text-white mb-5'>Benzer Filmler</span>
            <Carousel isLoading={false} data={smilar?.data?.results} />
        </div>
    )
}

export default Smilar
