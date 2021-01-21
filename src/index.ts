class Board {
  stateOfBoard: object;
  turn: number;

  constructor() {
    this.stateOfBoard = {
      0: [4, 6, 8, 10, 12, 8, 6, 4],
      1: [2, 2, 2, 2, 2, 2, 2, 2],
      2: [0, 0, 0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 12, 0, 0],
      4: [0, 0, 0, 1, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0, 0],
      6: [1, 1, 1, 1, 1, 1, 1, 1],
      7: [3, 5, 7, 9, 11, 7, 5, 3],
    };
    this.turn = 1;
  }
  getStatePosition(coordenadaX: number, coordenadaY: number) {
    return this.stateOfBoard[coordenadaX][coordenadaY];
  }
  // Impares Blancos / Pares Negros / 0-> Sin Pieza
  setNewState(coordenadaX: number, coordenadaY: number, newState: number) {
    this.stateOfBoard[coordenadaX][coordenadaY] = newState;
    this.nextTurn();
    return coordenadaX + "," + coordenadaY + "->Tiene un Estado de " + newState;
  }
  nextTurn() {
    this.turn = this.turn + 1;
  }
}
class Juego {
  tablero: Board;
}

class Jugador {
  nombre: string;
  piezas: Pieza[];
}

class Pieza {
  state: number;
  everMoved: boolean = false;
  coordenadaX: number;
  coordenadaY: number;
  color: string;
  tipo: string;

  constructor(coordenadaX: number, coordenadaY: number, state: number) {
    // this.tipo = tipo;
    this.coordenadaX = coordenadaX;
    this.coordenadaY = coordenadaY;
    this.state = state;
    if (this.state != 0) {
      this.color = this.getColor();
      this.tipo = this.getType();
    }
  }

  getPositionState() {
    return this.coordenadaX + "," + this.coordenadaY;
  }
  setPositionState(newStateX: number, newStateY: number) {
    this.coordenadaX = newStateX;
    this.coordenadaY = newStateY;
    return this.coordenadaX + "," + this.coordenadaY;
  }
  getColor() {
    var maths = this.state % 2;
    if (this.state != 0) {
      if (maths == 1) {
        this.color = "WHITE";
        return "WHITE";
      } else {
        this.color = "BLACK";
        return "BLACK";
      }
    }
  }
  getType() {
    if (this.state == 1 || this.state == 2) {
      this.tipo = "PAWN";
      return "PAWN";
    } else if (this.state == 3 || this.state == 4) {
      this.tipo = "TOWER";
      return "TOWER";
    } else if (this.state == 5 || this.state == 6) {
      this.tipo = "HORSE";
      return "HORSE";
    } else if (this.state == 7 || this.state == 8) {
      this.tipo = "BISHOP";
      return "BISHOP";
    } else if (this.state == 9 || this.state == 10) {
      this.tipo = "QUEEN";
      return "QUEEN";
    } else if (this.state == 11 || this.state == 12) {
      this.tipo = "KING";
      return "KING";
    } else {
      this.tipo = "EMPTY";
      return "EMPTY";
    }
  }
}

var tablero = new Board();

// for (let i = 0 ; i < tablero.stateOfBoard[i].length ; i++){

//   console.log(tablero.stateOfBoard[3][3]);
// }
function possibleMovesPawn(pawnToMove: Pieza) {
  // POsible chECKER
  var ecox = pawnToMove.coordenadaX;
  var ecoy = pawnToMove.coordenadaY;
  var bagof: string[] = [];
  // MAYBE IS BEST CREATE A MATH FUNCTION FOR THIS
  if (pawnToMove.color == "WHITE" && pawnToMove.everMoved == false) {
    var union1: string = ecox + 1 + "," + ecoy;
    var union2: string = ecox + 2 + "," + ecoy;
    bagof.push(union1);
    bagof.push(union2);
  } else if (pawnToMove.color == "BLACK" && pawnToMove.everMoved == false) {
    var union3: string = ecox - 1 + "," + ecoy;
    var union4: string = ecox - 2 + "," + ecoy;
    bagof.push(union3);
    bagof.push(union4);
  } else if (pawnToMove.color == "WHITE" && pawnToMove.everMoved == true) {
    var union5: string = ecox + 1 + "," + ecoy;
    bagof.push(union5);
  } else {
    var union6: string = ecox - 1 + "," + ecoy;
    bagof.push(union6);
  }
  // var union: string = ecox + "," + (ecoy);

  console.log(bagof);
  // return ecox + " " + ecoy;
}
function possibleMovesTorre(towerToMove: Pieza) {
  var ecox = towerToMove.coordenadaX;
  var ecoy = towerToMove.coordenadaY;
  var bagof: string[] = [];
  // console.log(tablero.stateOfBoard[ecox])
  tablero.stateOfBoard[ecox].forEach((element) => {
    console.log(element);
  });
  // console.log(ecox +","+ ecoy)
}
function getPieza(stateX: number, stateY: number) {
  let state = tablero.getStatePosition(stateX, stateY);
  let statePiezaObj = new Pieza(stateX, stateY, state);
  // statePiezaObj.getType();
  // statePiezaObj.getColor();
  // console.log(statePiezaObj)
  return statePiezaObj;
}

// var piezaAA: Pieza = getPieza(1, 4);
// possibleMovesPawn(piezaAA);
var piezaBB: Pieza = getPieza(1, 5);
// possibleMovesTorre(piezaBB);
// var piezaXX = new Pieza("peon", 1, 0);
// console.log(piezaXX.getPositionState());

function changeStateBoard(
  oldStateX: number,
  oldStateY: number,
  newStateX: number,
  newStateY: number
) {}

function renderPosition(state) {
  if (state == 2) {
    return "&#9823;";
  } 
  else if (state == 1) {
    return "&#9817;"
  } 
  else if (state ==  4) {
    return "&#9820;"
  } 
  else if (state == 3) {
    return "&#9814;"
  } 
  else if (state == 6) {
    return "&#9822;"
  } 
  else if (state == 5) {
    return "&#9816;"
  } 
  else if (state == 8) {
    return "&#9821;"
  } 
  else if (state == 7) {
    return "&#9815;"
  } 
  else if (state == 10) {
    return "&#9819;"
  } 
  else if (state == 9) {
    return "&#9813;"
  } 
  else if (state == 12) {
    return "&#9818;"
  } 
  else if (state == 11) {
    return "&#9812;"
  } 
  else {
    return "";
  }
}
var body = document.getElementsByTagName("body")[0];

var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
Object.keys(tablero.stateOfBoard).forEach((elementROW) => {
  // console.log(tablero.stateOfBoard[elementROW])
  let fix: number = +elementROW;
  let fix2: number = 0;
  let fix4: number = 0;
  var hilera = document.createElement("tr");
  Object.keys(tablero.stateOfBoard[elementROW]).forEach((elementCOLUMNS) => {
    // console.log(elementCOLUMNS)
    let fix3: number = +elementROW;
    let fix5: number = +elementCOLUMNS;
    var celda = document.createElement("td");
    // var textoCelda = document.createTextNode(
    //   renderPosition(tablero.getStatePosition(fix3, fix5))
      
    // );
    celda.innerHTML= `${renderPosition(tablero.getStatePosition(fix3, fix5))}`

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
      var textoCelda = document.createTextNode(
        "celda en la hilera " + i + ", columna " + j
      );
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
