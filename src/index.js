var Board = /** @class */ (function () {
    function Board() {
        this.stateOfBoard = {
            7: [4, 6, 8, 10, 12, 8, 6, 4],
            6: [2, 2, 2, 2, 2, 2, 2, 2],
            5: [0, 0, 0, 0, 0, 0, 0, 0],
            4: [0, 0, 0, 0, 0, 0, 0, 0],
            3: [0, 0, 0, 3, 0, 0, 0, 0],
            2: [0, 0, 0, 0, 0, 0, 0, 0],
            1: [1, 1, 1, 1, 1, 1, 1, 1],
            0: [3, 5, 7, 9, 11, 7, 5, 3]
        };
        this.turn = 1;
    }
    Board.prototype.getStatePosition = function (coordenadaX, coordenadaY) {
        return this.stateOfBoard[coordenadaX][coordenadaY];
    };
    // Impares Blancos / Pares Negros / 0-> Sin Pieza
    Board.prototype.setNewState = function (coordenadaX, coordenadaY, newState) {
        this.stateOfBoard[coordenadaX][coordenadaY] = newState;
        this.nextTurn();
        return coordenadaX + "," + coordenadaY + "->Tiene un Estado de " + newState;
    };
    Board.prototype.nextTurn = function () {
        this.turn = this.turn + 1;
    };
    return Board;
}());
var Juego = /** @class */ (function () {
    function Juego() {
    }
    return Juego;
}());
var Jugador = /** @class */ (function () {
    function Jugador() {
    }
    return Jugador;
}());
var Pieza = /** @class */ (function () {
    function Pieza(coordenadaX, coordenadaY, state) {
        this.everMoved = false;
        // this.tipo = tipo;
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
        this.state = state;
        if (this.state != 0) {
            this.color = this.getColor();
            this.tipo = this.getType();
        }
    }
    Pieza.prototype.getPositionState = function () {
        return this.coordenadaX + "," + this.coordenadaY;
    };
    Pieza.prototype.setPositionState = function (newStateX, newStateY) {
        this.coordenadaX = newStateX;
        this.coordenadaY = newStateY;
        return this.coordenadaX + "," + this.coordenadaY;
    };
    Pieza.prototype.getColor = function () {
        var maths = this.state % 2;
        if (this.state != 0) {
            if (maths == 1) {
                this.color = "WHITE";
                return "WHITE";
            }
            else {
                this.color = "BLACK";
                return "BLACK";
            }
        }
    };
    Pieza.prototype.getType = function () {
        if (this.state == 1 || this.state == 2) {
            this.tipo = "PAWN";
            return "PAWN";
        }
        else if (this.state == 3 || this.state == 4) {
            this.tipo = "TOWER";
            return "TOWER";
        }
        else if (this.state == 5 || this.state == 6) {
            this.tipo = "HORSE";
            return "HORSE";
        }
        else if (this.state == 7 || this.state == 8) {
            this.tipo = "BISHOP";
            return "BISHOP";
        }
        else if (this.state == 9 || this.state == 10) {
            this.tipo = "QUEEN";
            return "QUEEN";
        }
        else if (this.state == 11 || this.state == 12) {
            this.tipo = "KING";
            return "KING";
        }
        else {
            this.tipo = "EMPTY";
            return "EMPTY";
        }
    };
    return Pieza;
}());
var tablero = new Board();
// for (let i = 0 ; i < tablero.stateOfBoard[i].length ; i++){
//   console.log(tablero.stateOfBoard[3][3]);
// }
function possibleMovesPawn(pawnToMove) {
    // POsible chECKER
    var ecox = pawnToMove.coordenadaX;
    var ecoy = pawnToMove.coordenadaY;
    var bagof = [];
    // MAYBE IS BEST CREATE A MATH FUNCTION FOR THIS
    if (pawnToMove.color == "WHITE" && pawnToMove.everMoved == false) {
        var union1 = (ecox + 1) + "," + (ecoy);
        var union2 = (ecox + 2) + "," + (ecoy);
        bagof.push(union1);
        bagof.push(union2);
    }
    else if (pawnToMove.color == "BLACK" && pawnToMove.everMoved == false) {
        var union3 = (ecox - 1) + "," + (ecoy);
        var union4 = (ecox - 2) + "," + (ecoy);
        bagof.push(union3);
        bagof.push(union4);
    }
    else if (pawnToMove.color == "WHITE" && pawnToMove.everMoved == true) {
        var union5 = (ecox + 1) + "," + (ecoy);
        bagof.push(union5);
    }
    else {
        var union6 = (ecox - 1) + "," + ecoy;
        bagof.push(union6);
    }
    // var union: string = ecox + "," + (ecoy);
    console.log(bagof);
    // return ecox + " " + ecoy;
}
function possibleMovesTorre(towerToMove) {
    var ecox = towerToMove.coordenadaX;
    var ecoy = towerToMove.coordenadaY;
    var bagof = [];
    console.log(tablero.stateOfBoard[ecox]);
    tablero.stateOfBoard[ecox].forEach(function (element) {
        console.log(element);
    });
    console.log(ecox + "," + ecoy);
}
function getPieza(stateX, stateY) {
    var state = tablero.getStatePosition(stateX, stateY);
    var statePiezaObj = new Pieza(stateX, stateY, state);
    // statePiezaObj.getType();
    // statePiezaObj.getColor();
    console.log(statePiezaObj);
    return statePiezaObj;
}
// var piezaAA: Pieza = getPieza(1, 4);
// possibleMovesPawn(piezaAA);
var piezaBB = getPieza(3, 3);
possibleMovesTorre(piezaBB);
// var piezaXX = new Pieza("peon", 1, 0);
// console.log(piezaXX.getPositionState());
function changeStateBoard(oldStateX, oldStateY, newStateX, newStateY) { }
// console.log(piezaXX.getPositionState());
// console.log(piezaXX.setPositionState(2, 2));
// console.log(piezaXX.getPositionState());
// console.log(tablero.stateOfBoard[1]);
// console.log(tablero.setNewState(1, 0, 2));
// console.log(tablero.stateOfBoard);
var testing = document.getElementById("root");
testing.innerHTML = "\n<table id=\"table\"></table>\n<h2>" + piezaBB.tipo + "</h2>\n<h3>" + piezaBB.coordenadaX + "," + piezaBB.coordenadaY + "\n";
var testingTable = document.getElementById("table");
tablero.stateOfBoard.forEach(function (element) {
    console.log(element);
});
console.log(testing);
