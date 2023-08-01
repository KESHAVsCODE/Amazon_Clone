const signinInitialState = {
  loading: false,
  userDetails: {},
  error: "",
};

const signinReducer = (state = signinInitialState, action) => {
  switch (action.type) {
    case "signin-started":
      return { ...state, loading: true };
    case "signin-success":
      return { ...state, loading: false, userDetails: action.payload };
    case "signin-failed":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default signinReducer;
