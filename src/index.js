var Board = /** @class */ (function () {
    function Board() {
        this.stateOfBoard = {
            0: [4, 6, 8, 10, 12, 8, 6, 4],
            1: [2, 2, 2, 2, 2, 2, 2, 2],
            2: [0, 0, 0, 0, 0, 0, 0, 0],
            3: [0, 0, 0, 0, 0, 0, 0, 0],
            4: [0, 0, 0, 0, 0, 0, 0, 0],
            5: [0, 0, 0, 0, 0, 0, 0, 0],
            6: [1, 1, 1, 1, 1, 1, 1, 1],
            7: [3, 5, 7, 9, 11, 7, 5, 3]
        };
        this.turn = 1;
    }
    Board.prototype.getStatePosition = function (coordenadaX, coordenadaY) {
        return this.stateOfBoard[coordenadaX][coordenadaY];
    };
    // Impares Blancos / Pares Negros / 0-> Sin Pieza
    Board.prototype.setNewState = function (coordenadaX, coordenadaY, pieza) {
        this.stateOfBoard[coordenadaX][coordenadaY] = pieza.state;
        this.stateOfBoard[pieza.coordenadaX][pieza.coordenadaY] = 0;
        this.nextTurn();
        console.log(this.stateOfBoard);
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
        var union1 = ecox + 1 + "," + ecoy;
        var union2 = ecox + 2 + "," + ecoy;
        bagof.push(union1);
        bagof.push(union2);
    }
    else if (pawnToMove.color == "BLACK" && pawnToMove.everMoved == false) {
        var union3 = ecox - 1 + "," + ecoy;
        var union4 = ecox - 2 + "," + ecoy;
        bagof.push(union3);
        bagof.push(union4);
    }
    else if (pawnToMove.color == "WHITE" && pawnToMove.everMoved == true) {
        var union5 = ecox + 1 + "," + ecoy;
        bagof.push(union5);
    }
    else {
        var union6 = ecox - 1 + "," + ecoy;
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
function renderPosition(state) {
    if (state == 2) {
        return "&#9823;";
    }
    else if (state == 1) {
        return "&#9817;";
    }
    else if (state == 4) {
        return "&#9820;";
    }
    else if (state == 3) {
        return "&#9814;";
    }
    else if (state == 6) {
        return "&#9822;";
    }
    else if (state == 5) {
        return "&#9816;";
    }
    else if (state == 8) {
        return "&#9821;";
    }
    else if (state == 7) {
        return "&#9815;";
    }
    else if (state == 10) {
        return "&#9819;";
    }
    else if (state == 9) {
        return "&#9813;";
    }
    else if (state == 12) {
        return "&#9818;";
    }
    else if (state == 11) {
        return "&#9812;";
    }
    else {
        return "";
    }
}
;
function genera_tabla() {
    // Obtener la referencia del elemento body
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
            // var textoCelda = document.createTextNode(
            //   renderPosition(tablero.getStatePosition(fix3, fix5))
            // );
            celda.innerHTML = "" + renderPosition(tablero.getStatePosition(fix3, fix5));
            // celda.appendChild(textoCelda);
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
        // tabla.setAttribute("width", "100%");
        // tabla.setAttribute("heigth", "100%");
        tabla.setAttribute("border", "2");
    });
}
genera_tabla();
var peonXX = new Pieza(1, 1, 1);
var peonBB = new Pieza(4, 4, 3);
// setTimeout(function(){ alert("Hello"); }, 3000);
tablero.setNewState(7, 7, peonXX);
tablero.setNewState(0, 7, peonBB);
console.log(tablero.stateOfBoard);
tablero.stateOfBoard[peonXX.coordenadaX][peonXX.coordenadaY] = 0;
tablero.stateOfBoard[4][4] = 1;
console.log(tablero.stateOfBoard);
genera_tabla();
