import React from 'react';
import SectionTitle from '../../../../assets/Components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
      <SectionTitle
        subHeading={'Check it out'}
        heading={'Featured item'}
      ></SectionTitle>
      <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36'>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className='md:ml-10'>
          <p>Aug 20, 2029</p>
          <p className='uppercase'>where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum cum error similique delectus quibusdam, explicabo voluptatum suscipit repellendus obcaecati illo modi, labore fugiat ad placeat tenetur rerum officia sequi.
            Quia fugiat eveniet illo cumque sapiente nemo doloremque ad magni soluta facilis iure atque nulla quam culpa aperiam ipsum velit, debitis molestiae et deserunt! Non suscipit facilis corporis ipsam voluptates!</p>
          <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;