import styled from "styled-components"
import React from 'react'
import {dice1, dice2, dice3, dice4, dice5, dice6} from "../assets/images/index"

const RollDice = ({currentDice , roll}) => {
    const imgesArry = ["",dice1, dice2, dice3, dice4, dice5, dice6]



  return (
    <DiceContainer>
        <img 
        onClick={roll}
        className="dice" 
        src={imgesArry[currentDice]} 
        alt="dice" 
        />
        <p>click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-size: 24px;
        font-weight: 500;
    }
    .dice{
        cursor: pointer;
    }

`