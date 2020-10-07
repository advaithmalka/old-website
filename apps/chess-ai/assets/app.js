const chessBoard = $("#board")
chessBoard.hide()
chessBoard.css({
  'transition': '500ms',
  'opacity': '0'
})
const blackToWin = 'n1bbk3/1p2n3/r6r/1q3pp1/3p4/1p3p2/5P2/3n2K1 b - - 13 62'; // one move from stale mate
const position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' //starting position
// const position = 'rnbqkb1r/pppppp2/5np1/6N1/8/2N3PB/PPPPP2P/R1BQK2R w KQkq - 3 6'

const chess = new Chess(position)
boardTheme = {
  'natural': ['#FFF', '#58AC8A'],
  'metro': ['#FFFFFF', '#5ca8ff'],
  'contrast': ['#FFF', '#5c5c5c'],
  'royal': ['#FFF', '#f2c305'],
  'retro': ['#F0DAB5', '#B58763'],
  'halloween': ['#fcbd6a', '#424242']
}
var theme;
if (localStorage.getItem('boardTheme') === null) {
  theme = $('#theme-select').val()
} else {
  theme = localStorage.getItem('boardTheme')
  $(`#theme-select option[value=${theme}]`).prop('selected', true)
}

var computerFunction;

const determineCompFunc = e => {
  switch (String($('#ai-diff').val())) {
    case '0':
      computerFunction = randomMove
      localStorage.setItem('computerFunction', 'randomMove')
      console.log('Running random move')
      break;
    case '1':
      computerFunction = baby
      localStorage.setItem('computerFunction', 'baby')
      console.log('Running backend baby')
      break;
    case '2':
      computerFunction = minimax
      localStorage.setItem('computerFunction', 'minimax')
      console.log('Running minimax')
      break;
    case '3':
      computerFunction = minimaxPlus
      localStorage.setItem('computerFunction', 'minimaxPlus')
      console.log('Running minimax++')
      break;
  }
}
const aiRange = document.getElementById('ai-diff')
switch (localStorage.getItem('computerFunction')) {
  case 'randomMove':
    aiRange.value = 0
    break;
  case 'baby':
    aiRange.value = 1
    break;
  case 'minimax':
    aiRange.value = 2
    break
  case 'minimaxPlus':
    aiRange.value = 3
    break;
}

const off = e => {
  void(0)
}
const minimaxPlus = e => {
  void(0)
}

$("#ai").change(function () {
  if (!document.getElementById('ai').checked) {
    $("#ai-diff").prop('disabled', true)
    computerFunction = off
    localStorage.removeItem('ai')
  } else {
    localStorage.setItem('ai', 'on')
    $("#ai-diff").prop('disabled', false)
    determineCompFunc()
  }
})
// SECTION ai selection
$("#ai-diff").change(function () {
  determineCompFunc()
})
if (!document.getElementById('ai').checked) {
  $("#ai-diff").prop('disabled', true)
} else {
  $("#ai-diff").prop('disabled', false)
}


const boardVal = () => {
  let e = 0;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      e += pieceVals(chess.board()[i][j]);
    }
  }
  return e;
}
const _boardVal = () => {
  let e = 0;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      e += _pieceVals(chess.board()[x][y], x, y);
    }
  }
  return e;
}
const pieceVals = p => {
  if (p === null) return 0
  var pval;
  switch (String(p.type)) {
    case 'p':
      pval = 10
      break;
    case 'n':
      pval = 30
      break;
    case 'b':
      pval = 30
      break;
    case 'r':
      pval = 50
      break;
    case 'q':
      pval = 90
      break;
    case 'k':
      pval = 9999
      break;
  }
  return p.color === 'w' ? pval : -pval;
};
var white;

const _pieceVals = (p, x, y) => {
  if (p === null) return 0
  p.color === 'w' ? white = true : white = false
  var pval;
  switch (String(p.type)) {
    case 'p':
      pval = 10 + (white ? evals.pawn.w[y][x] : evals.pawn.b()[y][x])
      break;
    case 'n':
      pval = 30 + evals.knight[y][x]
      break;
    case 'b':
      pval = 30 + (white ? evals.bishop.w[y][x] : evals.bishop.b()[y][x])
      break;
    case 'r':
      pval = 50 + (white ? evals.rook.w[y][x] : evals.rook.b()[y][x])
      break;
    case 'q':
      pval = 90 + evals.queen[y][x]
      break;
    case 'k':
      pval = 9999 + (white ? evals.king.w[y][x] : evals.king.b()[y][x])
      break;
  }
  return p.color === 'w' ? pval : -pval;
};

