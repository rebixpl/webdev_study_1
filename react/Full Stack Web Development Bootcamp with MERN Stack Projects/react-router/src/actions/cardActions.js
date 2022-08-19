import axios from "axios";

export const deleteCard = (id) => {
  return { type: "DELETE_CARD", id };
};

export const fetchUsers = () => {
  // ware are able to return a javascript function only with the redux thunk
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch({ type: "FETCH_USERS", payload: data });
    });
  };
};
