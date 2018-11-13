const initialState = {
  signupFailed: false,
  signinFailed: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signupFailed: false
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        signupFailed: true,
        error: action.error
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        signinFailed: false
      };
    case "SIGNIN_FAILED":
      return {
        ...state,
        signinFailed: true,
        error: action.error
      };
    case "SIGN_OUT_SUCCESS":
      console.log("Successfully signout");
      return state;
    case "SIGN_OUT_FAILED":
      console.log("Signout failed!", action.error);
      return state;

    default:
      return state;
  }
};

export default authReducer;
