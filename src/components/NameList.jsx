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
import { useEffect } from "react";

function NameList({ val }) {
  const [check, setCheck] = useState("");
  const [cssclass, setCssclass] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {


    
    if (cssclass == "backcolour") {
      setCssclass("");
    } else {
      setCssclass("backcolour");
    }

    setCheck(e);

    console.log(cssclass);
    console.log(e);
  };
  // console.log(val);

  return (
    <Wrapper>
      <div className={cssclass}>
        <input
          type="checkbox"
          value="checked"
          onChange={() => handleChange(val)}
        />
        <h3>{val.first_name}</h3>
      </div>

      <div className={cssclass}>
        <button onClick={() => dispatch(addItem(val))}>Add to fav</button>

        <button onClick={() => dispatch(deleteItem({ val, check }))}>
          delete
        </button>
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
  .backcolour {
    background-color: hsla(50, 33%, 25%, .75);
    z-index: 1;
  }
`;
