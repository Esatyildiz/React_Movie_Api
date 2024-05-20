import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { fetchDataApi } from '../../../utils/api';
// import { popularFetchApi } from '../../../utils/api';
import PopularCarouse from './PopularCarouse';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Popular = () => {


    const [tabs, setTab] = useState([
        { id: 1, title: "Filmler", data: false, url: "/movie/popular" },
        { id: 2, title: "Tv Programları", data: false, url: "/tv/popular" }
    ]);
    // const [movies, setMovies] = useState([]);
    // const [moviesDay, setMoviesDay] = useState([]);

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            let activeTabItem = tabs[activeTab];
            if (!activeTabItem.data) {
                await fetchDataApi(activeTabItem.url)
                    .then((res) => {
                        let oldTabs = tabs;
                        oldTabs[activeTab].data = res.data
                        setTab([...oldTabs]);
                    }).catch((err) => {
                        // setError("Bir şeyler yanlış gitti!");
                        // setIsloading(false);
                    })
            }
        };
        fetchData();
    }, [activeTab, tabs]);




    const tabClasses = (index) =>
        classNames(
            'h-full flex items-center justify-center w-[100px] rounded-[15px]  text-sm relative z-10 cursor-pointer ease-out duration-200',
            activeTab === index ? "text-white" : "text-[#04152d]"
        );

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <div className='container mb-12'>
            <div className='flex justify-between mb-5'>
                <span className='text-white text-2xl font-normal'>Popüler Olanlar</span>
                <div className="h-[34px] bg-white rounded-[20px] p-[2px]">
                    <div className="flex items-center h-[30px] relative">
                        {tabs.map((tab, index) => <button
                            key={tab.id}
                            className={tabClasses(index)}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.title}
                        </button>)}


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
                <div>
                    <PopularCarouse isLoading={false} data={tabs[activeTab].data?.results} />
                </div>
            </div>
        </div>
    );
};

export default Popular;