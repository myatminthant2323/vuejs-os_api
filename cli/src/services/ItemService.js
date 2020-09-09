import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://myatminthant.000webhostapp.com/api/',
  // baseURL: 'http://osapi.thetpainghtut.com/api/v1',
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default{
  // index (Exercise)
  getItems(){
    return apiClient.get('/items')
  },

  // detail (Detail)
  getItem(id){
    return apiClient.get('/items/'+id)
  },

  getOrders(){
    return apiClient.get('/orders')
  },

  // Insert in Order Table
  
  createOrder(data){
    return apiClient.post('/orders',data)
  }
}