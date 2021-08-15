import React, { useState } from 'react';
import Card from './Card';
import {  FrownOutlined, SmileOutlined, ReconciliationOutlined,FileExclamationOutlined  } from '@ant-design/icons';



const CardList = () => {
   
    const [data, setData] = useState([]);
  
   
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  
//console.log(data.deaths);
  var data2 = [
      {
          key:1,
          icon:<FrownOutlined style={{fontSize:40}} />,
          title:'Deaths',
          value: data.deaths,
          value2:data.cases,
          color:'red',
          progressText:'Deaths/Total Cases',
        },
      {
        key:2,
        icon:<SmileOutlined style={{fontSize:40}} />,
        title:'Recovered',
        value:data.recovered,
        value2:data.cases,
        color:'blue',
        progressText:'Recovered/Total Cases',
      },
    {
        key:3,
        icon:<ReconciliationOutlined style={{fontSize:40}} />,
        title:'Cases',
        value:data.cases,
        value2:data.population,
        color:'yellow',
        progressText:'Cases/Population',
      },
    {
        key:4,
        icon:<FileExclamationOutlined style={{fontSize:40}} />,
        title:'Active',
        value:data.active,
        value2:data.cases,
        color:'green',
        progressText:'Active Cases/Total Cases',
      },
  ];  

  const cardComponent = data2.map((user,i)=>{
    return(<Card 
        key={data2[i].key} 
        icon={data2[i].icon} 
        title={data2[i].title} 
        value={data2[i].value}
        value2={data2[i].value2}
        color={data2[i].color}
        progressText={data2[i].progressText}
        />);
});
    return(
        <div>
          
         {cardComponent}
      </div>
    );
}
export default CardList;