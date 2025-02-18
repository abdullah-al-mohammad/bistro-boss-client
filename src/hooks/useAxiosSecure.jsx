import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000'
})
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut, loading } = useAuth()
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
  axiosSecure.interceptors.response.use(function (response) {
    return response
  }, (err) => {
    const status = err.response.status
<<<<<<< HEAD
    console.log(status);

    if (status === 401 || status === 403) {
=======
    
    if(!loading && status === 401 || status === 403){
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
      logOut()
      navigate('/login')
    }

    return Promise.reject(err)
  })
  return axiosSecure
};

export default useAxiosSecure;