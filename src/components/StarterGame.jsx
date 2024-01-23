import Style, { styled } from "styled-components"
import React from 'react'
import { dicees } from "../assets/images"
import { Button } from "../style/Button"


const StarterGame = ({handleClick}) => {
  return (
    <Container>
        <img src={dicees} alt="dices" />
        <div className="content">
            <h1>Dices Game</h1>
            <Button onClick={handleClick}>play now</Button>
        </div>
    </Container>
  )
}

export default StarterGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;;
    gap: 20px;
    align-items: center;
    padding: 2em;

    .content {
        h1{
            font-size: 96px;
            font-weight: bold;
            white-space: nowrap;
        }
    }
`

