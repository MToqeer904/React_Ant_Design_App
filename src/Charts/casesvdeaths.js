import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  var data2 = [
    {
        type: Object.keys(data)[2],
        value: Object.values(data)[2]
    },
    {
        
        type: Object.keys(data)[4],
        value: Object.values(data)[4]
    },
    {
        
      type: Object.keys(data)[6],
      value: Object.values(data)[6]
  },
];
var config = {
    appendPadding: 10,
    data: data2,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return (
  <div 
  style={{margin:60}}>
    <hr></hr>
    <h4>Todays Cases around the World</h4>
    <Pie
  style={{width:500, alignContent:'center', margin:'auto'}}
 
  {...config} />
  </div>);
};

export default DemoPie;