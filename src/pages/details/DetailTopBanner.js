import React from 'react'
import CircleRating from '../home/circleRating/CircleRating';
import './progressbar.css';

const DetailTopBanner = ({ data }) => {
    console.log(data);

    let apiDate = new Date(data?.first_air_date || data?.release_date);

    const date = `${apiDate.getFullYear()}`;


    return (
        <div className='flex items-start gap-9'>
            <div className='flex-shrink-0 rounded-lg overflow-hidden'>
                <img
                    src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                    className="h-[525px] object-cover object-center"
                    alt="image"
                    height="525"
                    width="350"
                />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-4'>
                    <span className='text-3xl font-medium text-white'>{data?.original_name || data?.original_title}</span>
                    <span className='text-3xl font-normal text-white text-opacity-40'>({date})</span>
                </div>
                <span className='text-lg font-normal italic text-white text-opacity-75'>{data?.tagline}</span>
                <div className='flex items-center gap-3 mb-2'>
                    {data?.genres?.map((g, i) => {
                        return <span key={i} className='bg-[#da2f68] py-0.5 px-1 rounded text-xs text-white'>{g?.name}</span>
                    })}
                </div>
                <div className='flex items-center gap-7'>
                    <CircleRating rating={data?.vote_average.toFixed(1)} styles="!static" />
                    <button type='button' className='flex items-center gap-3'>
                        <img src='/img/icons/play.svg' className='w-20 h-20 object-contain' width={80} height={80} alt={data?.title} />
                        <span className='text-xl font-medium text-white'>Fragmanı İzle</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailTopBanner
