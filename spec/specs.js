describe ("Player", function() {
  describe ("create", function() {
    it("creates a player", function() {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);

    }); 
  });
  describe("initialize", function() {
    it("initializes the Player object", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
});

describe("Space", function() {
  describe("create", function() {
    it("creates a Space object", function() {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true);

    });
  });

  describe("initialize", function() {
    it("initialize a new Space instance", function(){
      var testSpace = Object.create(Space);
      testSpace.initialize(1,1);
      console.log(testSpace)
      testSpace.xCoord.should.equal(1);
      testSpace.yCoord.should.equal(1);

    });
  });

  describe("markBy", function() {
    it("marks the players symbol in the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(2,0);
      console.log(testSpace)
      testSpace.markBy(testPlayer);
      console.log(testSpace)
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});  

describe ("Board", function() {
  describe ("create", function() {
    it("creates a new Board", function() {
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);

    }); 
  });

  describe("initialize", function() {
    it("initializes the Board object", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize([]);
      testBoard.spaces.should.eql([]);
    });
  });
});

describe("Game", function() {
  describe("create", function() {
    it("creates a new Game", function() {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });

  describe("initialize", function() {
    it("initializes a new Game", function() {
      var testGame = Object.create(Game);
      testGame.initialize(0);
      testGame.turn.should.equal(0);
    });
  });
  describe("isWin", function() {
    it("returns false after 9 turns", function() {
      var testGame = Game.create();
      testGame.initialize(9);
      testGame.isWin(9).should.equal(false);
    });
    it("return true if win condition is met", function() {
      var testGame = Game.create();
      testGame.markedSpaces=["X","X","X",[1,0],"O",[1,2],"O",[2,1],[2,2]];
      testGame.isWin(4,testGame.markedSpaces).should.equal(true);
    });    
  });
});
