import {
  DELETE_ITEM,
  GET_ITEM_ERROR,
  GET_ITEM_LOADING,
  GET_ITEM_SUCCESS,
} from "./actionType";

export const deleteItem = (data) => {
  return {
    type: DELETE_ITEM,
    payload: data,
  };
};
export const getItemLoading = (data) => ({
  type: GET_ITEM_LOADING,
  payload: data,
});
export const getItemSuccess = (data) => ({
  type: GET_ITEM_SUCCESS,
  payload: data,
});

export const getItemError = (data) => ({
  type: GET_ITEM_ERROR,
  payload: data,
});
