import React from 'react';

const SearchBox = ({searchChange}) => {

    return(
        <div 
            style={{margin:10}}
        >
        <input 
            type="search" 
            placeholder='Search table'
            className='pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;