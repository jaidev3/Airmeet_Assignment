import React from "react";
import styled from "styled-components";

function FavList({ val }) {
//   let cart = localStorage.getItem("fav1");
//   const handleDelete = (val) => {
//    { cart.filter((e) => {
//       if (e.id !== val.id) {
//         return e;
//       }
//       localStorage.setItem("fav1", JSON.stringify(cart));
//     });
//   }};
  // console.log(val);
  return (
    <Wrapper>
      <div>
        <h3>{val.first_name}</h3>
      </div>

      <div>
        <button>delete</button>
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
  border-radius: 5px;
  margin-top: 5px;
  background-color: #61a4bc;
  div {
    display: flex;
    align-items: center;
  }
  .backcolour {
    background-color: #5b7db1;
  }
`;
