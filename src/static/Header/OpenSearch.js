
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import useFetch from '../../hooks/useFetch';
import { Icon } from '../../icons/icons';
import { searchApi } from '../../utils/api';
import PopupSearchBottom from './PopupSearchBottom';

const OpenSearch = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const navigate = useNavigate();
    const inputDebounce = useDebounce(query, 2000);

    // const { data: searchData } = useFetch(`/search/multi?query=${query}&page=${page}`);
    // const { data: searchData } = searchApi(inputDebounce, page);

    const { data: searchData } = useFetch(`/search/multi?query=${inputDebounce}&page=${page}`);

    console.log("arama", searchData);

    const HandleKeyword = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    }

    useEffect(() => {
        if (searchData?.data?.results) {
            setTotalCount(searchData?.data?.results.reduce((total, item) => total + item.length, 0))
        }
    }, [searchData])

    console.log(totalCount, "sayısı");

    return (
        <div>
            <div className='flex flex-col items-start'>
                <div className='flex items-center gap-3 px-8 w-full h-12  bg-white'>
                    <Icon size={28} name="search" />
                    <input
                        type="text"
                        className='text-xl text-black w-full  outline-none border-0'
                        placeholder="Film veya dizi arayın...."
                        onKeyUp={HandleKeyword}
                        onChange={handleSearchChange}
                    />
                </div>
                {totalCount == 0 && <div className='flex items-center px-8 py-3 gap-3 bg-white border-b border-t w-full border-gray-300 text-black text-base font-normal text-opacity-60'>Arama kriteri giriniz</div>}
                {query.length > 3 && <PopupSearchBottom searchData={searchData} />}
            </div>
        </div>
    )
}

export default OpenSearch
