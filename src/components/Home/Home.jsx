import FeaturedProductsSection from "../FeaturedProductsSection";
import Products from "../Products";

const Home = () => {
  return (
    <div className="relative bg-gray-200">
      <FeaturedProductsSection />
      <Products />
    </div>
  );
};

export default Home;
