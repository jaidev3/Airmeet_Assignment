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
import { useState } from "react";

function FavList({ val }) {
  const [check, setCheck] = useState("");
  const dispatch = useDispatch();

  // console.log(val);
  return (
    <Wrapper>
      <div>
        <h3>{val.first_name}</h3>
      </div>

      <div>
        <button onClick={() => dispatch(deleteItem({ val, check }))}>
          delete
        </button>
      </div>
    </Wrapper>
  );
}

export default FavList;

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
