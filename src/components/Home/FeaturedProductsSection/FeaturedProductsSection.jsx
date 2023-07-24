import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
} from "../../../assets/images";

const featuredProducts = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];

const FeaturedProductsSection = () => {
  const [featuredProductIndex, setFeaturedProductIndex] = useState(0);

  const handlePrevProductClick = () => {
    setFeaturedProductIndex((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  const handleNextProductClick = () => {
    setFeaturedProductIndex((prev) =>
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section name="home-featured" className="relative">
      <div name="featured-product">
        <img
          src={featuredProducts[featuredProductIndex]}
          alt="featured-product-image"
        />
      </div>

      <div className="flex h-[250px] absolute left-0 right-0 top-0 text-white justify-between ">
        <div
          className="w-[80px] flex items-center justify-center  active:scale-90 cursor-pointer"
          onClick={handlePrevProductClick}
        >
          <ArrowBackIosIcon
            style={{
              fontSize: "3rem",
              marginLeft: "12px",
            }}
          />
        </div>
        <div
          className="w-[80px] flex items-center justify-center active:scale-90 cursor-pointer"
          onClick={handleNextProductClick}
        >
          <ArrowForwardIosIcon
            style={{
              fontSize: "3rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
