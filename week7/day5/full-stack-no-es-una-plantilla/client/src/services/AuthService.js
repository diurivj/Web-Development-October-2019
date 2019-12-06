import axios from 'axios'

const baseURL = 'https://radiant-reaches-24167.herokuapp.com'

const service = axios.create({
  baseURL,
  withCredentials: true
})

const AUTH_SERVICE = {
  signup: data => {
    return service.post('/signup', data)
  },
  login: data => {
    return service.post('/login', data)
  },
  getUser: () => {
    return service.get('/profile')
  },
  logout: () => {
    return service.get('/logout')
  }
}

export default AUTH_SERVICE
