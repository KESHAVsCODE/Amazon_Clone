import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
// eslint-disable-next-line react/prop-types
const SideBar = ({ setSideBarVisible: { toggleSideBar } }) => {
  const sideBarRef = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.contains(sideBarRef.current)) {
        //check if targeted div contains the sideBarRef, if we click on parent div then
        toggleSideBar(); // condition will get true, if we click on any other place then get false.
      }
    });
  });

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-amazon_blue bg-opacity-90`}
    >
      <motion.div
        ref={sideBarRef}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-[365px] h-full bg-white border border-black`}
      >
        <section className=" bg-amazon_light flex text-white h-[50px] items-center relative">
          <span className="ml-9 mr-2 leading-3">
            <AccountCircleIcon style={{ fontSize: "32px" }} />
          </span>
          <p className=" text-lg font-bold">Hello, Keshav</p>
          <span
            className="absolute text-white  -right-2 "
            onClick={toggleSideBar}
            style={{ transform: "translateX(100%)" }}
          >
            <CloseRoundedIcon
              style={{
                fontSize: "32px",
              }}
            />
          </span>
        </section>

        <section className="h-full w-full ">
          <ul className=" overflow-y-scroll h-full w-full pt-[10px] pb-[100px]">
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
            {/* ======== Line Break ======== */}
            <li>
              <hr style={{ color: "#d5dbdb", margin: "5px 0px" }} />
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
              <p className="">Womens Fashion </p>
              <span>
                <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
              </span>
            </li>
            <li className="sideBarItems">
              <p className="">See All</p>
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
            {/* ======== Line Break ======== */}
            <li>
              <hr style={{ color: "#d5dbdb", margin: "5px 0px" }} />
            </li>
            {/* ======== New Section ======== */}
            <li>
              <h3 className="font-titleFont text-[18px] text-amazonBlue font-semibold pt-3 pr-5 pb-1 pl-9">
                Program & Features
              </h3>
            </li>
            <li className="sideBarItems">
              <p className="">Gift Cards & Mobile Recharges</p>
              <span>
                <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
              </span>
            </li>
            <li className="sideBarItems">
              <p>Amazon Launchpad</p>
            </li>
            <li className="sideBarItems">
              <p>Flight Tickets</p>
            </li>
            <li className="sideBarItems">
              <p>Clearance store</p>
            </li>
            {/* ======== Line Break ======== */}
            <li>
              <hr style={{ color: "#d5dbdb", margin: "5px 0px" }} />
            </li>
            {/* ======== New Section ======== */}
            <li>
              <h3 className="font-titleFont text-[18px] text-amazonBlue font-semibold pt-3 pr-5 pb-1 pl-9">
                Help & Settings
              </h3>
            </li>
            <li className="sideBarItems">
              <p>Your Account</p>
            </li>
            <li className="sideBarItems">
              <p>Customer Service</p>
            </li>
            <li className="sideBarItems">
              <p>Sign Out</p>
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default SideBar;
