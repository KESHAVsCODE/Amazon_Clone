import Header from "./Header";
// import FeaturedProductsSection from "./Home/FeaturedProductsSection";
import Footer from "./footer";
// import Product from "./Product";
//import CreateAccount from "./SignIn.jsx/CreateAccount";
//import CreateAccount from "./SignIn.jsx/CreateAccount";
//import SignIn from "./SignIn.jsx/SignIn";
import Account from "./Account.jsx/Account";
const App = () => {
  return (
    <div className=" ">
      <Header />
      {/* <FeaturedProductsSection />
      <Product /> */}
      <Account />
      <Footer />
      {/* <SignIn /> */}
      {/* <CreateAccount /> */}
    </div>
  );
};

export default App;
