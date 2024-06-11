import React, { useEffect, useState } from 'react';
import { fetchDataApi } from '../../../utils/api';
import TopRotadetCarousel from './TopRotadetCarousel';

function classNames(...classes) {
    return classes.filter(Boolean).join('')
}

const TopRotadet = () => {

    const [tabs, setTabs] = useState([
        { id: 0, title: "Filmler", title2: "movie", data: false, url: "/movie/top_rated" },
        { id: 1, title: "Tv Programları", title2: "Tv", data: false, url: "/tv/top_rated" }
    ]);
    const [activeTopTab, setActiveTopTab] = useState(0);

    useEffect(() => {
        const fetchDataTopRated = async () => {
            const activeTab = tabs[activeTopTab];

            if (!activeTab?.data) {
                try {
                    const res = await fetchDataApi(activeTab.url);
                    setTabs(prevTabs => {
                        const newTabs = [...prevTabs];
                        newTabs[activeTopTab].data = res.data;
                        return newTabs;
                    });
                } catch (error) {
                    console.error("error", error);
                }
            }
        };
        fetchDataTopRated();
    }, [activeTopTab, tabs]);



    const tabClasses = (index) =>
        classNames(
            'h-full flex items-center justify-center w-[100px] rounded-[15px]  text-sm relative z-10 cursor-pointer ease-out duration-200',
            activeTopTab === index ? " text-white" : " text-[#04152d]"
        );


    const handleTabClick = (index) => {
        setActiveTopTab(index);
    }

    const endPoint = tabs[activeTopTab].title2.trim().replace(/\s+/g, '-').toLowerCase();

    return (
        <div className='container'>
            <div className='flex justify-between'>
                <span className='text-white text-2xl font-normal'>En Çok Oy Alan</span>
                <div className="h-[34px] bg-white rounded-[20px] p-[2px]">
                    <div className="flex items-center h-[30px] relative">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                className={tabClasses(index)}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.title}
                            </button>
                        ))}
                        <div
                            className={classNames(
                                'h-[30px] w-[100px] rounded-[15px] absolute left-0 transition-all duration-100  bg-tabGradient cubic-bezier',
                                activeTopTab === 0 ? '' : ' left-[100px]'
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <TopRotadetCarousel endPoint={endPoint} data={tabs[activeTopTab]?.data?.results} />

            </div>
        </div>
    );
};

export default TopRotadet;