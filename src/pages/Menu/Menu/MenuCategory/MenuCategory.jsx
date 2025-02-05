import MenuItem from '../../../Shaired/menuItem/MenuItem';
import Cover from '../../../Shaired/Cover/Cover';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className='mb-16'>
      {title && <Cover img={img} title={title}></Cover>}
      <div className='grid md:grid-cols-2 gap-10 mb-10 my-16'>
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-outline border-0 border-b-4 mt-4'>ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  );
};

export default MenuCategory;