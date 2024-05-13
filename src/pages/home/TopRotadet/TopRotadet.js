import React, { useEffect, useState } from 'react';
import { topRotatedFetchApi } from '../../../utils/api';
import TopRotadetCarousel from './TopRotadetCarousel';

function classNames(...classes) {
    return classes.filter(Boolean).join('')
}

const TopRotadet = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [topMoviesDay, setTopMoviesDay] = useState([]);
    const [activeTopTab, setActiveTopTab] = useState(0);
    const [clickDay, setClickDay] = useState(false);
    const [clickWeek, setClickWeek] = useState(false);


    useEffect(() => {
        const fetcRotadedApi = async () => {
            try {
                if (activeTopTab === 0 && !clickDay) {
                    const result = await topRotatedFetchApi("day");
                    setTopMoviesDay(result);
                    setClickDay(true);
                } else if (activeTopTab === 1 && !clickWeek) {
                    const result = await topRotatedFetchApi("week");
                    setTopMovies(result);
                    setClickWeek(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetcRotadedApi();
    }, [activeTopTab, clickDay, clickWeek]);

    const tabClasses = (index) =>
        classNames(
            'h-full flex items-center justify-center w-[100px] rounded-[15px]  text-sm relative z-10 cursor-pointer ease-out duration-200',
            activeTopTab === index ? "text-white" : "text-[#04152d]"
        );

    const panelClasses = classNames(
        '',
        ''
    );

    const handleTabClick = (index) => {
        setActiveTopTab(index);
    }

    return (
        <div className='container'>
            <div className='flex justify-between'>
                <span className='text-white text-2xl font-normal'>En Çok Oy Alan</span>
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
                                'h-[30px] w-[100px] rounded-[15px] absolute left-0 transition-all duration-100  bg-tabGradient cubic-bezier',
                                activeTopTab === 0 ? '' : 'left-[100px]'
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={activeTopTab === 0 ? panelClasses : 'hidden'}>
                    <TopRotadetCarousel topMovies={topMoviesDay} />
                </div>
                <div className={activeTopTab === 1 ? panelClasses : 'hidden'}>
                    <TopRotadetCarousel topMovies={topMovies} />
                </div>
            </div>
        </div>
    );
};

export default TopRotadet;