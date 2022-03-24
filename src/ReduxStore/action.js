import { DELETE_ITEM } from "./actionType";

export const deleteItem = (data) => {
  return {
    type: DELETE_ITEM,
    payload: data,
  };
};
