import React from "react";
import { useEffect, useState } from "react";
import NameList from "../components/NameList";
import { useSelector, useDispatch } from "react-redux";
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
  // console.log(data)

  return (
    <div>
      {loading ? (
        <h1>Loading..........</h1>
      ) : (
        <div>
          {data.map((e) => (
            <NameList key={e.id} val={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
