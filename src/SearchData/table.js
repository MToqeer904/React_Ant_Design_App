import { Table} from 'antd';
import { Component } from 'react';
import Search from './Search';
import Sort from './Sort';



class table extends Component {
    
  constructor(){
    super();
    this.state = {
        'tablex':[],
        'searchfield':'',
        
    }
}

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value});
   
}

onSortChange = (event) => {
  this.setState({searchfield: event.target.value});
  console.log(event.target.value);
}

componentDidMount(){

  //console.log(countries);  
  
  fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1')
  .then(response => response.json())
  .then(countries => this.setState({tablex: countries}));


}




  render(){
      const filtereddata = this.state.tablex.filter(tablex =>{
      return tablex.country.toLowerCase().includes(this.state.searchfield.toLowerCase())
        
  }); 
  
  //console.log(filtereddata);   
  
  filtereddata.forEach(filtereddata => {
    filtereddata.timeline = Object.values(filtereddata.timeline);
    console.log(filtereddata);
    });
    
  return(
    
      <div className="ac-content"> 
      <Search  searchChange={this.onSearchChange} />
      <Sort sortChange={this.onSortChange} />
        <Table
      dataSource={filtereddata}
      columns={[
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: 'Cases',
          dataIndex: 'timeline',
          key: 'cases',
        },
      ]}
      />
      </div>
  );


  }
}
export default table;

