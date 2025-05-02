
export function WinnerModal() {

  if(winner === null ) return null

  return(
    <section className="winner">
      <div className="text">
          <h2>
            {
              winner === false ? 'Empate ' : 'Ganador ' + winner
            }
          </h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          {/* This reset is inside the modal after one turn win */}
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
           
  )
} 
