import {
  DELETE_ITEM,
  GET_ITEM_ERROR,
  GET_ITEM_LOADING,
  GET_ITEM_SUCCESS,
  ADD_ITEM_FAVORITE,
} from "./actionType";

const initState = { loading: false, item: [], fav: [], errors: false };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ITEM_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ITEM_SUCCESS: {
      return {
        ...state,
        item: payload,
        loading: false,
      };
    }
    case GET_ITEM_ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    case DELETE_ITEM:
      console.log(payload)
      return {
        ...state,
        item: state.item.filter((el) => {

          if (el.id !== payload) {
            return el;
          }
        }),
      };
    case ADD_ITEM_FAVORITE:
      return {
        ...state,
        fav: [...state.fav,payload]
      };
    default:
      return state;
  }
};

export { reducer };
