import React from 'react';
import Cases from './casesvdeaths';
import CardList from './CardList';
const Charts = () =>{
    return(
        <div
        className="ac-content">
            
            <CardList />
            <Cases/>

        </div>
    );
}

export default Charts;