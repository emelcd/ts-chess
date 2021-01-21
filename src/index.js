var Board = /** @class */ (function () {
    function Board() {
        this.stateOfBoard = {
            7: [4, 6, 8, 10, 12, 8, 6, 4],
            6: [2, 2, 2, 2, 2, 2, 2, 2],
            5: [0, 0, 0, 0, 0, 0, 0, 0],
            4: [0, 0, 0, 0, 0, 0, 0, 0],
            3: [0, 0, 0, 0, 0, 0, 0, 0],
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
    // console.log(tablero.stateOfBoard[ecox])
    tablero.stateOfBoard[ecox].forEach(function (element) {
        console.log(element);
    });
    // console.log(ecox +","+ ecoy)
}
function getPieza(stateX, stateY) {
    var state = tablero.getStatePosition(stateX, stateY);
    var statePiezaObj = new Pieza(stateX, stateY, state);
    // statePiezaObj.getType();
    // statePiezaObj.getColor();
    // console.log(statePiezaObj)
    return statePiezaObj;
}
// var piezaAA: Pieza = getPieza(1, 4);
// possibleMovesPawn(piezaAA);
var piezaBB = getPieza(1, 5);
// possibleMovesTorre(piezaBB);
// var piezaXX = new Pieza("peon", 1, 0);
// console.log(piezaXX.getPositionState());
function changeStateBoard(oldStateX, oldStateY, newStateX, newStateY) { }
// console.log(piezaXX.getPositionState());
// console.log(piezaXX.setPositionState(2, 2));
// console.log(piezaXX.getPositionState());
// console.log(tablero.stateOfBoard[1]);
// console.log(tablero.setNewState(1, 0, 2));
// console.log(tablero.stateOfBoard);
// var testing = document.getElementById("root");
// testing.innerHTML = `
// <table id="table"></table>
// <h2>${piezaBB.tipo}</h2>
// <h3>${piezaBB.coordenadaX},${piezaBB.coordenadaY}
// `
// var testingTable = document.getElementById("table");
var body = document.getElementsByTagName("body")[0];
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
Object.keys(tablero.stateOfBoard).forEach(function (elementROW) {
    // console.log(tablero.stateOfBoard[elementROW])
    var fix = +elementROW;
    var fix2 = 0;
    var fix4 = 0;
    var hilera = document.createElement("tr");
    Object.keys(tablero.stateOfBoard[elementROW]).forEach(function (elementCOLUMNS) {
        // console.log(elementCOLUMNS)
        var fix3 = +elementROW;
        var fix5 = +elementCOLUMNS;
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(tablero.getStatePosition(fix3, fix5));
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        fix2++;
        fix4++;
        // console.log(fix2+""+fix4);
    });
    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("width", "100%");
    tabla.setAttribute("heigth", "100%");
    tabla.setAttribute("border", "2");
});
function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("div")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < 10; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}
// genera_tabla();
