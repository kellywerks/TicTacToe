var Player = {
  create: function(name) {
    var player1 = Object.create(Player);
    this.name = name;
    return player1;
  },

  // initialize: function(name) {
  //   this.name = name;
  // }
};

var Space = {
  create: function(xCoord, yCoord) {
    var newSpace = Object.create(Space);
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    return newSpace;
  },
  // initialize: function(xCoord, yCoord) {
  //   this.xCoord = xCoord;
  //   this.yCoord = yCoord;
  // },
  markBy: function(XorO) {
    this.markedBy = XorO;
    return this.markedBy;
  }

};

var Board = {
  create: function() {
    var newBoard = Object.create(Board);
    this.spaces = [];
    return newBoard;
  },

  // initialize: function() {
  //   this.spaces = [];
  // }
};

var Game = {
  create: function(turn) {
    var newGame = Object.create(Game);
    this.turn = turn;
    return newGame;
  },

  // initialize: function(turn) {
  //   this.turn = turn;
  // }
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
      }
    }

    $("#new-board").empty().append("<table class='table table-bordered'><tr><td id='space0'>" + newBoard.spaces[0] + 
                    "</td><td id='space1'>" + newBoard.spaces[1] + 
                    "</td><td id='space2'>" + newBoard.spaces[2] + 
                    "</td></tr><tr><td id='space3'>" + newBoard.spaces[3] + 
                    "</td><td id='space4'>" + newBoard.spaces[4] + 
                    "</td><td id='space5'>" + newBoard.spaces[5] + 
                    "</td></tr><tr><td id='space6'>" + newBoard.spaces[6] + 
                    "</td><td id='space7'>" + newBoard.spaces[7] + 
                    "</td><td id='space8'>" + newBoard.spaces[8] + 
                    "</td></tr></table>"); 


  });
  if (newGame.turn % 2 === 0) {
    //FOR LOOP??
    $("#space0").click(function(event) {
      if (newBoard.spaces[0] !== "X" || newBoard.spaces[0] !== "O") {
        newBoard.spaces[0].markBy(player1);
      } else {
        alert("Ocupado. Choose again.")
        return newBoard.spaces[0];
      }
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
  };
});

