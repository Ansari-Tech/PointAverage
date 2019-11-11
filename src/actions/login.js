import * as actionTypes from "./actionTypes";
export const loginRequest = credentials => {
  console.log(credentials.username + " , " + credentials.password);
  return {
    type: actionTypes.LOGIN_REQUEST
  };
};
