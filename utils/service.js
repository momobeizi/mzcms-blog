import axios from 'axios'
const service = axios.create({
  headers: {
    'Content-Type': 'application/json', // 默认请求头
    'requestType': 'blog'
  },
})
service.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    // ...
  }
)