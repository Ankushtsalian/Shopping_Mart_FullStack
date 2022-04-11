import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navbar from "./routes/navigation/Navigation";
import SignIn from "./routes/authentication/SignIn";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";
// import { setCurrentUser } from "./store/user/userAction";
import { USER_ACTION_TYPES } from "./store/user/userTypes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-In" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
