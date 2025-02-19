import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useContext } from "react";
import { useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import SocialLogin from '../../assets/Components/SocialLogIn/SocialLogin';
import './login.css'
import loginimg from '../../assets/others/authentication2.png';


const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const { signIn } = useContext(AuthContext)
  const [show, setShow] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";
  // step 2 for captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user
        Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
          }
        });
        navigate(from, { replace: true });
      }).catch(error => {
        console.log(error);

      })
  }

  // step 3 for captcha button
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | login</title>
      </Helmet>
      <div className="hero min-h-full logInBg py-10">
        <div className="hero-content flex-col lg:flex-row logInBg shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={loginimg} alt="" />
          </div>
          <div className="w-full max-w-sm shrink-0">
            <h1 className="text-2xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body py-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                <span className='absolute right-5 top-14' onClick={() => setShow(!show)}>
                  {
                    show ? <FaEyeSlash /> : <FaEye />
                  }
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                {/* step 1 for captcha */}
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
            <p className='text-center p-4'><small>New here?<Link className='text-red-400 font-bold' to={'/signup'}>Create an Account</Link></small></p>
            {/* google signIn */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;