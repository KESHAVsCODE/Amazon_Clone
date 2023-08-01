import { useState, useRef, useEffect } from "react";
import { logoDark } from "../../assets/images";
import SignBottom from "./SignBottom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { NavLink } from "react-router-dom";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.config";

const CreateAccount = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSignupSuccess, setSignupSuccess] = useState("Pending");

  const navigate = useNavigate();

  const auth = getAuth();

  const nameRef = useRef({});
  const emailRef = useRef({});
  const phoneRef = useRef({});
  const passwordRef = useRef({});

  const [userDetailsErrors, setUserDetailsErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  });

  // const resetInputField = () => {
  //   nameRef.current.value = "";
  //   emailRef.current.value = "";
  //   phoneRef.current.value = "";
  //   passwordRef.current.value = "";
  // };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  };

  const handleFormSubmitClick = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;

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

    if (
      errors.nameError ||
      errors.emailError ||
      errors.phoneError ||
      errors.passwordError
    ) {
      setUserDetailsErrors({ ...errors });
      setSignupSuccess("Pending");
      return;
    } else {
      //if error not exists this will remove the previous errors
      setUserDetailsErrors({ ...errors });
    }

    //registration started
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Set the user's name (displayName)
        updateProfile(user, {
          displayName: name,
          photoURL: "", // You can optionally set a photo URL as well
        })
          .then(() => {
            console.log("Name (displayName) set successfully.");
          })
          .catch((error) => {
            console.error("Error setting name (displayName):", error);
          });

        //registration successful
        setLoading(false);
        setSignupSuccess("Success");

        setTimeout(() => {
          setSignupSuccess("Pending");
          navigate("/signin");
        }, 2000);

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

        //registration failed
        setLoading(false);
        setSignupSuccess("Failed");
      });
  };

  return (
    <div className="h-screen ">
      <section className="w-[350px] mx-auto flex flex-col items-center">
        <NavLink to="/">
          <div>
            <img className="w-32 py-2" src={logoDark} alt="website-logo" />
          </div>
        </NavLink>

        {isLoading ? (
          <h1 className="text-lg mx-auto">Loading...</h1>
        ) : isSignupSuccess === "Success" ? (
          <div
            className={`fixed bottom-4 right-4 p-4 bg-green-500 rounded shadow-lg transition-opacity duration-500`}
          >
            Registration successful!
          </div>
        ) : isSignupSuccess === "Failed" ? (
          <Error email={emailRef.current.value} />
        ) : (
          ""
        )}

        <section className="border border-amazonBorder rounded-lg px-6 py-4">
          <form
            noValidate
            action=""
            className="grid gap-3"
            onSubmit={(e) => e.preventDefault()}
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
                ref={nameRef}
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
                ref={emailRef}
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
                ref={phoneRef}
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
                ref={passwordRef}
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
            <NavLink to="/signin">
              <p className="text-sm">
                Already have an account?{" "}
                <span className="defaultLink">
                  Sign in
                  <ArrowRightIcon
                    style={{ fontSize: "16px", marginBottom: "2px" }}
                  />
                </span>
              </p>
            </NavLink>
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
