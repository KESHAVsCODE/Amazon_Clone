import Header from "./Header";
import Footer from "./Footer";

import CreateAccount from "./SignIn.jsx/CreateAccount";
import SignIn from "./SignIn.jsx/SignIn";
import YourAccount from "./YourAccount";
import Orders from "./Orders";
import Cart from "./Cart";

import Home from "./Home";

import Account from "./YourAccount/Account";
import Addresses from "./YourAccount/Addresses";
import AddAddress from "./YourAccount/Addresses/AddAddress";
import Checkout from "./Checkout";

import FilteredProducts from "./FilteredProducts";

import RequireSignIn from "./RequireSignIn/RequireSignIn";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const CustomLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Home />} />
            <Route
              path="youraccount"
              element={
                <RequireSignIn>
                  <YourAccount />
                </RequireSignIn>
              }
            >
              <Route index element={<Account />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="addresses/add_address" element={<AddAddress />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            <Route path="filtered_products" element={<FilteredProducts />} />

            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="signin" element={<SignIn />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="register" element={<CreateAccount />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
