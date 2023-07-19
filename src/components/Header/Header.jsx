import { ArrowDropDownOutlined } from "@mui/icons-material";
import { logo } from "../../assets/images";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { productCategories } from "../../constants/productCategories";

const Header = () => {
  const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex  gap-2 bg-amazon_blue text-white px-3 py-2">
      <section className="" name="logo">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="amazon-logo" />
        </div>
      </section>

      <section className="headerHover" name="address">
        <span>
          <PlaceOutlinedIcon style={{ fontSize: "22px" }} />
        </span>

        <div>
          <p className=" text-xs text-lightText">Deliver to Keshav</p>
          <p className=" text-sm leading-4 font-bold">Hanumangarh 335513</p>
        </div>
      </section>

      <section
        className="h-10 rounded-md flex flex-grow relative items-center"
        name="searchbar"
      >
        <div
          onClick={() => setCategoryVisible(!isCategoryVisible)}
          className="flex  h-full min-w-fit px-3 items-center justify-center bg-gray-100 hover:bg-gray-300 cursor-pointer text-lightGray rounded rounded-e-none  border-r  border-lightText"
        >
          <span className="text-xs">{selectedCategory}</span>
          <span>
            <ArrowDropDownOutlined
              style={{ fontSize: "20px", marginBottom: "4px" }}
            />
          </span>
          {isCategoryVisible && (
            <div>
              <ul
                className=" absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black
                flex-col gap-1 z-50"
              >
                {productCategories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className=" hover:bg-hover_blue hover:text-white font-medium  text-sm"
                  >
                    <p className="px-2">{category}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <input
          className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          type="text"
          placeholder="Search Amazon.in"
        />
        <span className=" bg-amazon_yellow flex h-full w-12 items-center justify-center cursor-pointer rounded rounded-s-none hover:bg-[#f3a847]  text-amazon_blue">
          <SearchIcon style={{ fontSize: "32px", color: "black" }} />
        </span>
      </section>
    </div>
  );
};

export default Header;
