import React from 'react'
import styled from 'styled-components'
function NameList({val}) {
  console.log(val)
  return (
    <Wrapper>
      <input type="checkbox" />
      <h1>{val.first_name}</h1>
    </Wrapper>
  )
}

export default NameList

const Wrapper =styled.div`
height: 30px;
width: 300px;
border: 1px solid black;
margin: auto;
gap: 10px;
`