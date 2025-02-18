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