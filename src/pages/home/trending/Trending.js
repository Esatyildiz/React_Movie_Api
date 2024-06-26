import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../../utils/api';
import TrendCarousel from './TrendCarousel';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Trending = () => {

    const [movieTrend, setmovieTrend] = useState([]);
    const [movieTrendDay, setmovieTrendDay] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [clickDay, setClickDay] = useState(false);
    const [clickWeek, setClickWeek] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (activeTab === 0 && !clickDay) {
                    const result = await fetchDataFromApi("day");
                    setmovieTrendDay(result);
                    setClickDay(true);
                } else if (activeTab === 1 && !clickWeek) {
                    const result = await fetchDataFromApi("week");
                    setmovieTrend(result);
                    setClickWeek(true);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [activeTab, clickDay, clickWeek]);



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
        <div className='container mb-28'>
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
                                'h-[30px] w-[100px] rounded-[15px] absolute left-0 transition-all duration-100  bg-tabGradient cubic-bezier',
                                activeTab === 0 ? '' : 'left-[100px]'
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className={activeTab === 0 ? panelClasses : 'hidden'}>
                    <TrendCarousel movies={movieTrendDay} />
                </div>
                <div className={activeTab === 1 ? panelClasses : 'hidden'}>
                    <TrendCarousel movies={movieTrend} />
                </div>
            </div>
        </div>
    );
};

export default Trending;