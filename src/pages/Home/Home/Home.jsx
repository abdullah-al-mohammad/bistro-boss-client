import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../popularMenu/PopularMenu';
import Featured from './featured/Featured';
import Testimonials from '../testimonials/Testimonials';
import ChefServices from '../chefServices/ChefServices';
import ContactUs from '../contactUs/ContactUs';
import Recommends from '../recommends/Recommends';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefServices></ChefServices>
      <PopularMenu></PopularMenu>
      <ContactUs></ContactUs>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;