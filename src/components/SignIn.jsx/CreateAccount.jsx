import { useState } from "react";
import { logoDark } from "../../assets/images";
import SignBottom from "./SignBottom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const CreateAccount = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userDetailsErrors, setUserDetailsErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  };
  const handleFormSubmitClick = () => {
    const { name, email, phone, password } = userDetails;
    const errors = {
      nameError: name ? "" : "Enter your name",
      emailError: email
        ? isValidEmail(email)
          ? ""
          : "Enter a valid email address"
        : "Enter your email",
      phoneError: phone
        ? Number(phone)
          ? ""
          : "Enter a valid mobile number"
        : "",
      passwordError: password
        ? password.length > 5
          ? ""
          : "Passwords must be at least 6 characters"
        : "Enter your password",
    };
    setUserDetailsErrors({ ...errors });
    console.log(userDetails);
  };

  return (
    <div className="h-screen ">
      <section className="w-[350px] mx-auto flex flex-col items-center">
        <div>
          <img className="w-32 py-2" src={logoDark} alt="website-logo" />
        </div>

        <section className="border border-amazonBorder rounded-lg px-6 py-4">
          <form
            action=""
            className="grid gap-3"
            onSubmit={(e) => e.preventDefault()}
            onChange={handleInputChange}
          >
            <h2 className="text-[28px] font-medium">Create Account</h2>

            <div>
              <label htmlFor="name" className="text-sm leading-4 font-medium">
                Your name
              </label>
              <input
                className="inputBox"
                type="text"
                name="name"
                id="name"
                placeholder="First and last name"
                value={userDetails.name}
              />
              {userDetailsErrors.nameError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.nameError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm leading-4 font-medium">
                Email
              </label>
              <input
                className="inputBox"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={userDetails.email}
              />
              {userDetailsErrors.emailError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.emailError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm leading-4 font-medium">
                Mobile number (optional)
              </label>
              <input
                className="inputBox"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Mobile number"
                value={userDetails.phone}
              />
              {userDetailsErrors.phoneError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.phoneError}
                </p>
              )}
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
                placeholder="At least 6 characters"
                value={userDetails.password}
              />
              {userDetailsErrors.passwordError ? (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.passwordError}
                </p>
              ) : (
                <div className="text-xs mt-1">
                  <span className="text-blue-600 text-sm italic pl-1 pr-2 font-serif font-semibold">
                    i
                  </span>
                  Passwords must be at least 6 characters.
                </div>
              )}
            </div>

            <p className="text-sm py-3">
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>

            <button
              type="submit"
              className="amazonButton"
              onClick={handleFormSubmitClick}
            >
              Continue
            </button>
          </form>
          <div className="mt-8 pt-5 border-t-[1px] bg-zinc-100 bg-gradient-to-t from-white via-white to-zinc-100">
            <p className="text-sm">
              Already have an account?{" "}
              <span className="defaultLink">
                Sign in
                <ArrowRightIcon style={{ fontSize: "16px" }} />
              </span>
            </p>
            <p className="text-xs pt-4">
              By creating an account or logging in, you agree to Amazon’s{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
                className="defaultLink"
              >
                Conditions of Use{" "}
              </a>
              and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
                className="defaultLink"
              >
                Privacy Notice
              </a>
            </p>
          </div>
        </section>
      </section>
      <SignBottom />
    </div>
  );
};

export default CreateAccount;
