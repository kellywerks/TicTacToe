var Player = {
  create: function() {
    var newPlayer = Object.create(Player);
    return newPlayer;
  },

  initialize: function(symbol) {
    this.symbol = symbol;
  }
};

var Space = {
  create: function() {
    var newSpace = Object.create(Space);
    return newSpace;
  },
  initialize: function(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  },
  markBy: function(XorO) {
    this.markedBy = XorO;
    return this.markedBy;
  }

};

var Board = {
  create: function() {
    var newBoard = Object.create(Board);
    //this.spaces = [];
    return newBoard;
  },

  initialize: function() {
     this.spaces = [];
  }
};

var Game = {
  create: function(turn) {
    var newGame = Object.create(Game);
    return newGame;
  },

  initialize: function(turn) {
     this.turn = turn;
     this.markedSpaces=[];
  },

  isWin: function(turn,markedSpaces) {
    var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    if (turn % 2 === 0)
      var symbolFinds = [];
      var symbolFind = this.markedSpaces.indexOf("X");
      console.log(symbolFinds);
      while (symbolFind !== -1) {
        symbolFinds.push(symbolFind);
        symbolFind = symbolFinds.indexOf("X", symbolFind + 1);
        
      }
      console.log(symbolFinds);
//       for (var i = 0; i < 9; i++) {
//         foundSymbol=symbolFinds.indexOf("X")
//         symbolFinds.push(foundSymbol);
//       }
// console.log(symbolFinds);
      // this.markedSpaces.forEach(function(space) {
      //   if (space = "X") {
      //     console.log(this.markedSpaces.indexOf(space));
      //     // symbolFinds.push();
      //   };
      // });

      
      var winOrLose = wins.indexOf(symbolFinds);
      //console.log(winOrLose);
      if (winOrLose != -1) {
        return true;
      }

    if (turn === 9) {
      return false;  
    }    
  }
};


$(document).ready(function() {
  $("#new-game").click(function(event) {
    event.preventDefault();

    var newGame = Game.create();
    newGame.initialize(0);

    var player1 = Player.create();
    player1.initialize("X");

    var player2 = Player.create();
    player2.initialize("O");
  
    var newBoard = Board.create();
    newBoard.initialize([]);

    for (r = 0; r < 3; r++) {
      for (c = 0; c < 3; c++) {
        var newSpace = Space.create();
        newSpace.initialize(r,c);
        newBoard.spaces.push(newSpace);
        newGame.markedSpaces = newBoard.spaces;
      }
    }
    $("#new-board").empty().append("<table class='table table-bordered'>" + 
                    "<tr><td id='space0'><span></span></td>" + 
                    "<td id='space1'><span></span></td>" + 
                    "<td id='space2'><span></span></td></tr>" + 
                    "<tr><td id='space3'><span></span></td>" + 
                    "<td id='space4'><span></span></td>" + 
                    "<td id='space5'><span></span></td></tr>" + 
                    "<tr><td id='space6'><span></span></td>" + 
                    "<td id='space7'><span></span></td>" + 
                    "<td id='space8'><span></span></td></tr></table>"); 
  
    $("#space0").click(function(event) {
      if (newGame.turn % 2 === 0) {
        if ((newGame.markedSpaces[0] !== "X") && (newGame.markedSpaces[0] !== "O")) {
          $("#space0").empty().append(player1.symbol);
          newGame.markedSpaces[0]=player1.symbol;
          newGame.turn++;
          console.log(newGame.turn);
          if (newGame.turn === 9) {
            alert("Game Over");
          }

        } else {
          alert("Ocupado. Choose again.")
          //return newBoard.spaces[0];
        };
      };
    });
    $("#space1").click(function(event) {
    
    });
    $("#space2").click(function(event) {
    
    });
    $("#space3").click(function(event) {
    
    });
    $("#space4").click(function(event) {
    
    });
    $("#space5").click(function(event) {
    
    });
    $("#space6").click(function(event) {
    
    });
    $("#space7").click(function(event) {
    
    });
    $("#space8").click(function(event) {
    
    });
  });

  
});

