import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.BASE_URL
})
instance.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.TOKEN;

export default instance;