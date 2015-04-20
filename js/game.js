var Game = function(boardString){
  var board = '';
  this.board = '';
  if (arguments.length === 1) {
    this.board = this.toArray(boardString);
  } else {
    function random() {
      return Math.floor(Math.random() * 10 + 6);
    };
    var firstTwo = random(), secondTwo = random();
    for ( var i = 0; i < 16; i++ ) {
      if (i === firstTwo || i === secondTwo) {
        board += '2';
      } else {
        board += '0';
      };
    };
    this.board = this.toArray(board);
  }
};

Game.prototype = {

  toString: function() {
    this.board.forEach(function(row) {
      console.log(row.join(''));
    });
  },

  toArray: function(chars) {
    var boardArray = [];
    for( var i = 0; i < 16; i += 4) {
      var subarray = chars.slice(0 + i, 4 + i);
      boardArray.push(subarray.split(''));
    }
    return boardArray;
  }
};

