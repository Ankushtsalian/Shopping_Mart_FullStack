import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import Logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="LOGO" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
