import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navbar from "./routes/navigation/Navigation";
import SignIn from "./routes/authentication/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-In" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
