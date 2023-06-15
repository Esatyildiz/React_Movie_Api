import React from 'react';
import HeroBannerContent from './HeroBannerContent';

const Banner = () => {
    return (
        <div className='h-[700px] w-full bg-blackvar flex items-center relative'>
            <div className='container'>
                <HeroBannerContent />
            </div>
            <div className='absolute w-full h-full top-0 left-0 opacity-50 overflow-hidden'>
                <div className='blur-0 w-full h-full'>
                    <img className="w-full h-full object-cover" alt="" src="https://image.tmdb.org/t/p/original/kIX6VS5FTMURcK3WlNNkPss60e4.jpg" />
                </div>
                <div className='bg-gradiend-filter w-full h-64 absolute bottom-0 left-0'></div>
            </div>
        </div>
    );
};

export default Banner;