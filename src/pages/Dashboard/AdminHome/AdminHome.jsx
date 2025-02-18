
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
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaMoneyCheckAlt></FaMoneyCheckAlt>
          </div>
          <div className="stat-title">Revenue</div>
          {/* <div className="stat-value">{stats.revenue.slice(0, -3)}</div> */}
          <div className="stat-value">{Math.floor(stats?.revenue / 10)}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUser></FaUser>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <CiDeliveryTruck></CiDeliveryTruck>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;