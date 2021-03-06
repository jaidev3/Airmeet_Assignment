import React from "react";
import { useEffect, useState } from "react";
import NameList from "../components/NameList";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getItemError,
  getItemLoading,
  getItemSuccess,
} from "../ReduxStore/action";

function HomePage() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { loading, item, error } = useSelector((state) => ({
    loading: state.loading,
    item: state.item,
    error: state.error,
  }));

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch(getItemLoading());
    fetch("https://namelistmasai.herokuapp.com")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        dispatch(getItemSuccess(res));
      })
      .catch((err) => {
        dispatch(getItemError(err));
      });
  };

  return (
    <Wrapper>
      <Link to="/fav">
        <button>Favroite</button>{" "}
      </Link>
      {loading ? (
        <h1>Loading..........</h1>
      ) : (
        <div>
          {item.map((e) => (
            <NameList key={e.id} val={e} />
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  background-color: hsla(50, 33%, 25%, 0.75);
  width: 70%;
  margin: auto;
`;
