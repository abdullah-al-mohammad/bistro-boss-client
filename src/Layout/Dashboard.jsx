import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaUserMinus, } from "react-icons/fa";
import { PiListStarFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";


const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
          <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaShoppingCart></FaShoppingCart> Payment History</NavLink></li>
          <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
          <li><NavLink to="/dashboard/review"><PiListStarFill></PiListStarFill> Add Review</NavLink></li>
          <li><NavLink to="/dashboard/cart"><FaCalendarAlt></FaCalendarAlt> My Booking</NavLink></li>
          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/menu"><GiHamburgerMenu /> Menu</NavLink></li>
          <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
          <li><NavLink to="/contact"><FaShoppingBag></FaShoppingBag> Contact</NavLink></li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;