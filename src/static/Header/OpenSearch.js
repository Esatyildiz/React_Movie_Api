
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Icon } from '../../icons/icons';
import PopupSearchBottom from './PopupSearchBottom';

const OpenSearch = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const { data: searchData } = useFetch(`/search/multi?query=${query}&page=${page}`);
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

    return (
        <div>
            <div className='flex flex-col items-start'>
                <div className='flex items-center gap-3 px-8 w-full h-16  bg-white'>
                    <Icon size={28} name="search" />
                    <input
                        type="text"
                        className='text-xl text-black w-full  outline-none border-0'
                        placeholder="Film veya dizi arayın...."
                        onKeyUp={HandleKeyword}
                        onChange={handleSearchChange}
                    />
                </div>
                {query.length > 0 && <PopupSearchBottom searchData={searchData} />}
            </div>
        </div>
    )
}

export default OpenSearch