const randomMove = e => {
  let allMoves = chess.moves()
  if (allMoves.length === 0) return
  chess.move(allMoves[Math.floor(Math.random() * allMoves.length)])
  board.position(chess.fen())
  $("#move-history").text(chess.history())
}
let counter = 0
const baby = e => {
  let moves = chess.moves();
  let bestMove = null;
  let bestValue = Number.NEGATIVE_INFINITY;
  let babyCounter = 0
  for (var i = 0; i < moves.length; i++) {
    babyCounter++
    let newMove = moves[i];
    chess.move(newMove);
    let boardValue;
    if (chess.turn() === 'w') {
      boardValue = -boardVal()
    } else {
      boardValue = boardVal()
    }
    chess.undo();
    if (boardValue > bestValue) {
      bestValue = boardValue;
      bestMove = newMove
    }
  }
  console.log(`Backend baby checked ${babyCounter} moves`)
  counter++
  if (counter < 4 || bestMove === 'Ra8' || bestMove === 'Rb8' || bestMove === 'Rg8' || bestMove === 'Rh8') {
    randomMove()
  } else {
    chess.move(bestMove)
    board.position(chess.fen())
    $("#move-history").text(chess.history())
  }
}

let minimaxCounter = 0
var maxplayer;
let minimaxRunCount = 0
const minimax = plus => {
  const search = (a, b, maxPlayer, layer) => {
    minimaxCounter++
    if (layer === 0) {
      if (maxplayer) return evaluationFunc();
      else return -evaluationFunc()
    }
    let moves = chess.moves();
    let movesLen = moves.length
    let bestMove = maxPlayer ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
    if (maxPlayer) {
      for (var i = 0; i < movesLen; i++) {
        chess.move(moves[i]);
        bestMove = Math.max(bestMove, search(a, b, !maxPlayer, layer - 1));
        chess.undo();
        a = Math.max(a, bestMove);
        if (b <= a) {
          return bestMove;
        }
      }
      return bestMove;
    } else {
      for (var i = 0; i < movesLen; i++) {
        chess.move(moves[i]);
        bestMove = Math.min(bestMove, search(a, b, !maxPlayer, layer - 1));
        chess.undo();
        b = Math.min(b, bestMove);
        if (b <= a) {
          return bestMove;
        }
      }
      return bestMove;
    }
  };
  minimaxRunCount++
  minimaxCounter = 0
  let evaluationFunc = null
  plus ? evaluationFunc = _boardVal : evaluationFunc = boardVal
  chess.turn() === 'w' ? maxplayer = true : maxplayer = false;
  let allMoves = chess.moves();
  let bestMove = Number.NEGATIVE_INFINITY;
  var move;
  let allMovesLen = allMoves.length
  for (var i = 0; i < allMovesLen; i++) {
    let newMove = allMoves[i]
    chess.move(newMove);
    let value = search(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, maxplayer, 2);
    chess.undo();
    if (value >= bestMove) {
      bestMove = value;
      move = newMove;
    }
  }
  if (move === 'Ng4' && minimaxRunCount === 2) move = 'Nc6'
  chess.move(move)
  board.position(chess.fen())
  $("#move-history").text(chess.history())
};



$("#theme-select").change(function () {
  theme = $('#theme-select').val()
  localStorage.setItem('boardTheme', $('#theme-select').val())
  setBoardTheme()
})


if (localStorage.getItem('ai') === 'on') {
  $("#ai").prop('checked', true)
  $("#ai-diff").prop('disabled', false)
  determineCompFunc()
}

const setBoardTheme = e => {
  $('.white-1e1d7').css('background-color', boardTheme[theme][0])
  $(".black-3c85d").css("background-color", boardTheme[theme][1])
}

const highlightMoves = s => {
  let square = $(`#board .square-${s}`)
  if (square.hasClass('black-3c85d')) {
    square.css('background-color', '#696969')
  } else {
    square.css('background', '#a9a9a9')
  }
}


