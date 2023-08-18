import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import productsCategoryImages from "../../assets/productCategoriesImages/productCategoriesImages";
import {
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
} from "../../assets/images";

const featuredProducts = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];

const FeaturedProductsSection = () => {
  const [featuredProductIndex, setFeaturedProductIndex] = useState(0);

  const userDetails = useSelector((state) => state.signinDetails.userDetails);
  const navigate = useNavigate();

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
    <>
      <section name="hero-featured" className="h-[100vh] relative z-10">
        <div className="h-max relative">
          <div name="featured-product">
            <img
              src={featuredProducts[featuredProductIndex]}
              alt="featured-product-image"
            />
          </div>

          <div className="flex h-[50%] absolute left-0 right-0 top-0 text-white justify-between ">
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

          {/* <section name="category-featured" className="relative z-20 -mt-[300px]"> */}

          <section className="grid md:grid-cols-2  lg:grid-cols-4 gap-4 m-4 absolute top-[50%] z-20 ">
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
        </div>
      </section>
    </>
  );
};

export default FeaturedProductsSection;
