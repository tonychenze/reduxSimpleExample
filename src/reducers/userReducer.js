const userReducer = (
    state = {
      name: "Tony",
      age: 27
    },
    action
  ) => {
    switch (action.type) {
      case "SET_NAME":
        state = {
          ...state,
          name: action.payload
        };
        break;
      case "SET_AGE":
        state = {
          ...state,
          age: action.payload
        };
        break;
  
      case "GET_USERS":
        state = {
          ...state,
          users: action.payload
        };
    }
    return state;
  };

  export default userReducer;