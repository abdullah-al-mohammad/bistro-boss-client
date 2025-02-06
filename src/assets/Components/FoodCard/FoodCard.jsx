import React from 'react';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item
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
            <button className="btn btn-outline border-0 border-orange-300 bg-stone-500 text-orange-200 border-b-4 mt-4">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;