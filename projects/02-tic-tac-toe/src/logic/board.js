import {WINNING_COMBOS} from '../constants.js'    


export const checkWinnerFrom = (boardToCheck) => {
  for(const combo of WINNING_COMBOS){
    const [a, b, c] = combo

    if(boardToCheck[a] && // First time check what it is [o, x]
      boardToCheck[a] === boardToCheck[b] && // Check with the new item 
      boardToCheck[a] === boardToCheck[c] // And finally check it with the last item
    ) {
      return boardToCheck[a] // Like It's already validated you can pass the beginner item checked 
    }

  } 

  // If theres no winner 
  return null
}