import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div> Logo </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>

        <h1>N A V I G A T I O N</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
