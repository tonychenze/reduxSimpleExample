import axios from "axios";
export function setName(name) {
  return {
    type: "SET_NAME",
    payload: name
  };
}

export function getData() {
  return dispatch => {
    axios
      .get("https://my-json-server.typicode.com/tonychenze/fake_service/limits")
      .then(response => {
        dispatch({
          type: "GET_USERS",
          payload: response.data
        });
      })
      .catch(e => {
        dispatch({
          type: "GET_USERS_ERROR",
          payload: e
        });
      });
  };
}
