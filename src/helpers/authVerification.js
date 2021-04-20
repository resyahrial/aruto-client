export const verificationLogin = () => {
  if (localStorage.access_token) {
    return true;
  } else {
    return false;
  }
};
