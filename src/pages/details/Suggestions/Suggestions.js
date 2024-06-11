import React from 'react'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../Carousel/Carousel';

const Suggestions = ({ mediaType, id }) => {
    const { data: suggations, isLoading } = useFetch(`/${mediaType}/${id}/recommendations`);
    console.log(suggations?.data?.results);
    return (
        <div>
            <span className='text-3xl font-medium block text-white mb-5'>Öneriler</span>
            <Carousel isLoading={false} data={suggations?.data?.results} />
        </div>
    )
}

export default Suggestions
