describe ("Player", function() {
  describe ("create", function() {
    it("creates a player", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);

      testPlayer.name.should.equal("X");
    }); 
  });
  // describe("initialize", function() {
  //   it("initializes the Player object", function() {
  //     var testPlayer = Object.create(Player);
  //     testPlayer.initialize("X");
  //     testPlayer.name.should.equal("X");
  //   });
  // });
});

describe("Space", function() {
  describe("create", function() {
    it("creates a Space object", function() {
      var testSpace = Space.create(1,1);
      Space.isPrototypeOf(testSpace).should.equal(true);

      testSpace.xCoord.should.equal(1);
      testSpace.yCoord.should.equal(1);
    });
  });

  // describe("initialize", function() {
  //   it("initialize a new Space instance", function(){
  //     var testSpace = Object.create(Space);
  //     testSpace.initialize(1,1);
  //     console.log(testSpace)
  //     testSpace.xCoord.should.equal(1);
  //     testSpace.yCoord.should.equal(1);

  //   });
  // });

  describe("markBy", function() {
    it("marks the players symbol in the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(2,0);
      
      testSpace.markBy(testPlayer);

      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});  

describe ("Board", function() {
  describe ("create", function() {
    it("creates a new Board", function() {
      var testBoard = Board.create([]);
      Board.isPrototypeOf(testBoard).should.equal(true);

      testBoard.spaces.should.eql([]);
    }); 
  });

  // describe("initialize", function() {
  //   it("initializes the Board object", function() {
  //     var testBoard = Object.create(Board);
  //     testBoard.initialize([]);
  //     testBoard.spaces.should.eql([]);
  //   });
  // });
});

describe("Game", function() {
  describe("create", function() {
    it("creates a new Game", function() {
      var testGame = Game.create(0);
      Game.isPrototypeOf(testGame).should.equal(true);
      testGame.turn.should.equal(0);
    });
  });

  // describe("initialize", function() {
  //   it("initializes a new Game", function() {
  //     var testGame = Object.create(Game);
  //     testGame.initialize(0);
  //     testGame.turn.should.equal(0);
  //   });
  // });
});
