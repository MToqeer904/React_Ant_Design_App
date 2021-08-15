import React from 'react';

const SorthBox = ({sortChange}) => {

    return(
        <div 
            style={{margin:10}}
        >
            <select  onChange={sortChange}>
            <option value="country">Country</option>
            <option value="cases">Cases</option>
            <option value="deaths">Deaths</option>
          </select>
        
        </div>
    );
}

export default SorthBox;