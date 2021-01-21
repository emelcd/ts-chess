var Board = /** @class */ (function () {
    function Board() {
        this.stateOfBoard = {
            1: [4, 6, 8, 10, 12, 8, 6, 4],
            2: [2, 2, 2, 2, 2, 2, 2, 2],
            3: [0, 0, 0, 0, 0, 0, 0, 0],
            4: [0, 0, 0, 0, 0, 0, 0, 0],
            5: [0, 0, 0, 0, 0, 0, 0, 0],
            6: [0, 0, 0, 0, 0, 0, 0, 0],
            7: [1, 1, 1, 1, 1, 1, 1, 1],
            8: [3, 5, 7, 9, 11, 7, 5, 3]
        };
        this.turn = 1;
    }
    // Impares Blancos / Pares Negros / 0-> Sin Pieza
    Board.prototype.setNewState = function (coordenadaX, coordenadaY, newState) {
        this.stateOfBoard[coordenadaX][coordenadaY] = newState;
        return coordenadaX + "," + coordenadaY + "->Tiene un Estado de " + newState;
    };
    return Board;
}());
var Pieza = /** @class */ (function () {
    function Pieza(tipo, coordenadaX, coordenadaY) {
        this.tipo = tipo;
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
    }
    Pieza.prototype.getPositionState = function () {
        return this.coordenadaX + "," + this.coordenadaY;
    };
    Pieza.prototype.setPositionState = function (newStateX, newStateY) {
        this.coordenadaX = newStateX;
        this.coordenadaY = newStateY;
        return this.coordenadaX + "," + this.coordenadaY;
    };
    return Pieza;
}());
var piezaXX = new Pieza("peon", 1, 0);
var tablero = new Board();
console.log(piezaXX.getPositionState());
console.log(piezaXX.setPositionState(2, 2));
console.log(piezaXX.getPositionState());
console.log(tablero.stateOfBoard[1]);
console.log(tablero.setNewState(1, 0, 2));
console.log(tablero.stateOfBoard);
