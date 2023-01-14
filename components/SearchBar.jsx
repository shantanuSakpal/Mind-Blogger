import React from 'react'
function handleOnSearch(value) {
    console.log("searching");
}

export default function SearchBar() {
    return (
        <div className='bg-logo-color-100 rounded-lg flex items-center mr-5'>
            <img className=' mx-2 p-1' src="/images/search.svg" alt="search-logo" width={30} height={30} />
            <input
                className='outline-none px-2  bg-logo-color-100 w-40 '
                type="text"
                onChange={(e) => { handleOnSearch(e.target.value) }}
                placeholder="Search here..." />
        </div>
    )
}
