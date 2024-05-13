import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
// import { popularFetchApi } from '../../../utils/api';
import PopularCarouse from './PopularCarouse';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Popular = () => {
    // const [movies, setMovies] = useState([]);
    // const [moviesDay, setMoviesDay] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [clickTv, setClickTv] = useState(false);
    const [clickMovie, setClickMovie] = useState(false);

    const [popularData, setPopularData] = useState("movie");
    const { data, isLoading } = useFetch(`/${popularData}/popular`);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (activeTab === 0 && !clickMovie) {
                    setPopularData("movie")
                    setClickMovie(true);
                    setClickTv(false);
                } else if (activeTab === 1 && !clickTv) {
                    setPopularData("tv")
                    setClickTv(true);
                    setClickMovie(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [activeTab, clickTv, clickMovie]);


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
        setTimeout(() => {
            setActiveTab(index);
        }, 250)
    };

    return (
        <div className='container mb-12'>
            <div className='flex justify-between mb-5'>
                <span className='text-white text-2xl font-normal'>Popüler Olanlar</span>
                <div className="h-[34px] bg-white rounded-[20px] p-[2px]">
                    <div className="flex items-center h-[30px] relative">
                        <button
                            className={tabClasses(0)}
                            onClick={() => handleTabClick(0)}
                        >
                            Filmler
                        </button>
                        <button
                            className={tabClasses(1)}
                            onClick={() => handleTabClick(1)}
                        >
                            Tv Programları
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
                    <PopularCarouse isLoading={isLoading} data={data?.data?.results} />
                </div>
                <div className={activeTab === 1 ? panelClasses : 'hidden'}>
                    <PopularCarouse isLoading={isLoading} data={data?.data?.results} />
                </div>
            </div>
        </div>
    );
};

export default Popular;