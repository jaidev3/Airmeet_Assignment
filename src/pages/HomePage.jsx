import React from 'react'
import NameList from '../components/NameList'
function homePage({value}) {
  // console.log(value)
  return (
    <div>


      {value.map((e)=>
        <NameList key={e.id} val={e}/>
      )}
      
    </div>
  )
}

export default homePage
