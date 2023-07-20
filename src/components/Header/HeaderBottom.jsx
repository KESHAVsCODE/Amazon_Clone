import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
const HeaderBottom = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <div className="bg-amazon_light flex  items-center text-white text-sm font-medium leading-4">
        <div
          className="headerHover ml-3 py-2 gap-1"
          onClick={() => setSideBar(!sideBar)}
        >
          <span>
            <MenuIcon style={{ lineHeight: "12px" }} />
          </span>
          <span className="">All</span>
        </div>
        <div>
          <ul className="flex">
            <li className="headerHover p-3">
              Health, Household & Personal Care
            </li>
            <li className="headerHover">Home Improvement</li>
            <li className="headerHover">Grocery & Gourmet Foods</li>
            <li className="headerHover">Amazon miniTV</li>
            <li className="headerHover">Sell</li>
            <li className="headerHover">Kindle eBooks</li>
            <li className="headerHover">Audible</li>
            <li className="headerHover">Books</li>
            <li className="headerHover">Buy Again</li>
            <li className="headerHover">Customer Service</li>
          </ul>
        </div>
      </div>
      {sideBar && (
        <div className="w-full h-screen fixed top-0 left-0 bg-amazon_blue bg-opacity-90">
          <div className="w-full h-full relative">
            <div className="w-[350px] h-full bg-white border border-black">
              <section className=" bg-amazon_light flex text-white h-[50px] items-center relative">
                <span className="ml-9 mr-2 leading-3">
                  <AccountCircleIcon style={{ fontSize: "32px" }} />
                </span>
                <p className=" text-lg font-bold">Hello, Keshav</p>
                <span
                  className="absolute text-white  -right-2 "
                  onClick={() => setSideBar(false)}
                  style={{ transform: "translateX(100%)" }}
                >
                  <CloseRoundedIcon
                    style={{
                      fontSize: "32px",
                    }}
                  />
                </span>
              </section>
              <section className=" pt-[10px] pb-[30px] ">
                <ul className=" overflow-scroll">
                  <li>
                    <h3 className="text-[18px] font-titleFont font-bold pt-3 pr-5 pb-1 pl-9">
                      Trending
                    </h3>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Best Sellers</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p>New Releases</p>
                  </li>
                  <li>
                    <p className="sideBarItems">Movers and Shakers</p>
                  </li>
                  {/* ======== Line Break ======== */}
                  <li>
                    <hr style={{ color: "#d5dbdb", margin: "5px 0px" }} />
                  </li>
                  {/* ======== New Section ======== */}
                  <li>
                    <h3 className="font-titleFont text-[18px] text-amazonBlue font-semibold pt-3 pr-5 pb-1 pl-9">
                      Digital Content And Devices
                    </h3>
                  </li>

                  <li className="sideBarItems">
                    <p className="">Echo & Alexa</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Fire TV</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Kindle E-Readers & eBooks</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Audible AudioBooks</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Amazon Prime Video</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Amazon Prime Music</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  {/* ======== New Section ======== */}
                  <li>
                    <h3 className="font-titleFont text-[18px] text-amazonBlue font-semibold pt-3 pr-5 pb-1 pl-9">
                      Shop By Category
                    </h3>
                  </li>

                  <li className="sideBarItems">
                    <p className="">Mobiles, Computers</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">TV, Appliances, Electronics</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Mens Fashion</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Audible AudioBooks</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Amazon Prime Video</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                  <li className="sideBarItems">
                    <p className="">Amazon Prime Music</p>
                    <span>
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
