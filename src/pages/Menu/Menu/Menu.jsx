
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shaired/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from "./../../../assets/Components/SectionTitle/SectionTitle";
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu()
  const offered = menu.filter(item => item.category === 'offered')
  const desserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'our menu'}></Cover>
      <SectionTitle subHeading={"Don't miss"} heading={"today's offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert */}
      <MenuCategory items={desserts} img={dessertImg} title={'dessert'}></MenuCategory>
      {/* pizza */}
      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={'salads'} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={'soups'} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;