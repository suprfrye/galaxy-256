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
      var subarray = chars.slice(i, 4 + i);
      boardArray.push(subarray.split(''));
    }
    return boardArray;
  },

  filterZeros: function(matrix) {
    filtered = []
    matrix.forEach(function(row) {
      filtered.push(row.filter(function(value) {
        return value !== '0';
      }));
    });
    return filtered
  },

  leftAddNumbers: function(subarrays) {
    subarrays.forEach(function(arr) {
      if (arr.length > 1){
        for(var i = 0; i < arr.length; i++){
          if (arr[i] === arr[i+1]){
            arr[i] = (parseInt(arr[i]) + parseInt(arr[i+1])).toString();
            arr.splice(i+1, 1);
          }
        }
      }
    })
    return subarrays;
  },

  rightAddNumbers: function(subarrays) {
    subarrays.forEach(function(arr) {
      if (arr.length > 1){
        for(var i = arr.length - 1; i > 0; i--) {
          if (arr[i] === arr[i-1]){
            arr[i] = (parseInt(arr[i]) + parseInt(arr[i-1])).toString();
            console.log(arr[i]);
            arr.splice(i-1, 1);
          }
        }
      }
    })
    return subarrays;

  },

  move: function(dir) {
    switch (dir) {
      case 'left':
        this.board = this.leftAddNumbers(this.filterZeros(this.board))
        this.board.forEach(function(row) {
          for( var i = 0; row.length < 4; i++ ) {
            row.push('0');
          }
        })
        break;
      case 'right':
        this.board = this.rightAddNumbers(this.filterZeros(this.board))
        this.board.forEach(function(row) {
          for( var i = 0; row.length < 4; i++ ) {
            row.unshift('0');
          }
        })
        break;
      case 'up':
        var transposedArray = _.zip.apply(null, this.board);
        transposedArray = this.filterZeros(transposedArray)
        transposedArray.forEach(function(row) {
          for( var i = 0; row.length < 4; i++ ) {
            row.push('0');
          }
        })
        this.board = _.zip.apply(null, transposedArray);
        break;
      case 'down':
        var transposedArray = _.zip.apply(null, this.board);
        transposedArray = this.filterZeros(transposedArray)
        transposedArray.forEach(function(row) {
          for( var i = 0; row.length < 4; i++ ) {
            row.unshift('0');
          }
        })
        this.board = _.zip.apply(null, transposedArray);
        break;
    }
  }
};

