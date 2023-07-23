import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import useClickOutside from "../custom-hooks/useClickOutSide";
const HeaderBottom = () => {
  const openSideBar = (e) => {
    e.stopPropagation();
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  const [sideBar, setSideBar, sideBarRef] = useClickOutside(false);

  return (
    <div>
      <div className="bg-amazon_light flex  items-center text-white text-sm font-medium leading-4">
        {/* this onClick creates the event propagation in upper div*/}
        <div className="headerHover ml-3 py-2 gap-1" onClick={openSideBar}>
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
        <SideBar setSideBarVisible={{ sideBar, closeSideBar, sideBarRef }} />
      )}
    </div>
  );
};

export default HeaderBottom;
