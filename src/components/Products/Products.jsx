/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Oval } from "react-loader-spinner";
import { addProduct, updateQuantity } from "../../redux/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";

import RatingStars from "./RatingStars";
import ProductDataContext from "../../context/ProductDataContextProvider";

const Product = ({
  selectedProductCategory = [],
  sortProductsBy = "",
  setProductCount,
  filterByRating = 0,
}) => {
  // const navigate = useNavigate();

  const { listOfProducts } = useContext(ProductDataContext);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const cartDetails = useSelector((state) => state.cartDetails);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setLoading(true);
    /*=========================== filter by category  ===========================*/
    let filteredProducts = selectedProductCategory?.length
      ? listOfProducts.filter((product) =>
          selectedProductCategory.includes(product.category)
        )
      : [...listOfProducts];

    switch (sortProductsBy) {
      case "low_to_high": {
        filteredProducts.sort(
          (productA, productB) => productA.price - productB.price
        );
        break;
      }
      case "high_to_low": {
        filteredProducts.sort(
          (productA, productB) => productB.price - productA.price
        );
        break;
      }
      case "avg_customer_review": {
        filteredProducts.sort(
          (productA, productB) => productB.rating.rate - productA.rating.rate
        );
        break;
      }
    }
    console.log(filteredProducts, "before");

    /*=========================== filter by rating  ===========================*/
    filteredProducts =
      filterByRating > 0
        ? filteredProducts.filter(
            (product) => product.rating.rate >= filterByRating
          )
        : filteredProducts;
    console.log(filteredProducts, "after");

    setProductsData([...filteredProducts]);

    console.log("filteredProducts", filteredProducts);
    setTimeout(() => {
      setLoading(false);
      if (setProductCount) setProductCount(filteredProducts.length);
    }, 1000);
  }, []);

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      e.target.disabled = true;
      e.target.classList.add("disabledAmazonButton");
      e.target.textContent = "Product Added to the Cart";
    }, 100);
    setTimeout(() => {
      e.target.disabled = false;
      e.target.classList.remove("disabledAmazonButton");
      e.target.textContent = "Add to Cart";
    }, 1000);

    const id = Number(e.target.id);

    //check if the product already exists in the cart or not
    const isExistsInCart = cartDetails.products.some(
      (item) => item.product.id === id
    );

    console.log(isExistsInCart, typeof id);

    if (isExistsInCart) {
      dispatch(updateQuantity({ id, quantity: 1 }));
      return;
    }

    //find which product we need to add in the cart from the productData
    const selectedProduct = productsData.find((product) => product.id === id);
    console.log(selectedProduct);
    dispatch(addProduct({ product: selectedProduct }));
  };

  if (loading)
    return (
      <Oval
        height={60}
        width={60}
        color="#febd69"
        visible={true}
        wrapperClass="justify-center"
        ariaLabel="oval-loading"
        secondaryColor="#febd69"
        strokeWidth={6}
        strokeWidthSecondary={6}
      />
    );

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
        {productsData.map((item) => (
          <div
            key={item.id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none 
                     hover:shadow-textShadow duration-200 relative flex flex-col gap-4"
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              {item.category}
            </span>
            {/* ========== Product Image Start here ============== */}
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img
                className="w-52 h-64 object-contain"
                src={item.image}
                alt="ProductImg"
              />
              {/* ================== Product mini drop down Start here ============ */}
              <ul
                className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 
                          flex flex-col justify-center items-end gap-2"
              >
                <li className="productLi">
                  Compare
                  <span>
                    <ApiIcon />
                  </span>
                </li>
                <li className="productLi">
                  Add to Cart
                  <span>
                    <ShoppingCartIcon />
                  </span>
                </li>
                <li className="productLi">
                  View Details{" "}
                  <span>
                    <ArrowCircleRightIcon />
                  </span>
                </li>
                <li className="productLi">
                  Add to Wish List{" "}
                  <span>
                    <FavoriteIcon />
                  </span>
                </li>
              </ul>
              {/* ================== Product mini drop down End here ============== */}
            </div>
            {/* ========== Product Image End here ================ */}
            {/* ========== Product Info Start here =============== */}
            <div className="px-4 bg-white flex flex-col gap-1 z-10">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item.title.substring(0, 20)}
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  ${item.price}
                </p>
              </div>
              <div>
                <p className="text-sm">{item.description.substring(0, 100)}</p>
                <div className="text-yellow-500 flex">
                  <RatingStars rating={item.rating.rate} />
                </div>
              </div>
              <button
                onClick={handleAddToCartClick}
                id={item.id}
                className="amazonButton mt-1"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
