import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    
    <RulesContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
    max-width: 800px;
    margin-top: 20px;
    padding: 1em;
    background-color: #FBF1F1;
    border-radius: 10px;

    h2{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 2em;
    }

`