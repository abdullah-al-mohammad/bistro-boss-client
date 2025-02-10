import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const { googleSignIn } = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/')

          })

      })
      .catch(error => console.error()
      )
  }
  return (
    <div>
      <div className="divider"></div>
      <div className="p-8">
        <button onClick={handleGoogleLogin} className="btn text-orange-400 rounded-full">
          <FaGoogle className='mr-2'></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;