const defaultUser = {
  email: "",
  userId: "",
  notebooks: []
};

const signinReducer = (state = defaultUser, action = {}) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, email: action.email, userId: action.userId };
    case "ADD_NOTEBOOK":
      return { ...state, notebooks: state.notebooks.concat([action.data]) };
    case "NOTEBOOKS_GET":
      return { ...state, notebooks: state.notebooks.concat([action.data]) };
    default:
      return state;
  }
};
export default signinReducer;
