import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteItem, addItem } from "../ReduxStore/action";
import { useState } from "react";

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
  };

  return (
    <Wrapper className={cssclass}>
      <div>
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
  border-radius: 5px;
  margin-top: 5px;
  background-color: #61a4bc;
  div {
    display: flex;
    align-items: center;
  }
  .backcolour {
    background-color: #5b7db1;
    border: 3px solid blue;
  }
`;
