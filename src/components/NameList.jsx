import React from 'react'
import styled from 'styled-components'
function NameList({val}) {
  console.log(val)
  return (
    <Wrapper>
      <div>
      <input type="checkbox" />
      <h3>{val.first_name}</h3>
      </div>
      
      <div>
      <button>delete</button>
      <button>Add to fav</button>
      </div>
     
    </Wrapper>
  )
}

export default NameList

const Wrapper =styled.div`
height: 50px;
width: 500px;
border: 1px solid black;
margin: auto;
gap: 10px;
display: flex;
align-items: center;
justify-content: space-between;
div{
  display: flex;
  align-items: center;
}
`