var Game = function(boardString){
  this.board = '';
  if (arguments.length === 1) {
    this.board = boardString;
  } else {
    function random() {
      return Math.floor(Math.random() * 10 + 6);
    };
    var firstTwo = random();
    var secondTwo = random();
    for ( var i = 0; i < 16; i++ ) {
      if (i === firstTwo || i === secondTwo) {
        this.board += '2';
      } else {
        this.board += '0';
      };
    };
  }
};

Game.prototype.toString = function() {
  this.board.
};
