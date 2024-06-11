import React, { useState } from 'react'
import { Icon } from '../../icons/icons'
import OpenSearch from './OpenSearch';

const Search = () => {
    const [OpenSearchBox, setOpenSearchBox] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpenSearchBox(!OpenSearchBox)}
                type='button'
                className='h-16 flex items-center mx-4 relative font-medium cursor-pointer text-white'>
                {OpenSearchBox ? <Icon name="close" /> : <Icon name="search" />}
            </button>
            <div className={`${OpenSearchBox ? ' translate-y-0 opacity-100' : ' -translate-y-[200%] opacity-0'} absolute w-full transition-all top-16 left-0`}>
                <OpenSearch />
            </div>
        </div>
    )
}

export default Search
