import { useContext, useRef, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Products from "../Products";
import RatingStars from "../Products/RatingStars";
import ProductDataContext from "../../context/ProductDataContextProvider";
// import { useSearchParams } from "react-router-dom";

const productCategories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];
const FilteredProducts = () => {
  const { listOfProducts } = useContext(ProductDataContext);
  const [productCount, setProductCount] = useState(0);

  const [selectedProductCategory, setSelectedProductCategory] = useState([]);
  const [sortProductsBy, setSortProductsBy] = useState("");
  const [filterByRating, setFilterByRating] = useState(0);

  const [filteredProductsData, setFilteredProductsData] = useState([]);

  const categoryInputRef = useRef([]);

  const handleApplyCategoryFilterClick = () => {
    const filteredElement = categoryInputRef.current.filter(
      (element) => element?.checked
    );

    const selectedProductCategory = filteredElement.map(
      (element) => element?.id
    );
    setSelectedProductCategory(selectedProductCategory);
  };

  const applyFilters = (products) => {
    if (selectedProductCategory?.length > 0) {
      products = products.filter((product) =>
        selectedProductCategory?.includes(product.category)
      );
    }

    if (filterByRating > 0) {
      products = products.filter((product) => {
        const rating = product.rating.rate;
        let finalRating = Math.floor(rating);
        let diff = Number((rating - finalRating).toFixed(1));
        finalRating = finalRating + (diff > 0.7 ? 1 : 0);
        return finalRating >= filterByRating;
      });
    }

    return products;
  };

  const clearFilters = () => {
    setSelectedProductCategory([]);
    categoryInputRef.current.forEach((element) => (element.checked = false));
    setFilterByRating(0);
  };

  const applySorting = (products) => {
    switch (sortProductsBy) {
      case "low_to_high": {
        products.sort((productA, productB) => productA.price - productB.price);
        break;
      }
      case "high_to_low": {
        products.sort((productA, productB) => productB.price - productA.price);
        break;
      }
      case "avg_customer_review": {
        products.sort(
          (productA, productB) => productB.rating.rate - productA.rating.rate
        );
        break;
      }
    }
    return products;
  };

  useEffect(() => {
    // Apply filtering and sorting
    const filteredData = applyFilters([...listOfProducts]);

    const sortedAndFilteredData = applySorting(filteredData);

    // Update state
    setFilteredProductsData(sortedAndFilteredData);
    setProductCount(sortedAndFilteredData?.length);
  }, [selectedProductCategory, filterByRating, sortProductsBy, listOfProducts]);

  // useEffect(() => {
  //   const searchParams = {};
  //   if (selectedProductCategory.length)
  //     searchParams.category = selectedProductCategory;
  //   if (filterByRating > 0) searchParams.rating = filterByRating;
  //   if (sortProductsBy) searchParams.sort = sortProductsBy;
  //   if (Object.keys(searchParams).length > 0) {
  //     setSearchParams(searchParams);
  //   }
  // }, [
  //   selectedProductCategory,
  //   filterByRating,
  //   sortProductsBy,
  //   setSearchParams,
  // ]);

  return (
    <section name="filter-products" className="">
      {/*===================================== sort product section ===================================== */}
      <section
        name="sort"
        className="flex items-center justify-between px-3 p-2 bg-white border-b border-lightText shadow-borderBottomShadow"
      >
        <p className="text-sm font-medium">{productCount} results</p>
        <div>
          <label htmlFor="sortProductsBy" className="text-sm  font-medium">
            Sort by:{" "}
          </label>
          <select
            name="sort_by"
            id="sortBy"
            className="selectItem text-xs"
            onChange={(e) => setSortProductsBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="low_to_high">Price: Low to High</option>
            <option value="high_to_low">Price: High to Low</option>
            <option value="avg_customer_review">Avg. Customer Review</option>
          </select>
        </div>
      </section>
      <section className="flex px-4 py-6">
        {/*===================================== filter product section ===================================== */}
        <div className="filters">
          <div className="w-max mb-4">
            <h3 className="font-medium">Category</h3>
            <ul>
              {productCategories.map((category, index) => (
                <li key={category} className="flex gap-2">
                  <input
                    type="checkbox"
                    id={category}
                    ref={(element) =>
                      (categoryInputRef.current[index] = element)
                    }
                  />
                  <label htmlFor={category}>{category}</label>
                </li>
              ))}
            </ul>
            <button
              onClick={handleApplyCategoryFilterClick}
              className="amazonButton text-xs py-1"
            >
              Apply
            </button>
          </div>
          <div className="w-max">
            <h3 className="font-medium">Customer Review</h3>
            <ul
              className="text-xs"
              onClick={(e) =>
                setFilterByRating(Number(e.target.getAttribute("data-id")))
              }
            >
              <li className="flex items-center ">
                <RatingStars rating={4} />
                <p
                  data-id="4"
                  className={`defaultLink text-defaultParagraph ${
                    filterByRating === 4 && "font-medium text-sm"
                  }`}
                >
                  & Up
                </p>
              </li>

              <li className="flex items-center">
                <RatingStars rating={3} />
                <p
                  data-id="3"
                  className={`defaultLink text-defaultParagraph ${
                    filterByRating === 3 && "font-medium text-sm"
                  }`}
                >
                  & Up
                </p>
              </li>
              <li className="flex items-center">
                <RatingStars rating={2} />
                <p
                  data-id="2"
                  className={`defaultLink text-defaultParagraph ${
                    filterByRating === 2 && "font-medium text-sm"
                  }`}
                >
                  & Up
                </p>
              </li>

              <li className="flex items-center">
                <RatingStars rating={1} />
                <p
                  data-id="1"
                  className={`defaultLink text-defaultParagraph ${
                    filterByRating === 1 && "font-medium text-sm"
                  }`}
                >
                  & Up
                </p>
              </li>
            </ul>
          </div>
          <button
            onClick={clearFilters}
            className="amazonButton text-xs py-1 my-4"
          >
            Clear All
          </button>
        </div>

        {/*===================================== product section ===================================== */}
        <div className="flex-grow">
          <Products filteredProductsData={filteredProductsData} />
        </div>
      </section>
    </section>
  );
};

export default FilteredProducts;
