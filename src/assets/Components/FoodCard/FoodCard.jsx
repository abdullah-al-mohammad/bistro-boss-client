import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.state);
  const axiosSecure = useAxiosSecure()

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email, food) {
      // send data to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Added to your cart`,
              showConfirmButton: false,
              timer: 2000
            });
          }

        })
    }
    else {
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please logon to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }

  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4'>{price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-orange-300 bg-stone-500 text-orange-200 border-b-4 mt-4">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;