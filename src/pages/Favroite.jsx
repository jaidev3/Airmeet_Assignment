import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavList from "../components/FavList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Favroite() {
  const { fav } = useSelector((state) => ({
    fav: state.fav,
  }));

  // const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   if (localStorage.getItem("fav1") === null) {
  //     localStorage.setItem("fav1", JSON.stringify([]));
  //   }

  //   if (fav.length != 0) {
  //     localStorage.setItem("fav1", JSON.stringify(fav));
  //   }
  //   let cart1 = JSON.parse(localStorage.getItem("fav1"));
  //   setCart(cart1);
  // }, []);

  // console.log(cart, "cart");
  // console.log(fav);

  return (
    <div>
      <Link to="/">
        {" "}
        <button>Go back to Home</button>{" "}
      </Link>

      {fav.length == 0 ? (
        <h1>No Favorite Added</h1>
      ) : (
        <div>
          {fav.map((e) => (
            <FavList key={e.id} val={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favroite;
