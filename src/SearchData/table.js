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
  
  
  
  /*this.setState({tablex:[
    {
      key: '1',
      country: 'Afghanistan',
      cases: 32123,
      deaths: '34',
    },
    {
      key: '2',
      country: 'Albania',
      cases: 4211,
      deaths: '34',
    },{
      key: '3',
      country: 'Algeria',
      cases: 32331,
      deaths: '232',
    },
    {
      key: '4',
      country: 'Andorra',
      cases: 1252,
      deaths: '23',
    },
    {
      key: '5',
      country: 'Angola',
      cases: 6553,
      deaths: '44',
    },
    {
      key: '6',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '7',
      country: 'Central African Republic',
      cases: 5122,
      deaths: '123',
    },
    {
      key: '8',
      country: 'Chile',
      cases: 9922,
      deaths: '775',
    },
    {
      key: '9',
      country: 'Denmark',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '10',
      country: 'Ethiopia',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '11',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '12',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '13',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '14',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '15',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    {
      key: '16',
      country: 'Bahamas',
      cases: 31222,
      deaths: '423',
    },
    
  ]});*/



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

