import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000'
})
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut } = useAuth()
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interseptor', token);
    config.headers.authorization = `Bearer ${token}`
    return config
  }, function (err) {
    return Promise.reject(err)
  })

  // interceptor 401 and 403 status
  axiosSecure.interceptors.response.use(function (respons) {
    return respons
  }, (err) => {
    const status = err.response.status
    console.log(status);
    
    if(status === 401 || status === 403){
      logOut()
      navigate('/login')
    }

    return Promise.reject(err)
  })
  return axiosSecure
};

export default useAxiosSecure;