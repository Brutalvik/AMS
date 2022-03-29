import axios from "axios";
import { registerActions } from "./registerReducer";
import { logicActions } from "./logicReducer";

const postURL = process.env.REACT_APP_POST_URL;

export const postUser = (user) => {
  return async (dispatch) => {
    dispatch(logicActions.setLoading(true));
    const sendRequest = async () => {
      const response = await axios.post(`${postURL}/api/register`, user);
      console.log(response);
      return response;
    };

    try {
      await sendRequest().then((response) => {
        if (response.status === 200) {
          dispatch(registerActions.registerUser(user));
          dispatch(logicActions.setMessage({ message: response.data.message }));
          dispatch(logicActions.setLoading(false));
        } else {
          dispatch(
            logicActions.setMessage({
              status: response.status,
              message: "Registration failed",
            })
          );
          dispatch(logicActions.setLoading(false));
        }
      });
    } catch (err) {
      console.log(err.response);
      dispatch(
        logicActions.setMessage({
          status: err.response.status,
          statusText: err.response.statusText,
          message: err.response.data.message,
        })
      );
    }
  };
};