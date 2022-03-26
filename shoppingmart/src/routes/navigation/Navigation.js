import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      App
      <Outlet />
    </div>
  );
};

export default Navbar;
