import { DELETE_ITEM } from "./actionType";

const initState = { loading: false, item: "", errors: false };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DELETE_ITEM:
      return {
        ...state,
        item: payload,
      };

    default:
      return state;
  }
};

export { reducer };
