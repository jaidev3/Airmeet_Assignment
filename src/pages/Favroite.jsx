import React from 'react'
import {Link} from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";
import {
  getItemError,
  getItemLoading,
  getItemSuccess,
} from "../ReduxStore/action";

function Favroite() {
    const {fav} = useSelector((state) => ({
        fav: state.fav,
      }));
  return (
    <div>
      <Link to='/'> <button>Go back to Home</button> </Link> 
      {fav.length==0 ?(<h1>No Favroite Item</h1>):(<h1>Yes</h1>)}
    </div>
  )
}

export default Favroite
