const BASE_URL = 'http://data.fixer.io/api/latest';
const API_KEY = '1310d83b485330647e6e59ad7f9ef94d';


fetchData = (base, value) => {
  return fetch(`${BASE_URL}?access_key=${API_KEY}&base=${base}&symbols=${value}`)
}
  
 export default fetchData;