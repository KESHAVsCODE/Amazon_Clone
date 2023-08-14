import { useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
import Products from "../Products";
import RatingStars from "../Products/RatingStars";
const productCategories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];
const FilteredProducts = () => {
  // const location = useLocation();

  const [selectedProductCategory, setSelectedProductCategory] = useState([]);
  const [sortProductsBy, setSortProductsBy] = useState("");
  const [filterByRating, setFilterByRating] = useState(0);

  const [productCount, setProductCount] = useState(0);

  const categoryInputRef = useRef([]);

  console.log(categoryInputRef.current);

  const handleApplyFilterClick = () => {
    const filteredElement = categoryInputRef.current.filter(
      (element) => element?.checked
    );

    const selectedProductCategory = filteredElement.map(
      (element) => element?.id
    );

    setSelectedProductCategory(selectedProductCategory);
  };

  console.log(filterByRating);
  return (
    <div className="">
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
            value={sortProductsBy}
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
              onClick={handleApplyFilterClick}
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
        </div>

        {/*===================================== product section ===================================== */}
        <div className="flex-grow">
          <Products
            selectedProductCategory={selectedProductCategory}
            sortProductsBy={sortProductsBy}
            setProductCount={setProductCount}
            filterByRating={filterByRating}
          />
        </div>
      </section>
    </div>
  );
};

export default FilteredProducts;
