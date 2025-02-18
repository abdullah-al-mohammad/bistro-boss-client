<<<<<<< HEAD

import useAuth from '../../../hooks/useAuth';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook, FaMoneyCheckAlt, FaUser } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";

const AdminHome = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats')
      return res.data
    }
  })
  return (
    <div>
      <h2 className="text-3xl">
        <span>hi, Welcome</span>
        {
          user ? user.displayname : null
        }
=======
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaFirstOrder, FaUser } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  console.log(user);
  
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2>
        <span className="mr-2">Hi, Welcome Home</span>
        {user ? user?.displayName : null}
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
<<<<<<< HEAD
            <FaMoneyCheckAlt></FaMoneyCheckAlt>
          </div>
          <div className="stat-title">Revenue</div>
          {/* <div className="stat-value">{stats.revenue.slice(0, -3)}</div> */}
          <div className="stat-value">{Math.floor(stats?.revenue / 10)}</div>
=======
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue.toString().slice(0, -11)}</div>
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser></FaUser>
          </div>
          <div className="stat-title">Users</div>
<<<<<<< HEAD
          <div className="stat-value">{stats?.users}</div>
=======
          <div className="stat-value">${stats?.users}</div>
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
<<<<<<< HEAD
=======
            <FaFirstOrder></FaFirstOrder>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.order}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
            <FaBook></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
<<<<<<< HEAD
        <div className="stat">
          <div className="stat-figure text-secondary">
            <CiDeliveryTruck></CiDeliveryTruck>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
=======
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AdminHome;
=======
export default AdminHome;
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
