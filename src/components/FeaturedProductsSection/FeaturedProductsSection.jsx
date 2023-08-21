import { useEffect, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import productsCategoryImages from "../../assets/productCategoriesImages/productCategoriesImages";
import Products from "../Products";
import {
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
} from "../../assets/images";

const featuredProductsImages = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];

const FeaturedProductsSection = () => {
  const [slideImagePosition, setSlideImagePosition] = useState(0);

  const userDetails = useSelector((state) => state.signinDetails.userDetails);
  const navigate = useNavigate();

  const handlePrevProductClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === 0
        ? -(featuredProductsImages.length - 1)
        : prevPosition + 1
    );
  };

  const handleNextProductClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === -(featuredProductsImages.length - 1)
        ? 0
        : prevPosition - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextProductClick();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section name="hero-featured">
        <div className="h-max relative">
          <div name="slider_container" className="flex overflow-hidden">
            <div name="slider" className="flex">
              {featuredProductsImages.map((image, index) => {
                return (
                  <img
                    key={`bannerImg${index + 1}`}
                    src={image}
                    className={`transform translate-x-[${
                      slideImagePosition * 100
                    }%] transition-transform duration-300`}
                    alt="featured-product-image"
                  />
                );
              })}
            </div>
          </div>

          <div className="flex h-[50%] absolute left-0 right-0 top-0 text-white justify-between ">
            <button
              className="md:px-2 flex items-center rounded-[5px] focus:shadow-inlineButtonShadow justify-center cursor-pointer"
              onClick={handlePrevProductClick}
            >
              <NavigateBeforeIcon
                style={{
                  fontSize: "3rem",
                }}
              />
            </button>
            <button
              className="md:px-2 flex items-center justify-center rounded-[5px] focus:shadow-inlineButtonShadow cursor-pointer"
              onClick={handleNextProductClick}
            >
              <NavigateNextIcon
                style={{
                  fontSize: "3rem",
                }}
              />
            </button>
          </div>
        </div>
        <div className="relative -mt-[50px] md:-mt-[200px]  lgl:-mt-[270px] z-[99]">
          <section className="grid md:grid-cols-2  lg:grid-cols-4 px-4 gap-4 z-50 pb-4">
            <div
              key={productsCategoryImages[0].category}
              className="mx-auto p-4 bg-white shadow-2xl"
            >
              <h3 className="text-xl font-medium py-2">
                {productsCategoryImages[0].title}
              </h3>
              <img
                className=""
                src={productsCategoryImages[0].image}
                alt={productsCategoryImages[0].category}
              />
              <p
                className="navigateButtonLinks text-base py-2"
                onClick={() => navigate("/filtered_products")}
              >
                Shop Now
              </p>
            </div>
            <div
              key={productsCategoryImages[1].category}
              className="mx-auto p-4 bg-white shadow-2xl"
            >
              <h3 className="text-xl font-medium py-2">
                {productsCategoryImages[1].title}
              </h3>
              <img
                src={productsCategoryImages[1].image}
                alt={productsCategoryImages[1].category}
              />
              <p
                className="navigateButtonLinks text-base py-2"
                onClick={() => navigate("/filtered_products")}
              >
                Shop Now
              </p>
            </div>
            <div
              key={productsCategoryImages[2].category}
              className="mx-auto p-4 bg-white shadow-2xl"
            >
              <h3 className="text-xl font-medium py-2">
                {productsCategoryImages[2].title}
              </h3>
              <img
                className=""
                src={productsCategoryImages[2].image}
                alt={productsCategoryImages[2].category}
              />
              <p
                className="navigateButtonLinks text-base py-2"
                onClick={() => navigate("/filtered_products")}
              >
                Shop Now
              </p>
            </div>
            {userDetails?.name ? (
              <div
                key={productsCategoryImages[3].category}
                className="mx-auto p-4 bg-white shadow-2xl"
              >
                <h3 className="text-xl font-medium py-2">
                  {productsCategoryImages[3].title}
                </h3>
                <img
                  className=""
                  src={productsCategoryImages[3].image}
                  alt={productsCategoryImages[3].category}
                />
                <p
                  className="navigateButtonLinks text-base py-2"
                  onClick={() => navigate("/filtered_products")}
                >
                  Shop Now
                </p>
              </div>
            ) : (
              <div className="bg-white p-4 h-max shadow-2xl">
                <h2 className="text-2xl font-medium text-defaultHeading">
                  Sign in for your best experience
                </h2>
                <button
                  onClick={() => navigate("/signin")}
                  className="amazonButton text-sm font-medium my-4"
                >
                  Sign in Securely
                </button>
              </div>
            )}
          </section>
          <Products />
        </div>
      </section>
    </>
  );
};

export default FeaturedProductsSection;
