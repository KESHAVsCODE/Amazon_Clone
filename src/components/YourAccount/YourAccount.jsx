// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const YourAccount = () => {
  // const navigate = useNavigate();
  return (
    <section name="your-account" className="w-full">
      <div className="p-6 mx-auto max-w-5xl">
        <Outlet />
      </div>
    </section>
  );
};

export default YourAccount;