const determineWinner = () => {
  if (chess.game_over()) {
    var winner;
    if (chess.turn() == 'b') {
      winner = 'White'
    } else {
      winner = 'Black'
    }
    console.log("Game over " + winner + ' won!')
    if (computerFunction != off) {
      var msg;
      var winType;
      $("#winner-box").text(`${winner} won!`)
      if (winner === 'Black') {
        winner = 'The computer won!';
        msg = 'Better luck next time :('
      } else {
        winner = 'You beat the computer';
        msg = 'Great job!'
      }
      if (chess.in_checkmate()) {
        winType = 'Game resulted in checkmate!'
      } else if (chess.in_stalemate()) {
        winType = 'Game resulted in stalemate!'
      } else if (chess.in_draw()) {
        winType = 'Game ended in a draw!'
      } else if (chess.in_threefold_repetition()) {
        winType = 'Game ended due to threefold repetition!'
      } else if (chess.insufficient_material()) {
        winType = 'Game ended due to insufficient material :('
      }

      $("#wintype").text(winType)
      $("body").append(`<div class="modal fade text-black" id="winnerModal" tabindex="-1" aria-labelledby="winnerModalL" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="winnerModalL">${winner}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ${msg}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`)
      $('#winnerModal').modal('show')
      $("#newgame-btn").removeClass('d-none')
    }
  }
}
$("#newgame-btn").on('click', function () {
  location.reload()
})

const onDrag = (trigger, target) => {
  determineWinner()
  if (chess.game_over() ||
    (chess.turn() === 'w' && target.search(/^b/) !== -1) ||
    (chess.turn() === 'b' && target.search(/^w/) !== -1)) {
    return false
  }
}
const minimaxLoader = $("#minimax-loader")
const onDrop = (source, target) => {
  $('#board .square-55d63').css('background', '')
  setBoardTheme()
  let move = chess.move({
    from: source,
    to: target,
    promotion: 'q'
  })

  if (move === null) {
    return 'snapback'
  }
  determineWinner()
  console.log(`Current FEN string: ${chess.fen()}`)
  $("#check-box").text('')
  if (chess.in_check() && !chess.in_checkmate()) {
    if (chess.turn() === 'w') {
      $("#check-box").text('White is in check!')
    } else if (chess.turn() === 'b') {
      $("#check-box").text('Black is in check!')
    }
  }

  if (computerFunction === minimax) {
    minimaxLoader.show()
    setTimeout(runMinimax, 250)
  } else if (computerFunction === minimaxPlus) {
    minimaxLoader.show()
    setTimeout(runMinimaxPlus, 250)
  } else {
    window.setTimeout(computerFunction, 250)
  }
  $("#move-history").text(chess.history())
}
minimaxLoader.hide()
const runMinimax = e => {
  let d1 = new Date().getTime()
  minimax()
  let d2 = new Date().getTime()
  minimaxLoader.hide()
  console.log(`Minimax searched ${minimaxCounter} positions in ${(d2 - d1) / 1000} seconds`)
}
const runMinimaxPlus = e => {
  let d1 = new Date().getTime()
  minimax(true)
  let d2 = new Date().getTime()
  minimaxLoader.hide()
  console.log(`Minimax++ searched ${minimaxCounter} positions in ${(d2 - d1) / 1000} seconds`)
}

const onSnapEnd = e => {
  board.position(chess.fen())
}

board = ChessBoard('board', {
  draggable: true,
  position: position,
  pieceTheme: 'assets/chesspieces/{piece}.svg',
  onDragStart: onDrag,
  onDrop: onDrop,
  onMouseoutSquare: function () {
    $('#board .square-55d63').css('background', '')
    setBoardTheme()
  },
  onMouseoverSquare: function (square, piece) {
    setBoardTheme()
    let moves = chess.moves({
      square: square,
      verbose: true
    })
    if (moves.length === 0) return
    highlightMoves(square)
    for (let i = 0; i < moves.length; i++) {
      highlightMoves(moves[i].to)
    }
  },
  onSnapEnd: onSnapEnd
})
if (localStorage.getItem('computerFunction')) {
  fn = window[localStorage.getItem('computerFunction')]
  if (typeof fn === 'function') {
    computerFunction = fn;
  }
}
$('div.board-b72b1').css({
  'border': 'none',
  'border-radius': '5px'
})
$('[class^="square-"').css('transition', '200ms')
$(window).resize(board.resize)
window.addEventListener('load', function () {
  const loader = $("#loader")
  loader.removeClass('d-flex')
  loader.remove()
  chessBoard.show()
  chessBoard.css('opacity', '1')
})
setBoardTheme()
$("#theme-collapse").collapse('show')