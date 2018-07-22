const defaultUser = {
  email: ""
};

const signinReducer = (state = defaultUser, action = {}) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, user: action.data };
    default:
      return state;
  }
};
export default signinReducer;
