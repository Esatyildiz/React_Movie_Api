import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../../utils/api';
import TrendCarousel from './TrendCarousel';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Trending = () => {

    const [movies, setMovies] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchDataFromApi(activeTab === 0 ? 'day' : 'week');
                setMovies(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [activeTab]);
    console.log({ movies });


    const tabClasses = (index) =>
        classNames(
            'h-full flex items-center justify-center w-[100px] rounded-[15px]  text-sm relative z-10 cursor-pointer ease-out duration-200',
            activeTab === index ? "text-white" : "text-[#04152d]"
        );

    const panelClasses = classNames(
        '',
        ''
    );
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='container'>
            <div className='flex justify-between mb-5'>
                <span className='text-white text-2xl font-normal'>Trend</span>
                <div className="h-[34px] bg-white rounded-[20px] p-[2px]">
                    <div className="flex items-center h-[30px] relative">
                        <button
                            className={tabClasses(0)}
                            onClick={() => handleTabClick(0)}
                        >
                            Day
                        </button>
                        <button
                            className={tabClasses(1)}
                            onClick={() => handleTabClick(1)}
                        >
                            Week
                        </button>
                        <div
                            className={classNames(
                                'h-[30px] w-[100px] rounded-[15px] absolute left-0 transition-all duration-100 delay-200 bg-tabGradient cubic-bezier',
                                activeTab === 0 ? '' : 'left-[100px]'
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className={activeTab === 0 ? panelClasses : 'hidden'}>
                    <TrendCarousel movies={movies} />
                </div>
                <div className={activeTab === 1 ? panelClasses : 'hidden'}>

                </div>
            </div>
        </div>
    );
};

export default Trending;