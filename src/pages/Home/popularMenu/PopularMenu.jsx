import SectionTitle from '../../../assets/Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shaired/menuItem/MenuItem';

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  return (
    <section className='my-20'>
      <SectionTitle
        subHeading={'FROM OUR MENU'}
        heading={'Check it out'}
      ></SectionTitle>
      <div className='grid md:grid-cols-2 gap-10 mb-10'>
        {
          popular.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <button className='btn btn-outline border-0 border-b-4 mt-4 flex place-self-center'>View Full  Menu</button>
    </section>
  );
};

export default PopularMenu;