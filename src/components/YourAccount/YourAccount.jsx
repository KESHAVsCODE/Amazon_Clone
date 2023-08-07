// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const YourAccount = () => {
  // const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-[1000px] mx-auto">
        {/* <ul>
          <li className="">Your Account</li>
        </ul> */}
        <Outlet />
      </div>
    </div>
  );
};

export default YourAccount;
