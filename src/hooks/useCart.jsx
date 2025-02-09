import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const axiosSecure = useAxiosSecure()
const useCart = () => {
  const { data: cart=[] } = useQuery({
    queryKey: ['cart'],
    queryFn: async ()=>{
        const res = await axiosSecure.get('/carts')
        return res.data
    }
  })
  return [cart]
}

export default useCart

