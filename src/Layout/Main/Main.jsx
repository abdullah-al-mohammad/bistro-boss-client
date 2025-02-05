import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shaired/Footer/Footer';
import Navbar from '../../pages/Shaired/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;