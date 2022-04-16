import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";

import { USER_ACTION_TYPES } from "./store/user/userTypes";
import { Suspense } from "react";
import Spinner from "./components/spinner/Spinner";
const Home = lazy(() => import("../src/routes/home/Home"));
const Navbar = lazy(() => import("./routes/navigation/Navigation"));
const SignIn = lazy(() => import("./routes/authentication/SignIn"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const Checkout = lazy(() => import("./routes/checkout/Checkout"));

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
  }, [dispatch]);
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-In" element={<SignIn />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
