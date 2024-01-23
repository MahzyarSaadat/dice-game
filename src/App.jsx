import React from "react"
import styled from "styled-components"
import StarterGame from "./components/StarterGame"
import GamePlay from "./components/GamePlay"
import './App.css'



function App() {
  const [GameStart , isGameStart] = React.useState(false)


  function toggle () {
    isGameStart(prev => !prev)
  }

  return (
    <>
      {GameStart ? <GamePlay /> : <StarterGame handleClick={toggle}  />}
    </>
  )
}

export default App

const Title = styled.h1`
  font-size: 2em;
  background-color: red;
`
