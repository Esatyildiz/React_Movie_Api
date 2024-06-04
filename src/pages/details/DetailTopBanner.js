import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import CircleRating from '../home/circleRating/CircleRating';
import MovieInfoDetail from './MovieInfoDetail';
import './progressbar.css';
import VideoPlayer from './VideoPlayer';

const DetailTopBanner = ({ data, detail }) => {
    const { mediaType, id } = useParams();
    const { data: video } = useFetch(`/${mediaType}/${id}/videos`);
    const apiDate = new Date(data?.first_air_date || data?.release_date);
    const releaseDate = new Date(data?.release_date || data?.first_air_date);
    const run_time = (Math.trunc(data?.runtime / 60)) + " Saat " + (data?.runtime % 60) + " Dakika";


    const date = `${apiDate.getFullYear()}`;
    const date2 = `${releaseDate.getMonth() + 1}.${releaseDate.getDate() + 1}.${releaseDate.getFullYear()}`

    const director = detail?.crew?.filter((d) => d?.job === "Director");
    const writter = detail?.crew?.filter((w) => w?.job === "Writter" || w?.job === "Screenplay" || w?.job === "Story");
    const comma = writter?.map((w) => w?.name).join(",");


    console.log(data);
    console.log(`detail`, detail);

    return (
        <div className='flex items-start gap-9 mb-11'>
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
                <div className='flex flex-col gap-2 mb-6'>
                    <span className='text-2xl  text-white'>Genel Açıklama</span>
                    <span className='text-lg font-normal text-white italic text-opacity-70'>{data?.overview}</span>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-7 py-4 border-b border-[#ffffff1a]'>
                        <MovieInfoDetail
                            title="Durum :"
                            value={data?.status}
                        />
                        <MovieInfoDetail
                            title="Yayın tarihi :"
                            value={date2}
                        />
                        <MovieInfoDetail
                            title="Çalışma Süresi :"
                            value={run_time}
                        />
                    </div>
                    <div className='flex items-center gap-7 py-4 border-b border-[#ffffff1a]'>
                        {director?.map((d, i) => {
                            return (
                                <MovieInfoDetail
                                    key={i}
                                    title="Müdür :"
                                    value={d?.name || d?.original_name}
                                />
                            )
                        })}
                    </div>
                    <div className='flex items-center gap-7 py-4 border-b border-[#ffffff1a]'>
                        {comma && (
                            <MovieInfoDetail
                                title="Yazar :"
                                value={comma}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTopBanner
