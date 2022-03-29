import React from 'react'
import GameBoard from '../GameBoard/GameBoard';

const Pokemem = () => {
  return (
    
    <div style={{
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '90vh'}}>
      <div class="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </div><div>
      <h1>Pokemon Memory Game</h1>
      <div></div>
      <GameBoard></GameBoard>
      </div></div>
  )
}

export default Pokemem