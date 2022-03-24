import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavList from "../components/FavList";
import { useSelector, useDispatch } from "react-redux";

function Favroite() {
  const { fav } = useSelector((state) => ({
    fav: state.fav,
  }));
  const [data, setData] = useState([]);
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
