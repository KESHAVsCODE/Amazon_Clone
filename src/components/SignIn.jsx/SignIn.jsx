import { logoDark } from "../../assets/images";
import SignBottom from "./SignBottom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const SignIn = () => {
  return (
    <div className="h-screen">
      <section className="w-[350px] mx-auto flex flex-col items-center">
        <div>
          <img className="w-32 py-2" src={logoDark} alt="website-logo" />
        </div>
        <section className="border border-amazonBorder rounded-lg px-6 py-4">
          <form
            action=""
            className="grid gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-[28px] font-medium">Sign in</h2>
            <div>
              <label htmlFor="email" className="text-sm leading-4 font-medium">
                Email or mobile phone number
              </label>
              <input
                className="inputBox"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm leading-4 font-medium"
              >
                Password
              </label>
              <input
                className="inputBox"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button type="submit" className="amazonButton">
              Continue
            </button>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon&apos;s{" "}
              <span>
                {" "}
                <a
                  href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
                  target="_blank"
                  rel="noreferrer"
                  className="defaultLink"
                >
                  Conditions of Use
                </a>{" "}
              </span>
              and{" "}
              <span className="">
                <a
                  href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
                  target="_blank"
                  rel="noreferrer"
                  className="defaultLink"
                >
                  Privacy Notice.
                </a>
              </span>
            </p>
            <div className="flex items-center text-gray-600 mt-4">
              <ArrowRightIcon style={{ fontSize: "20px" }} />
              <p className="text-sm defaultLink">Need help?</p>
            </div>
          </form>
        </section>
        <div className="w-full text-xs text-[#767676] font-medium mt-4 flex items-center">
          <span className="w-1/3 h-[1px]  bg-amazonBorder inline-flex"></span>
          <span className="w-1/3 text-center">New to Amazon?</span>
          <span className="w-1/3 h-[1px] bg-amazonBorder inline-flex"></span>
        </div>
        <div className="w-full py-4">
          <button className="w-full text-sm p-1 bg-[#fff] border border-amazonBorder shadow-amazonButtonShadow rounded-lg hover:bg-zinc-100 transform active:scale-95 transition-all ease-in-out">
            Create your Amazon account
          </button>
        </div>
      </section>
      <SignBottom />
    </div>
  );
};

export default SignIn;
