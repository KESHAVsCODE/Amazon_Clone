// import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { errorSign } from "../../assets/images";
// eslint-disable-next-line react/prop-types
const Error = ({ email }) => {
  console.log("EMAIL", email);
  return (
    <section className="flex gap-4 w-full mb-4 pl-4 py-4 px-2 border border-error rounded-lg shadow-errorShadow">
      <div>
        <img className="w-14" src={errorSign} alt="error-sign" />
      </div>
      <div className="">
        <h3 className="text-lg font-medium text-error">There was a problem</h3>
        <p className="text-sm font-normal text-[#222]">
          Your provided Email {email} has already been used. Please use another
          Email address.
        </p>
      </div>
    </section>
  );
};

export default Error;
