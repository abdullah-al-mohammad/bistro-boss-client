import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../assets/Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        heading={'order online'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        // spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className='text-4xl uppercase text-center -mt-16 text-white'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className='text-4xl uppercase text-center -mt-16 text-white'>soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className='text-4xl uppercase text-center -mt-16 text-white'>deserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;