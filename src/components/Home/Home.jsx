import FeaturedProductsSection from "../FeaturedProductsSection";
import Products from "../Products";

const Home = () => {
  return (
    <main name="home" className="relative bg-gray-200">
      <FeaturedProductsSection />
      <Products />
    </main>
  );
};

export default Home;
