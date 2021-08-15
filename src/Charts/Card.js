import React from 'react';
import './charts.css';
import { Card, Progress } from 'antd';
import NumberFormat from 'react-number-format';


const Cards = ({ icon, title, value, value2, color, progressText}) => {
  return(
    <div className="site-card-wrapper display-card" style={{marginLeft:5,marginRight:5,}}>
    <Card title={title} size='small' extra={icon} style={{ width: 300 }}>
      <h2><NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> </h2>
      <div >
         
    <Progress 
      percent={Number(value/value2 *100).toFixed(0)}
      size="small"
      strokeColor={color}
      status="active"
      />
    <p>{progressText}</p>
  </div>
      </Card>
    
  </div>
  );
}
export default Cards;