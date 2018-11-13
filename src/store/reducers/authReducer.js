const initialState = {
  signupFailed: false,
  signinFailed: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log("Signup Successful");
      return {
        ...state,
        signupFailed: false
      };
    case "SIGNUP_FAILED":
      console.log("Signup failed!");
      return {
        ...state,
        signupFailed: true,
        error: action.error
      };
    case "SIGNIN_SUCCESS":
      console.log("Signin Successful");
      return {
        ...state,
        signinFailed: false
      };
    case "SIGNIN_FAILED":
      console.log("Signin failed!");
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
