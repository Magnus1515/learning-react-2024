import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx";
import {WINNING_COMBOS, TURNS} from 'constant.js'
import {checkWinner} from './logic/board.js'

function App() {
  // Changing static array to a useState for handling changes in the board like normal game
  //const board = Array(9).fill(null)

  const [board, setBoard] = useState(Array(9).fill(null)) 

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // Can be null if the game is tied

  const checkEndGame = (newBoard) => {
    // Check if there's more free spaces in the board 
    //It's done by checking if every position is different than null
    return newBoard.every((square) => square !== null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {

    if(board[index] || winner){
      return
    }
    
    // copy the board array because we don't need to change the original array are immutable
    const newBoard = [...board]
    // Asigning in the newBoard the turn 
    newBoard[index] = turn
    // Setting the newBoard for the state
    setBoard(newBoard)
    // If turns equals x is 'o' otherwise is x
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      console.log(winner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) // Game is tied 
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Reset the game </button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <section>
        <WinnerModal/>
      </section>
    </main>
  )
}

export default App
