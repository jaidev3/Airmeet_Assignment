import React from 'react'

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
      {fav.length==0 ?(<h1>No Favroite Item</h1>):(<h1>Yes</h1>)}
    </div>
  )
}

export default Favroite
