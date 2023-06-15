import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <div className='flex items-center w-full'>
                <input type="text" className='w-calc-100-minus-150 h-16 text-xl text-black px-8 bg-white rounded-l-[30px] outline-none border-0' placeholder="Search for a movie or tv show...."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='w-[150px] h-16 text-lg bg-searchGradient rounded-r-[30px] outline-none border-0'>Search</button>
            </div>
            <div>{search}</div>
        </>
    );
};

export default Search;