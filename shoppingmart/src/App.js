import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navbar from "./routes/navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
