import axios from 'axios'
import { ordersMockData } from './mock/orders'

const instance = axios.create({
  baseURL: 'https://someGeniusBackend.com/',
})

export const getOrders = async () => {
  try {
    const res = await instance.get('orders')

    return res.data
  } catch(e) {
    return ordersMockData
  }
}

export const createOrder = async (newData) => {
  try {
    const res = await instance.post('orders')

    return res.data
  } catch(e) {
    ordersMockData.push(newData)
    return ordersMockData
  }
}