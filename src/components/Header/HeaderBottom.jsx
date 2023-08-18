/* eslint-disable react/prop-types */

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
const HeaderBottom = ({ openSideBar }) => {
  const navigate = useNavigate();

  return (
    <div name="header-bottom">
      <div className=" bg-amazon_light flex  items-center text-white text-sm font-medium leading-4">
        {/* this onClick creates the event propagation in upper div so that we have to stop that*/}
        <div className="items-center hidden mdl:flex">
          <div className="headerHover ml-3 py-2 gap-1" onClick={openSideBar}>
            <span>
              <MenuIcon style={{ lineHeight: "12px" }} />
            </span>
            <span className="">All</span>
          </div>

          <ul
            className=" h-full flex-grow hidden mdl:flex"
            onClick={() => navigate("/filtered_products")}
          >
            <li className="headerHover">Electronics</li>
            <li className="headerHover">Men&apos;s Fashion</li>
            <li className="headerHover">Women&apos;s Fashion</li>
            <li className="headerHover">Jewellery</li>
            <li className="headerHover">Skin Care & Beauty</li>
            <li className="headerHover">Mobiles</li>
            <li className="headerHover">Computers</li>
          </ul>
        </div>
        <div className="flex pl-1  mdl:hidden">
          <DeliveryAddress />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
