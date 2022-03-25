import {
  DELETE_ITEM,
  GET_ITEM_ERROR,
  GET_ITEM_LOADING,
  GET_ITEM_SUCCESS,
  ADD_ITEM_FAVORITE,
  DELETE_FAV_ITEM
} from "./actionType";

export const deleteItem = (data) => ({
  type: DELETE_ITEM,
  payload: data,
});
export const addItem = (data) => ({
  type: ADD_ITEM_FAVORITE,
  payload: data,
});
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
export const deleteFavItem = (data) => ({
  type: DELETE_FAV_ITEM,
  payload: data,
});

