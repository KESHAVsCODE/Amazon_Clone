import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import useClickOutside from "../custom-hooks/useClickOutside";
const HeaderBottom = () => {
  //custom hook for maintain open-close component feature
  const [sideBar, setSideBar, sideBarRef] = useClickOutside(false);

  const openSideBar = (e) => {
    e.stopPropagation();
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <div>
      <div className="h-[40px] bg-amazon_light flex  items-center text-white text-sm font-medium leading-4">
        {/* this onClick creates the event propagation in upper div so that we have to stop that*/}
        <div className="headerHover ml-3 py-2 gap-1" onClick={openSideBar}>
          <span>
            <MenuIcon style={{ lineHeight: "12px" }} />
          </span>
          <span className="">All</span>
        </div>

        <ul className="flex h-full">
          <li className="headerHover">Electronics</li>
          <li className="headerHover">Men&apos;s Fashion</li>
          <li className="headerHover">Women&apos;s Fashion</li>
          <li className="headerHover">Jewellery</li>
          <li className="headerHover">Skin Care & Beauty</li>
          <li className="headerHover">Mobiles</li>
          <li className="headerHover">Computers</li>
        </ul>
      </div>
      {sideBar && (
        <SideBar setSideBarVisible={{ sideBar, closeSideBar, sideBarRef }} />
      )}
    </div>
  );
};

export default HeaderBottom;
