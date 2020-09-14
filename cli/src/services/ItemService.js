import axios from 'axios'
const getApiClient = () => {
  let token = localStorage.getItem('token')
  const apiClient = axios.create({
  // baseURL: 'https://myatminthant.000webhostapp.com/api/',
  // baseURL: 'http://osapi.thetpainghtut.com/api/v1',
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  return apiClient
}



export default{
  // index (Exercise)
  getItems(){
    return getApiClient().get('/items')
  },

  // detail (Detail)
  getItem(id){
    return getApiClient().get('/items/'+id)
  },

  getOrders(){
  // baseURL: 'https://myatminthant.000webhostapp.com/api/',
  // baseURL: 'http://osapi.thetpainghtut.com/api/v1',
  let token = localStorage.getItem('token')
  return axios.create({
    
    baseURL: 'http://localhost:8000/api/v1',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).get('/orders')
  },
  getOrder(id){
    return getApiClient().get('/orders/'+id)
  },

  // Insert in Order Table
  createOrder(data){
    return getApiClient().post('/orders',data)
  },
  login(user){
    return axios.post('http://localhost:8000/oauth/token',user)
  },
  register(user){
    return getApiClient().post('/register',user)
  },
}