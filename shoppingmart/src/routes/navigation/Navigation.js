import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link-shop" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link-signin" to="/SIGN-IN">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
