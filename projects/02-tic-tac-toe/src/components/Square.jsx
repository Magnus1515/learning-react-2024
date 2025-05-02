

export const Square = ({ children, isSelected, updateBoard, index}) =>{
  
  // If the square is selected otherwise just className square this to color turn 
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    // Calling handleClick function that calls updateBoard function too where its determine the new turn 
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}