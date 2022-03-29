import axios from "axios";
import { logicActions } from "./logicReducer";

const postURL = process.env.REACT_APP_POST_URL;

export const loginUser = async (user) => {
  return (dispatch) => {
    dispatch(logicActions.setLoading(true));
    const sendRequest = () => {};
  };
};
