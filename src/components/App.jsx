import Header from "./Header";
import Footer from "./Footer";

import CreateAccount from "./SignIn.jsx/CreateAccount";
import SignIn from "./SignIn.jsx/SignIn";
import Account from "./Account.jsx/Account";
import Orders from "./Orders";
import Cart from "./Cart";

import Address from "./Address";
import Home from "./Home";

import RequireSignIn from "./RequireSignIn/RequireSignIn";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

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
      <div className=" overflow-x-auto">
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Home />} />
            <Route
              path="youraccount"
              element={
                <RequireSignIn>
                  <Account />
                </RequireSignIn>
              }
            >
              <Route path="address" element={<Address />} />
            </Route>
            <Route
              path="orders"
              element={
                <RequireSignIn>
                  <Orders />
                </RequireSignIn>
              }
            />
            <Route path="cart" element={<Cart />} />
            <Route path="address" element={<Address />} />
          </Route>
          <Route path="signin" element={<SignIn />} />

          <Route path="register" element={<CreateAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
