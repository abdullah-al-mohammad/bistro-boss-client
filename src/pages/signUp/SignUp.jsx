import { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const [show, setShow] = useState()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            reset()
            Swal.fire({
              title: "User SignUP Successfully!",
              icon: "success",
              draggable: true
            });
            navigate('/')
          })
          .catch(error => console.error(error)
          )


      }).catch(error => {
        console.log(error);

      })
  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss | signUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" required />
                {errors.name && <span className='text-red-500'>name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })} className="input input-bordered" required />
                {errors.photoURL && <span className='text-red-500'> photoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" required />
                {errors.email && <span className='text-red-500'>email is required</span>}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text" : "password"} placeholder="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[a-zA-Z\d@#$%^&*]+$/
                })} className="input input-bordered" required />

                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className='text-red-500'>password must be less then 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-500'>password must have one uppercase one lowercase one number and one special characters</p>}
                <label className="label">
                  <span className='absolute right-5 top-12' onClick={() => setShow(!show)}>
                    {
                      show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                  </span>
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center p-4'><small>Already register? <Link className='text-red-500 font-bold' to={'/login'}>Go to Login</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;