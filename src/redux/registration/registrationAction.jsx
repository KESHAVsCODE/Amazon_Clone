import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const registrationStart = () => {
  return { type: "registration-started" };
};

export const registrationSuccess = () => {
  return { type: "registration-success" };
};

export const registrationFailed = (payload) => {
  return { type: "registration-failed", payload };
};

// this is asyncrounous action
export const userRegistration = ({ auth, name, email, password }) => {
  return (dispatch) => {
    dispatch(registrationStart());

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
        dispatch(registrationSuccess());

        console.log(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);

        //registration failed
        dispatch(registrationFailed(errorMessage));

        // ..
      });
  };
};
