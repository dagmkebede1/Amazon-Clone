import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useStateValue } from "./utils/useStateProvider";
import Payment from "./components/payment/Payment";
import Orders from "./components/order/Orders";
import Header from "./components/header/Header";
const promise = loadStripe(
  "pk_test_51MKz5jIu59DNSfY8Pdrjn8o61tDnoD3jnRAQQqnhwt3XuZcg1gSKkxobRAxsZBWyqFGXiE2RWXFC0z2bOu1TuTRi00t2EqTjqa"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />

          <Route exact path="/login" element={<Login />}></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
