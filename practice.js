Player object {
  first one to go is X
  show Player 1 = X, Player 2 = O
}

Space object {
  function that takes coordinates clicked (Space.find(x, y)), returns space name

}



Board object {
  9 spaces 
  HTML table, each <td> is a space
  displayX method
  displayO method
}

Game object {
  createPlayer method to get 2 players
  "var turn" increment after click function
  determine whose turn - turn % 2; if even, Player 1, if odd, Player 2
  gameOver method - determines if 3 x's or 3 o's or all squares filled
}
