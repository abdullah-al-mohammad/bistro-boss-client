import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()
  const [cart] = useCart()

  const handleLogOut = () => {
    logOut()
      .then(result => {
        const user = result.user
        Swal.fire({
          title: "Logout Successful!",
          icon: "success",
          draggable: true
        });
      })
  }
  const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order Food</Link></li>
    {
      user && isAdmin ? <li><Link to='/dashboard/adminHome'>Admin Home</Link></li> : 'back'
    }
    {
      user && !isAdmin ? <li><Link to='/dashboard/userHome'>User Home</Link></li> : 'back'
    }

    {
      user ? <>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </> : <>
        <li><Link to='/login'>Login</Link></li>
      </>
    }
    <li>
      <Link to='/dashboard/cart'>
        <li>
          <button className="btn">
            <LuShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </li>
      </Link>
    </li>
  </>
  return (
    <>
      <div className="navbar fixed z-10 opacity-30 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;