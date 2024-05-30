import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import CircleRating from '../home/circleRating/CircleRating';
import './progressbar.css';
import VideoPlayer from './VideoPlayer';

const DetailTopBanner = ({ data }) => {
    const { mediaType, id } = useParams();
    const { data: video } = useFetch(`/${mediaType}/${id}/videos`);
    console.log(`video`, video);
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
                    <VideoPlayer video={video?.data?.results[0]?.key} />
                </div>
            </div>
        </div>
    )
}

export default DetailTopBanner
