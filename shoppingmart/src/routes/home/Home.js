import Categorymenu from "../../components/Menu/Categorymenu";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Outlet />
      <Categorymenu />
    </div>
  );
};

export default Home;
