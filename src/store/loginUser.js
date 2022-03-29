import axios from "axios";
import { logicActions } from "./logicReducer";
import { authActions } from "./authReducer";

const postURL = process.env.REACT_APP_POST_URL;

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch(logicActions.setLoading(true));
    const sendRequest = async () => {
      const response = await axios.post(`${postURL}/api/login`, user);
      return response;
    };

    try {
      await sendRequest().then((response) => {
        if (response.status === 200) {
          dispatch(authActions.authUser(user));
          // console.log(response.data);
          localStorage.setItem("authUser", JSON.stringify(response.data));
          dispatch(
            logicActions.setMessage({
              status: response.status,
              message: response.data.message,
            })
          );
          dispatch(authActions.setIsAuthenticated(true));
          dispatch(authActions.setIsLoggedIn(true));
          dispatch(logicActions.setLoading(false));
        }
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
