import { useState, useEffect } from "react";
import SectionTitle from '../../../assets/Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <section className='my-20'>
      <SectionTitle
        subHeading={'What Our Clients Say'}
        heading={'Testimonials'}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

          {
            reviews.map(review => <SwiperSlide
              key={review._id}
            >
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  className="mb-3"
                  style={{ maxWidth: 180 }}
                  value={3}
                  readOnly
                />
                <FaQuoteLeft className="text-6xl text-black"></FaQuoteLeft>
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;