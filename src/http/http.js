import axios from "axios";

export const publicApi = axios.create({
  baseURL: 'http://70.34.201.18:4444'
})

export const privateApi = axios.create({
  baseURL: 'http://70.34.201.18:4444',
})

export const token = {
  set(tokenValue) {
    privateApi.defaults.headers.Authorization = tokenValue
  },
  unset() {
    privateApi.defaults.headers.Authorization = null
  }
}


