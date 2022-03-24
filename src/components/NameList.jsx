import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getItemError,
  getItemLoading,
  getItemSuccess,
  deleteItem,
  addItem,
} from "../ReduxStore/action";

function NameList({ val }) {
  const dispatch = useDispatch();
  const { loading, item, error } = useSelector((state) => ({
    loading: state.loading,
    item: state.item,
    error: state.error,
  }));

  // console.log(val);
  return (
    <Wrapper>
      <div>
        <input type="checkbox" />
        <h3>{val.first_name}</h3>
      </div>

      <div>
        <button onClick={()=>dispatch(addItem(val))}>Add to fav</button>

        <button onClick={()=>dispatch(deleteItem(val.id))}>delete</button>
      </div>
    </Wrapper>
  );
}

export default NameList;

const Wrapper = styled.div`
  height: 50px;
  width: 500px;
  border: 1px solid black;
  margin: auto;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;
