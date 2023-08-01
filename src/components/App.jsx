import Header from "./Header";
import Footer from "./Footer";

import CreateAccount from "./SignIn.jsx/CreateAccount";
import SignIn from "./SignIn.jsx/SignIn";
import Account from "./Account.jsx/Account";
import Orders from "./Orders";
import Cart from "./Cart";

import Home from "./Home";

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
      <div className=" ">
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Home />} />
            <Route path="youraccount" element={<Account />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<CreateAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
