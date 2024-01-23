import styled from "styled-components"
import React from 'react'

const NumberSelector = ({ setError , error , selectedNumber , setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    console.log(selectedNumber)
 
    function numberSelectorHandler(value){
        setSelectedNumber(value);
        setError("")
    }


  return (
    
    <NumberSelelctorContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {
                arrNumber.map((val , index) => <Box
                isSelected={val === selectedNumber}
                onClick={() => numberSelectorHandler(val)} 
                key={index}
                >
                    {val}</Box>)
            }
        </div>
        <p>Select Number</p>
    </NumberSelelctorContainer>
  )
}

export default NumberSelector

const NumberSelelctorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;

    .flex{
        display: flex;
        gap: 10px;
    }

    p{
        font-size: 18px;
        font-weight: 500;
    }
    .error{
        color: red;
    }
`

const Box = styled.div`
    cursor: pointer;
    width: 72px;
    height: 72px;
    border: 1px solid #000;
    background-color: #fff;
    display: grid;
    place-items: center;
    font-size: 1.5em;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "#000" : "#fff" };
    color: ${(props) => props.isSelected ? "#fff" : "#000" };
`