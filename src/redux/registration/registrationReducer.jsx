const registrationInitialState = {
  loading: false,
  register: "",
  error: "",
};

const registrationReducer = (state = registrationInitialState, action) => {
  switch (action.type) {
    case "registration-started":
      return { loading: true, register: "pending", error: "" };
    case "registration-success":
      return { loading: false, register: "success", error: "" };
    case "registration-failed":
      console.log("reducer -> failed");
      return { loading: false, register: "failed", error: action.payload };
    default:
      return state;
  }
};

export default registrationReducer;
