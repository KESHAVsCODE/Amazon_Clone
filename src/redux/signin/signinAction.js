export const signinStart = () => {
  return { type: "signin-started" };
};

export const signinSuccess = (payload) => {
  return { type: "signin-success", payload };
};

export const signinFailed = (payload) => {
  return { type: "signin-failed", payload };
};
