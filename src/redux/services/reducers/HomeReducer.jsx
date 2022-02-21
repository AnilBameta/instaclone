import { NEW_POST } from "../constants";
const initialState = {
  postData: [],
};
const Value = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
      console.log(state);
      return {
        ...state,
        postData: action.data,
      };
    default:
      return state;
  }
};
export default Value;
