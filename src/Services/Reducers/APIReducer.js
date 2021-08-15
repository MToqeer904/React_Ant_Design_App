const asyncFetch = () => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

const apiReducer = (state = [], action) =>{
    switch(action.type){
        case 'SET':
            return(asyncFetch());
        default:
            return state;   
    }
}

export default apiReducer;