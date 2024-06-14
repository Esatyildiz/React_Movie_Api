import React, { useEffect, useState } from 'react';
import Img from '../../../components/LazyLoadImage/Img';
import { fetchUpcoming } from '../../../utils/api';
import HeroBannerContent from './HeroBannerContent';

const Banner = () => {
    const [path, setPath] = useState([]);
    const [randomImdex, setRandomIndex] = useState(0);
    const urlPath = "https://www.themoviedb.org/t/p/w1920_and_h1080_face";


    useEffect(() => {
        const fetchPath = async () => {
            try {
                const result = await fetchUpcoming();
                setPath(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPath();
    }, []);

    const handleRandomImage = () => {
        const newIndex = Math.floor(Math.random() * path.length);
        setRandomIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(handleRandomImage, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [path])

    return (
        <div className='h-[700px] w-full bg-blackvar flex items-center relative'>
            <div className='container'>
                <HeroBannerContent />
            </div>
            <div className='absolute w-full h-full top-0 left-0 opacity-50 overflow-hidden'>
                <div className='blur-0 w-full h-full'>
                    {path.length > 0 &&
                        <Img className="w-full h-full object-cover" alt="" src={`${urlPath}${path[randomImdex]?.backdrop_path}`} />
                    }
                </div>
                <div className='bg-gradiend-filter w-full h-64 absolute bottom-0 left-0'></div>
            </div>
        </div>
    );
};

export default Banner;