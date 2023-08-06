import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
const Address = () => {
  const addressDetails = useSelector((state) => state.addressDetails);
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl font-medium  text-defaultHeading py-4">
          Your Addresses
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {/* <div
            name="add_new_address"
            className="h-[250px] w-[320px] flex flex-col items-center justify-center border-2 border-dashed border-[#ccc] rounded-xl cursor-pointer"
          >
            <AddIcon
              style={{ fontSize: "64px", color: "#ccc", marginRight: "16px" }}
            />
            <h2 className="text-2xl mb-4 leading-6 font-bold text-lightGray">
              Add address
            </h2>
          </div> */}
          {addressDetails.defaultAddress && (
            <div className="h-[250px] w-[320px] border border-amazonBorder rounded-lg"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Address;
