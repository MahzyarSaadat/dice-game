import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import styled from 'styled-components'
import { Button, OutlineButton } from '../style/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [error , setError] = React.useState("")
  const [score , setScore] = React.useState(0)
  const [currentDice , setCurrentDice] = React.useState(1)
  const [selectedNumber , setSelectedNumber] = React.useState()
  const [showRull , setShowRull] = React.useState(false)

  function getRandomArbitrary(min, max) {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }

  function roll() {
    if(!selectedNumber) {
      setError("You have not selected any number")
      return
    }
    const randomNumber = getRandomArbitrary(1 , 7);
    setCurrentDice(prev => randomNumber)

    if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber)
    }else{
      setScore(prev => prev - 2)
    }
  }

  const resetGame = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice roll={roll} currentDice={currentDice} />
      <div className="btns">
        <OutlineButton
          onClick={resetGame}
        >reset game</OutlineButton>
        <Button onClick={() => setShowRull(prev => !prev)}>show rules</Button>
        {showRull && <Rules />}
      </div>

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top: 70px;

  .top_section{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

`