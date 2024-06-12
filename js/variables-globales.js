var movimientos = 0;
var nivelActual = 0;
var ganar = false;
var practica = false;
var segundos = 30;
var minutos = 0;

var cartas = [["🦦","🎨"],["♿","👽"],["🌎","🎪"],["🦌","💉"]];

var niveles = [
    {cartasTotales: cartas[0],
    maxMovimientos: 6,
    minutos:0,
    segundos:15},
    {cartasTotales: cartas[0].concat(cartas[1]),
    maxMovimientos: 10,
    minutos: 1,
    segundos: 0},
    {cartasTotales: cartas[0].concat(cartas[1],cartas[2]),
    maxMovimientos: 16,
    minutos: 1,
    segundos: 15},
    {cartasTotales: cartas[0].concat(cartas[1],cartas[2],cartas[3]),
    maxMovimientos: 20,
    minutos: 1,
    segundos: 45}
];

