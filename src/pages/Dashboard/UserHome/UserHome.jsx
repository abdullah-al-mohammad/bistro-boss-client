<<<<<<< HEAD
import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
  const { user } = useAuth()
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {
          user ? user.displayname : null
        }
      </h2>
    </div>
  );
};

export default UserHome;
=======
import React from 'react'

const UserHome = () => {
  return (
    <div>
        <h2>
            <span>Hi, Welcome</span>
        </h2>
    </div>
  )
}

export default UserHome
>>>>>>> 232bc685085b85519085c5fac077bd511a650c4d
