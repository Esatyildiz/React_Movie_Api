import React from 'react';
import Search from './Search';

const HeroBannerContent = () => {
    return (
        <div className='flex flex-col items-center text-white text-center relative max-w-[800px] mx-auto z-10'>
            <span className='text-8xl font-bold'>Welcome.</span>
            <span className='text-2xl font-medium mb-10'>Millions of movies, TV shows and people to discover. Explore now.</span>
            <Search />
        </div>
    );
};

export default HeroBannerContent;