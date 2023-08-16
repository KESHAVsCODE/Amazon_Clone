import { logo } from "../../assets/images";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect, useState } from "react";
import { productCategories } from "../../constants/productCategories";
import HeaderBottom from "./HeaderBottom";
import useClickOutside from "../custom-hooks/useClickOutside";

import ListOfAddresses from "../ListOfAddresses/ListOfAddresses";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Group } from "@mantine/core";

import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const userDetails = useSelector((state) => state.signinDetails.userDetails);

  const addressDetails = useSelector((state) => state.addressDetails);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [opened, { open, close }] = useDisclosure(false);

  const [selectedAddress, setSelectedAddress] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedAddress(
      addressDetails.defaultAddress?.address ||
        addressDetails.userAddresses[0] ||
        {}
    );
  }, [addressDetails]);

  const cartProductCount = useSelector(
    (state) => state.cartDetails.productsCount
  );

  //custom hook for manage the visibility of the product categories
  const [isCategoryVisible, setCategoryVisible, categoryRef] =
    useClickOutside(false);

  const openCategory = (e) => {
    e.stopPropagation();
    setCategoryVisible(!isCategoryVisible);
  };

  return (
    <>
      <div className="flex items-center h-[60px] gap-2 bg-amazon_blue text-white sticky top-0 left-0 right-0 px-3 py-[5px]  z-[199]">
        {/* ======================= Logo Section ======================= */}

        <section name="logo" className="headerHover">
          <NavLink to="/">
            <div>
              <img className="w-24 mt-2" src={logo} alt="amazon-logo" />
            </div>
          </NavLink>
        </section>

        {/* ======================= Delivery Address ======================= */}
        <Modal
          opened={opened}
          onClose={close}
          size={360}
          // title="Authentication"
          withCloseButton={false}
          padding={0}
          radius={10}
        >
          <ListOfAddresses
            closeModal={close}
            setSelectedAddress={setSelectedAddress}
          />
        </Modal>
        <Group>
          <section onClick={open} name="address" className="headerHover">
            <span>
              <PlaceOutlinedIcon
                style={{ fontSize: "20px", marginTop: "8px" }}
              />
            </span>

            <div>
              <p className=" text-xs leading-3 text-lightText">
                {selectedAddress.name
                  ? `Deliver to ${selectedAddress.name.split(" ")[0]}`
                  : "Hello User"}
              </p>
              <p className=" text-sm font-bold">
                {selectedAddress.city
                  ? `${
                      selectedAddress.city.charAt(0).toUpperCase() +
                      selectedAddress.city.slice(1).toLowerCase()
                    }, ${selectedAddress.pincode}`
                  : "Select your address"}
              </p>
            </div>
          </section>
        </Group>

        {/* ======================= Search Bar ======================= */}
        <section
          name="searchbar"
          className="h-10 rounded-md flex flex-grow relative items-center"
        >
          <div
            name="product-category"
            onClick={openCategory}
            className="flex  h-full min-w-fit px-3 items-center justify-center bg-gray-100 hover:bg-gray-300 
                    cursor-pointer text-lightGray rounded rounded-e-none  border-r  border-lightText"
          >
            <span className="text-xs">{selectedCategory}</span>
            <span>
              <ArrowDropDownOutlined
                style={{ fontSize: "20px", marginBottom: "4px" }}
              />
            </span>

            {isCategoryVisible && (
              <div ref={categoryRef}>
                <ul
                  className=" absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden 
                bg-white border-[1px] border-amazon_blue text-black flex-col gap-1 z-[99]"
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
            name="product-search"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
            placeholder="Search Amazon.in"
          />
          <span
            className=" bg-amazon_yellow flex h-full w-12 items-center justify-center cursor-pointer 
                        rounded rounded-s-none hover:bg-[#f3a847]  text-amazon_blue"
          >
            <SearchIcon style={{ fontSize: "30px", color: "black" }} />
          </span>
        </section>

        {/* ======================= Account & Login ======================= */}
        <NavLink to="/youraccount">
          <section name="account" className="headerHover">
            <div>
              <p className=" text-xs leading-3">
                Hello, {userDetails?.name?.split(" ")[0] || "Sign in"}
              </p>
              <p className=" text-sm font-bold">Account & Lists</p>
            </div>

            <div className="leading-3">
              <ArrowDropDownOutlined
                style={{ fontSize: "18px", marginTop: "14px" }}
              />
            </div>
          </section>
        </NavLink>

        {/* ======================= Orders ======================= */}
        <NavLink to="/youraccount/orders">
          <section name="orders" className="headerHover">
            <div>
              <p className=" text-xs leading-3">Returns</p>
              <p className=" text-sm font-bold">& Orders</p>
            </div>
          </section>
        </NavLink>

        {/* ======================= Cart ======================= */}
        <NavLink to="/cart">
          <section
            name="cart"
            className=" flex items-center justify-center relative headerHover"
          >
            <span>
              <ShoppingCartOutlinedIcon style={{ fontSize: "1.625rem" }} />
            </span>
            <p className="text-xs font-medium mt-3">Cart</p>
            <span
              className="absolute flex text-[11px] font-medium align-center justify-center top-2 left-6 w-4 h-4 
                          bg-[#f3a847] rounded-full"
            >
              {cartProductCount}
            </span>
          </section>
        </NavLink>

        {/* ======================= Sign Out ======================= */}
        {userDetails?.name && (
          <div
            className="headerHover"
            onClick={() => dispatch({ type: "reset_store" })}
          >
            <LogoutIcon style={{ fontSize: "28px" }} />
          </div>
        )}
      </div>
      <HeaderBottom />
    </>
  );
};

export default Header;
